"use client"
import { useEffect } from 'react';
import Search from './SearchComponent';

const Popup = ({ isOpen, onClose, open }: { open: () => void; isOpen: boolean; onClose: () => void }) => {
  const handleOverlayClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      };
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        open();
        event.preventDefault();
      };
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div
        className="w-[300px] h-[400px] bg-white flex justify-center rounded-lg sm:w-[500px] sm:h-[500px]  py-8 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Search close={onClose} />
      </div>
    </div>
  );
};

export default Popup;
