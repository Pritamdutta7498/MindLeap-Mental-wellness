import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utilities/animationVarients";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Our counseling services are available online, making it easy for you
            to access the help you need from the comfort of your home.
          </p>
        </motion.div>
        {/* service category */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
            >
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skill</Tab>
              <Tab>Felling Stuck</Tab>
              <Tab>Self Confidence</Tab>
            </motion.TabList>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2 bg-white rounded-lg p-12 font-secondary"
                >
                  <h2 className="text-3xl font-semibold text-primary mb-4">
                    Couple Counseling
                  </h2>
                  <p className="mb-8">
                    Relationships are the cornerstone of a fulfilling life, but
                    even the strongest couples face challenges. Our couple
                    counseling services are designed to help partners build
                    stronger connections, improve communication, and resolve
                    conflicts in a healthy, constructive manner.{" "}
                  </p>
                  <h4 className="font-medium text-xl text-black mb-4 ">
                    Benifites
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2"
                >
                  <img
                    src={serviceImg1}
                    alt="service img"
                    className="w-full h-[450px] rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2 bg-white rounded-lg p-12 font-secondary"
                >
                  <h2 className="text-3xl font-semibold text-primary mb-4">
                    Parenting Skill
                  </h2>
                  <p className="mb-8">
                    Our parenting skills section offers practical advice,
                    evidence-based strategies, and expert insights to help you
                    navigate the complexities of parenthood.
                  </p>
                  <h4 className="font-medium text-xl text-black mb-4 ">
                    Benifites
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                 className="md:w-1/2">
                  <img
                    src={serviceImg2}
                    alt="service img"
                    className="w-full h-[450px] rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                
                className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h2 className="text-3xl font-semibold text-primary mb-4">
                    Feeling Stuck
                  </h2>
                  <p className="mb-8">
                    Life can sometimes feel like it’s at a standstill, leaving
                    you feeling stuck, lost, or unsure of your next steps. If
                    you're struggling with these feelings, know that you're not
                    alone. Our resources on overcoming stagnation are here to
                    help you break free from the rut and regain momentum in your
                    life.
                  </p>
                  <h4 className="font-medium text-xl text-black mb-4 ">
                    Benifites
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                
                className="md:w-1/2">
                  <img
                    src={serviceImg3}
                    alt="service img"
                    className="w-full h-[450px] rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                 className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h2 className="text-3xl font-semibold text-primary mb-4">
                    Self Confidence
                  </h2>
                  <p className="mb-8">
                    Self-confidence is the foundation of a fulfilling and
                    successful life. At [Your Website Name], we’re dedicated to
                    helping you build and strengthen your self-belief. Whether
                    you’re dealing with self-doubt, social anxiety, or a lack of
                    assertiveness, our resources are designed to empower you.
                  </p>
                  <h4 className="font-medium text-xl text-black mb-4 ">
                    Benifites
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                    <li>Understanding RelationShip Dynamics</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                className="md:w-1/2">
                  <img
                    src={serviceImg4}
                    alt="service img"
                    className="w-full h-[450px] rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
