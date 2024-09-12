interface CountryProps {
  country: {
    name: string ;
    bg: string;
    paragraph: {less: string}
  };
}

const CountryCard: React.FC<CountryProps> = ({ country }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={country.bg} alt={country.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2 px-4">Study in {country.name}</h2>
      <p className="px-4 pb-4">{country.paragraph.less}</p>
    </div>
  );
};

export default CountryCard;
