type FeatureProps = {
  feature: {
    f1?: string;
    f2?: string;
    f3?: string;
    f4?: string;
    f5?: string;
    f6?: string;
    f7?: string;
    f8?: string;
    f9?: string;
    f10?: string;
  };
};

const FeaturedProgrammes = ({ feature }: FeatureProps) => {
  return (
    <section className="p-8 bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-4">Featured programmes</h2>
      <div className="flex flex-wrap gap-4">
        {feature.f1 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f1}
          </span>
        )}
        {feature.f2 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f2}
          </span>
        )}
        {feature.f3 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f3}
          </span>
        )}
        {feature.f4 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f4}
          </span>
        )}
        {feature.f5 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f5}
          </span>
        )}
        {feature.f6 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f6}
          </span>
        )}
        {feature.f7 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f7}
          </span>
        )}
        {feature.f8 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f8}
          </span>
        )}
        {feature.f9 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f9}
          </span>
        )}
        {feature.f10 && (
          <span className="bg-blue-600 text-white px-4 py-2 rounded">
            {feature.f10}
          </span>
        )}
      </div>
    </section>
  );
};

export default FeaturedProgrammes;
