import { useEffect, useState } from "react";
import Accordion from "./Accordion";

type WhyProps = {
  why?: string[];
  whyc?: {
      t: string;
      p: string;
  }[];
};

const WhyStudyHere = ({ why, whyc }: WhyProps) => {

  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    handleToggle(0);
  }, []);

  return (
    <section className="p-8 bg-white rounded-md w-full">
      <h2 className="text-2xl font-bold mb-4">Why study here</h2>
      {why && (
        <ul className="list-disc pl-5 text-gray-700">
          {why.map((w, index) => (
            <li key={index}>{w}</li>
          ))} 
        </ul>
      )}
      {whyc && (
        <div className="gap-2 flex flex-col z-40">
          {whyc.map((wc, index) => (
            <Accordion
              key={index}
              title={wc.t}
              isOpen={activeIndex === index}
              onToggle={() => handleToggle(index)}
            >
              <div>{wc.p}</div>
            </Accordion>
          ))}
        </div>
      )}
    </section>
  );
};

export default WhyStudyHere;
