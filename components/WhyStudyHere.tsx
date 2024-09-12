import { useEffect, useRef, useState } from "react";
import Accordion from "./Accordion";

type WhyProps = {
  why?: {
    w1?: string;
    w2?: string;
    w3?: string;
    w4?: string;
    w5?: string;
  };
  whyc?: {
    w1?: {
      t: string;
      p: string;
    };
    w2?: {
      t: string;
      p: string;
    };
    w3?: {
      t: string;
      p: string;
    };
    w4?: {
      t: string;
      p: string;
    };
    w5?: {
      t: string;
      p: string;
    };
    w6?: {
      t: string;
      p: string;
    };
    w7?: {
      t: string;
      p: string;
    };
    w8?: {
      t: string;
      p: string;
    };
    w9?: {
      t: string;
      p: string;
    };
    w10?: {
      t: string;
      p: string;
    };
  };
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
          {why.w1 && <li>{why.w1}</li>}
          {why.w2 && <li>{why.w2}</li>}
          {why.w3 && <li>{why.w3}</li>}
          {why.w4 && <li>{why.w4}</li>}
          {why.w5 && <li>{why.w5}</li>}
        </ul>
      )}
      {whyc && (
        <div className="gap-2 flex flex-col z-40">
          {whyc.w1 && (
            <Accordion
              title={whyc.w1.t}
              isOpen={activeIndex === 0}
              onToggle={() => handleToggle(0)}
            >
              <div>{whyc.w1.p}</div>
            </Accordion>
          )}
          {whyc.w2 && (
            <Accordion
              title={whyc.w2.t}
              isOpen={activeIndex === 1}
              onToggle={() => handleToggle(1)}
            >
              <div>{whyc.w2.p}</div>
            </Accordion>
          )}
          {whyc.w3 && (
            <Accordion
              title={whyc.w3.t}
              isOpen={activeIndex === 2}
              onToggle={() => handleToggle(2)}
            >
              <div>{whyc.w3.p}</div>
            </Accordion>
          )}
          {whyc.w4 && (
            <Accordion
              title={whyc.w4.t}
              isOpen={activeIndex === 3}
              onToggle={() => handleToggle(3)}
            >
              <div>{whyc.w4.p}</div>
            </Accordion>
          )}
          {whyc.w5 && (
            <Accordion
              title={whyc.w5.t}
              isOpen={activeIndex === 4}
              onToggle={() => handleToggle(4)}
            >
              <div>{whyc.w5.p}</div>
            </Accordion>
          )}
          {whyc.w6 && (
            <Accordion
              title={whyc.w6.t}
              isOpen={activeIndex === 5}
              onToggle={() => handleToggle(5)}
            >
              <div>{whyc.w6.p}</div>
            </Accordion>
          )}
          {whyc.w7 && (
            <Accordion
              title={whyc.w7.t}
              isOpen={activeIndex === 0}
              onToggle={() => handleToggle(0)}
            >
              <div>{whyc.w7.p}</div>
            </Accordion>
          )}
          {whyc.w8 && (
            <Accordion
              title={whyc.w8.t}
              isOpen={activeIndex === 0}
              onToggle={() => handleToggle(0)}
            >
              <div>{whyc.w8.p}</div>
            </Accordion>
          )}
          {whyc.w9 && (
            <Accordion
              title={whyc.w9.t}
              isOpen={activeIndex === 0}
              onToggle={() => handleToggle(0)}
            >
              <div>{whyc.w9.p}</div>
            </Accordion>
          )}
          {whyc.w10 && (
            <Accordion
              title={whyc.w10.t}
              isOpen={activeIndex === 0}
              onToggle={() => handleToggle(0)}
            >
              <div>{whyc.w10.p}</div>
            </Accordion>
          )}
        </div>
      )}
    </section>
  );
};

export default WhyStudyHere;
