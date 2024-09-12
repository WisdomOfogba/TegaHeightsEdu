type AboutProps = {
  about: {
    p1?: string,
    p2?: string,
    p3?: string,
    p4?: string,
    p5?: string
  };
};

const About = ({ about }: AboutProps) => {
  return (
    <section className="p-8 bg-white rounded-md flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      {about.p1 && <p className="text-gray-700">{about.p1}</p>}
      {about.p2 && <p className="text-gray-700 mt-4">{about.p2}</p>}
      {about.p3 && <p className="text-gray-700 mt-4">{about.p3}</p>}
      {about.p4 && <p className="text-gray-700 mt-4">{about.p4}</p>}
      {about.p5 && <p className="text-gray-700 mt-4">{about.p5}</p>}
    </section>
  );
};

export default About;
