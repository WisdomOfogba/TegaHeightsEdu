type AboutProps = {
  about: string[];
};

const About = ({ about }: AboutProps) => {
  return (
    <section className="p-8 bg-white rounded-md flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      {about.map((ab, index) => (
        <p key={index} className="text-gray-700 mb-4">{ab}</p>
      ))}
    </section>
  );
};

export default About;
