// components/Accordion.tsx
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className={`w-full text-left p-4 font-medium hover:text-white hover:bg-blue-600 ${
          isOpen ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
        } focus:outline-none flex items-center justify-between transition-all duration-300`}
        onClick={onToggle}
      >
        {title}
        <div className="w-7">{isOpen ? <MinusIcon /> : <PlusIcon />}</div>
      </button>
      <div className=" relative overflow-hidden">
        <div
          className={` p-4  bg-white transition-all duration-300  ${
            isOpen ? "translate-y-0" : "-translate-y-full absolute"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
