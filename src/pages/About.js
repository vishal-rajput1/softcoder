
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaHeadset,
  FaPalette,
  FaDollarSign,
  FaUsers,
  FaAward,
  FaLightbulb,
  FaProjectDiagram, FaClock 
} from "react-icons/fa";

/* import aboutus from "../assets/images/aboutus.png"; */
import StudentTestimonials from "../components/StudentTestimonials";
import FAQ from "../components/FAQ";
import React, { useEffect } from "react";
import about from "../assets/images/aboutpage.jpg";

import Hero from "../pages/Hero";
import heroimg from "../assets/images/herobg.jpg";

import CountUp from "react-countup";



const About = () => {
useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>

      {/* HERO */}

<Hero
  title="About Soft Coders"
  subtitle="We build powerful digital solutions that help businesses grow, automate processes, and scale faster with modern technologies."
  image={heroimg}
  initial={{ scale: 1.1 }}
animate={{ scale: 1 }}

/>

{/*       <section
        style={{
          padding: "140px 0 100px",
          background:
            "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "#fff",
          textAlign: "center"
        }}
      >
        <div className="container">

          <h1 style={{fontSize:"42px",fontWeight:"700",marginBottom:"20px"}}>
            About Soft Coders
          </h1>

          <p style={{maxWidth:"700px",margin:"0 auto",opacity:"0.9"}}>
            We build powerful digital solutions that help businesses grow,
            automate processes, and scale faster with modern technologies.
          </p>

        </div>
      </section> */}


      {/* ABOUT SECTION */}

      <section style={{padding:"90px 0"}}>
        <div className="container">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <h6 style={{color:"#4f46e5",fontWeight:"600"}}>
                WHO WE ARE
              </h6>

              <h2 style={{fontSize:"34px",margin:"10px 0 20px"}}>
                Building Modern Software Solutions
              </h2>

              <p style={{marginBottom:"15px",color:"#555"}}>
                Soft Coders is a technology company focused on delivering
                modern web applications, scalable software systems,
                and digital transformation solutions.
              </p>

              <p style={{color:"#555"}}>
                Our team of skilled developers and designers work closely
                with businesses to build reliable, high-performance
                digital products.
              </p>

              {/* FEATURES */}

              <div
                style={{
                  marginTop:"30px",
                  display:"grid",
                  gridTemplateColumns:"repeat(2,1fr)",
                  gap:"15px"
                }}
              >

                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                  <FaDollarSign color="#f97316"/>
                  Affordable Pricing
                </div>

                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                  <FaCheckCircle color="#22c55e"/>
                  Quality Assurance
                </div>

                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                  <FaPalette color="#8b5cf6"/>
                  Modern UI/UX
                </div>

                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                  <FaHeadset color="#3b82f6"/>
                  24×7 Support
                </div>

              </div>

            </div>


            {/* IMAGE */}

            <div>

      <img
  src = {about}
  alt="coding workspace"
  style={{
    width: "100%",
    height: "420px",
    objectFit: "cover",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
  }}
/>

            </div>

          </div>

        </div>
      </section>




{/*  STATS */} 

<section
  style={{
    padding: "80px 0",
    background: "#f8fafc"
  }}
>
  <div className="container flex justify-center">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">

        <FaProjectDiagram size={30} className="mx-auto mb-4 text-indigo-600" />

        <h2 className="text-3xl font-bold text-indigo-600">
          <CountUp end={200} duration={3} />+
        </h2>

        <p className="text-gray-500 mt-2">Projects Completed</p>

      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">

        <FaUsers size={30} className="mx-auto mb-4 text-indigo-600" />

        <h2 className="text-3xl font-bold text-indigo-600">
          <CountUp end={350} duration={3} />+
        </h2>

        <p className="text-gray-500 mt-2">Happy Clients</p>

      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">

        <FaClock size={30} className="mx-auto mb-4 text-indigo-600" />

        <h2 className="text-3xl font-bold text-indigo-600">
          <CountUp end={6} duration={3} />+
        </h2>

        <p className="text-gray-500 mt-2">Years Experience</p>

      </div>

    </div>

  </div>
</section>

      {/* VALUES */}

      <section style={{padding:"90px 0"}}>

        <div className="container">

          <div style={{textAlign:"center",marginBottom:"50px"}}>

            <h2>Our Core Values</h2>

            <p style={{maxWidth:"600px",margin:"auto",color:"#555"}}>
              Our work culture is driven by innovation, collaboration,
              and continuous improvement.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <div className="service-card">

              <FaUsers size={30} color="#4f46e5"/>

              <h4 style={{marginTop:"15px"}}>
                Client Focused
              </h4>

              <p>
                We understand business needs and deliver
                solutions that bring measurable results.
              </p>

            </div>


            <div className="service-card">

              <FaLightbulb size={30} color="#4f46e5"/>

              <h4 style={{marginTop:"15px"}}>
                Innovation
              </h4>

              <p>
                Our team explores new technologies to
                build smarter digital products.
              </p>

            </div>


            <div className="service-card">

              <FaAward size={30} color="#4f46e5"/>

              <h4 style={{marginTop:"15px"}}>
                Excellence
              </h4>

              <p>
                From planning to deployment we maintain
                the highest quality standards.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section
        style={{
          padding:"80px 0",
          background:"#0f172a",
          color:"#fff",
          textAlign:"center"
        }}
      >

        <div className="container">

          <h2>Have an Idea? Let's Build It Together</h2>

          <p style={{margin:"20px 0"}}>
            Share your project requirements and our experts
            will help you transform your idea into a
            powerful digital solution.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Start Your Project
          </Link>

        </div>

      </section>

      <FAQ />

    </div>
  );
};

export default About;