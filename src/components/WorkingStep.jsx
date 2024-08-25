import React from "react";

export const WorkingStep = () => {
  return (
    <div className="relative bg-cover bg-center py-12 bg-workingImg">
      <div className="absolute inset-0 bg-heroBg bg-opacity-85"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-white text-center mb-20">
          <h2 className="text-4xl font-bold font-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg md:w-1/2 w-full mx-auto">
            We are dedicated to helping you navigate life's challenges with
            confidence and clarity.Here you can take therapy step by step.
          </p>
        </div>
        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              1
            </div>
            <h3 className="text-lg font-bold mt-8">
              Discovery & Understanding
            </h3>
            <p className="my-2 text-heroBg">
              Our journey begins with a deep dive into understanding your unique
              situation and needs. Whether you’re seeking support for parenting,
              relationship challenges, or personal growth.
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              2
            </div>
            <h3 className="text-lg font-bold mt-8">Personalized Plan</h3>
            <p className="my-2 text-heroBg">
              Once we’ve gained a clear understanding of your needs, we move on
              to creating a personalized plan. This plan is designed with your
              specific goals in mind, incorporating the latest techniques and
              resources in mental wellness.
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              3
            </div>
            <h3 className="text-lg font-bold mt-8">Support & Growth</h3>
            <p className="my-2 text-heroBg">
              With your personalized plan in place, we embark on the journey of
              support and growth. Our team is here to provide consistent
              guidance, encouragement, and adjustments to your plan as needed.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
