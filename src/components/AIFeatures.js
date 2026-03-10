import React from "react";
import {
  FaBrain,
  FaUserTie,
  FaRocket,
  FaRobot,
  FaUsers,
  FaProjectDiagram,
  FaUserCog,
  FaLaptopCode
} from "react-icons/fa";

import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import {COLORS} from "../theme/theme"

const AIFeatures = () => {

  const features = [
    { icon: <FaBrain />, title: "Seamless AI & Human Collaboration" },
    { icon: <FaUserTie />, title: "Instant Talent Deployment at Scale" },
    { icon: <FaRocket />, title: "Hyper-Accelerated Prototyping" },
    { icon: <FaRobot />, title: "Native AI-First Product Design" },
    { icon: <FaUsers />, title: "Real-Time Iteration & Deployment" },
    { icon: <FaProjectDiagram />, title: "Embedded Agentic AI Workflows" },
    { icon: <FaUserCog />, title: "Intelligence-Infused Engineering" },
    { icon: <FaLaptopCode />, title: "Human-Centric AI Product Design" }
  ];

  return (
    <section className="py-20" style={{ background: COLORS.white }}>

      <div className="max-w-6xl mx-auto px-5">

        {/* TITLE */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">
          Tomorrow’s AI, Engineered Today
        </h2>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-4">

                <div
                  className="text-2xl md:text-3xl"
                  style={{ color: COLORS.primary }}
                >
                  {item.icon}
                </div>

                <p className="text-gray-700 text-sm md:text-base">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

          {/* CODE BOX */}
          <div
            className="p-5 md:p-6 rounded-lg font-mono text-xs md:text-sm overflow-auto"
            style={{
              background: COLORS.dark,
              color: "#00ff9c"
            }}
          >

            <pre>

<TypeAnimation
sequence={[
`const axios = require('axios');

class AIService {
  constructor(baseURL) {
    this.client = axios.create({ baseURL });
  }
}

async fetchData(endpoint){
  const response = await this.client.get(endpoint);
  return response.data;
}
`,
2000
]}
speed={60}
cursor={true}
repeat={Infinity}
style={{ whiteSpace: "pre-line", display: "block" }}
/>

            </pre>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-16">

          <div>
            <h3
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: COLORS.dark }}
            >
              <CountUp end={350} duration={5} />+
            </h3>
            <p className="text-gray-500">Clients</p>
          </div>

          <div>
            <h3
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: COLORS.dark }}
            >
              <CountUp end={15} duration={5} />+
            </h3>
            <p className="text-gray-500">Countries</p>
          </div>

          <div>
            <h3
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: COLORS.dark }}
            >
              <CountUp end={95} duration={5} />%
            </h3>
            <p className="text-gray-500">Repeat Business</p>
          </div>
          <div>
            <h3
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: COLORS.dark }}
            >
              <CountUp end={20000} duration={5} separator="," />+
            </h3>
            <p className="text-gray-500">Hours of Code</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AIFeatures;