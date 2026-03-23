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
import { useInView } from "react-intersection-observer";

import { COLORS } from "../theme/theme";

const AIFeatures = () => {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

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
            ref={ref}
            className="p-5 md:p-6 rounded-lg font-mono text-xs md:text-sm overflow-auto"
            style={{
              background: COLORS.dark,
              color: "#00ff9c"
            }}
          >
            <pre>
              {inView && (
                <TypeAnimation
  key={inView}
  sequence={[
`// AI Platform Core Service

import axios from "axios";

class AIPlatform {
  constructor() {
    this.client = axios.create({
      baseURL: "https://api.yourai.com",
      timeout: 5000
    });
  }
}

`,
3000,

`// AI Talent Deployment Engine

async deployTalent(role, requirements) {
  const response = await this.client.post("/talent/deploy", {
    role,
    requirements,
    aiOptimized: true
  });

  return response.data;
}

`,
4000,

`// Smart Workflow Automation

async runWorkflow(workflowId, payload) {
  const response = await this.client.post("/workflow/run", {
    workflowId,
    payload,
    realtime: true
  });

  return response.data;
}

`,
4000,

`// AI Product Prototyping Engine

async generatePrototype(idea) {
  const response = await this.client.post("/prototype/generate", {
    idea,
    mode: "rapid-ai"
  });

  return response.data;
}

`,
4000,

`// Real-time Analytics Dashboard

async getInsights(projectId) {
  const response = await this.client.get(\`/analytics/\${projectId}\`);

  return {
    performance: response.data.performance,
    engagement: response.data.engagement,
    aiScore: response.data.aiScore
  };
}

`,
4000,

`// Initialize AI Platform

const ai = new AIPlatform();

(async () => {
  const prototype = await ai.generatePrototype("AI SaaS platform");
  const talent = await ai.deployTalent("Full Stack AI Engineer", {
    experience: "5+ years",
    stack: ["React", "Node", "AI"]
  });

  const workflow = await ai.runWorkflow("auto-deploy", {
    projectId: prototype.id
  });

  console.log("🚀 AI System Ready", {
    prototype,
    talent,
    workflow
  });
})();
`,
8000
  ]}
  speed={60}
  cursor={true}
  repeat={Infinity} // loops after full sequence (~35 sec)
  style={{ whiteSpace: "pre-line", display: "block" }}
/>
              )}
            </pre>
          </div>

        </div>

       

      </div>
    </section>
  );
};

export default AIFeatures;