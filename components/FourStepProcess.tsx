import { FourStepProcesses } from "@/constant/data";
import React from "react";

const FourStepProcess = () => {
  return (
    <section className="bg-gray-100">
      <div className="w-full py-12 container px-4 md:px-12">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Study abroad, in 4 easy steps
        </h2>

        {/* Steps and Details */}
        <div className="overflow-x-auto scrollbar-thin">
          <div className="flex flex-nowrap gap-8 px-4 w-max">
            {/* Step 1 */}
            {FourStepProcesses.map((steps) => (
              <div
                key={steps.id}
                className="step-detail bg-white shadow-md p-6 rounded-md w-72 md:w-72 text-center flex-shrink-0"
              >
                <div className="step flex flex-col items-center mb-4">
                  <div className="rounded-full h-12 w-12 flex justify-center items-center bg-blue-600 text-white font-bold">
                    {steps.id}
                  </div>
                  <p className="mt-2 text-center font-semibold">
                    {steps.title}
                  </p>
                </div>
                <p>{steps.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourStepProcess;
