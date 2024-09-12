interface SchoolProps {
  school: {
    id: string;
    name: string;
    bg: string;
  };
}

const SchoolCard: React.FC<SchoolProps> = ({ school }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden pb-10 h-72 flex flex-col justify-between">
      <img src={school.bg} alt={school.id} className="w-full h-40 object-cover" />
      <h2 className="text-xl font-semibold mb-2 px-4">{school.name}</h2>
    </div>
  );
};

export default SchoolCard;
