type FeatureProps = {
  feature: string[];
};

const FeaturedProgrammes = ({ feature }: FeatureProps) => {
  return (
    <section className="p-8 bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-4">Featured programmes</h2>
      <div className="flex flex-wrap gap-4">
        {feature.map((f, index) => (
          <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded">
            {f}
          </span>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProgrammes;
