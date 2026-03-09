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
    <section className="ai-section">
      <div className="container">

        <h2 className="ai-title">
          Tomorrow’s AI, Engineered Today
        </h2>

        <div className="ai-content">

          {/* LEFT FEATURES */}
          <div className="ai-features">
            {features.map((item, index) => (
              <div className="ai-feature" key={index}>
                <div className="ai-icon">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>

          {/* RIGHT CODE BOX */}
          <div className="ai-code-box">
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
        <div className="ai-stats">

          <div>
            <h3><CountUp end={350} duration={5} />+</h3>
            <p>Clients</p>
          </div>

          <div>
            <h3><CountUp end={15} duration={5} />+</h3>
            <p>Countries</p>
          </div>

          <div>
            <h3><CountUp end={95} duration={5} />%</h3>
            <p>Repeat Business</p>
          </div>

          <div>
            <h3>
              <CountUp end={20000} duration={5} separator="," />+
            </h3>
            <p>Hours of Code</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AIFeatures;