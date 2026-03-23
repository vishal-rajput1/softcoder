import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaChartLine, FaLaptopCode, FaUsers, FaMoneyBillWave } from "react-icons/fa";

import Hero from "../pages/Hero";
import heroimg from "../assets/images/herobg.jpg";

const Career = () => {
  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: ""
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Web Developer",
      location: "Noida, India",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Looking for an experienced web developer proficient in React, Node.js, and modern web technologies."
    },
    {
      id: 2,
      title: "Mobile App Developer",
      location: "Noida, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Seeking a talented mobile app developer with expertise in React Native or Flutter."
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Noida, India",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "Creative designer needed with strong portfolio in web and mobile app design."
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      location: "Noida, India",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Digital marketing expert to manage SEO, social media, and online advertising campaigns."
    }
  ];

  return (
    <div className="career-page">

<style>{`

/* HERO */

.hero{
min-height:65vh;
padding-top:150px;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
background:linear-gradient(#0f172a);
color:white;
}

.hero h1{
font-size:3rem;
font-weight:700;
margin-bottom:10px;
}

.hero p{
font-size:1.1rem;
opacity:0.9;
}


/* SECTION */

.section{
padding:80px 0;
}

.section-title{
text-align:center;
margin-bottom:60px;
}

.subtitle{
color:#6366f1;
font-weight:600;
letter-spacing:1px;
}

.section-title h2{
font-size:2.2rem;
margin-top:10px;
}


/* GRID */

.services-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}


/* SERVICE CARD */

.service-card{
background:white;
padding:35px;
border-radius:16px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
transition:0.35s;
position:relative;
overflow:hidden;
}

.service-card::before{
content:"";
position:absolute;
width:120%;
height:120%;
background:linear-gradient(120deg,transparent,rgba(79,70,229,0.08),transparent);
top:-50%;
left:-50%;
transform:rotate(25deg);
}

.service-card:hover{
transform:translateY(-8px);
box-shadow:0 18px 40px rgba(0,0,0,0.15);
}

.service-card h3{
margin-bottom:10px;
font-size:1.3rem;
}


/* JOB INFO */

.job-info{
display:flex;
gap:20px;
flex-wrap:wrap;
font-size:0.9rem;
color:#6b7280;
margin-bottom:15px;
}

.job-info span{
display:flex;
align-items:center;
gap:6px;
background:#f3f4f6;
padding:6px 12px;
border-radius:20px;
font-size:13px;
}


/* BUTTON */

.btn-primary{
margin-top:15px;
display:inline-block;
padding:10px 20px;
border-radius:30px;
background:#4f46e5;
color:white;
font-weight:600;
transition:0.3s;
}

.btn-primary:hover{
background:#4338ca;
transform:translateY(-2px);
box-shadow:0 10px 20px rgba(0,0,0,0.15);
}


/* RESPONSIVE */

@media(max-width:768px){

.hero h1{
font-size:2.2rem;
}

.section{
padding:60px 0;
}

}

.icon-box{
width:55px;
height:55px;
display:flex;
align-items:center;
justify-content:center;
border-radius:12px;
background:linear-gradient(135deg,#6366f1,#4f46e5);
color:white;
font-size:22px;
margin-bottom:15px;
transition:0.3s;
}

.service-card:hover .icon-box{
transform:scale(1.1);
box-shadow:0 10px 20px rgba(0,0,0,0.2);
}

`}</style>


{/* HERO */}

{/* <section className="hero">
<div className="container">

<h1>Career Opportunities</h1>

<p style={{maxWidth:"700px",margin:"auto"}}>
Join our growing team and work on exciting technologies, innovative projects,
and meaningful digital solutions.
</p>

</div>
</section> */}

<Hero
  title="Career Opportunities"
  subtitle="Join our growing team and work on exciting technologies, innovative projects,
and meaningful digital solutions."
  image={heroimg}
  initial={{ scale: 1.1 }}
animate={{ scale: 1 }}
/>

{/* WHY JOIN */}

<section className="section">
<div className="container">

<div className="section-title">
<p className="subtitle">Why Join Us</p>
<h2>Build Your Career With Soft Coders</h2>
</div>

<div className="services-grid">

<div className="service-card">
<div className="icon-box">
<FaChartLine />
</div>
<h3>Career Growth</h3>
<p>Work on real-world projects and continuously upgrade your skills.</p>
</div>

<div className="service-card">
<div className="icon-box">
<FaLaptopCode />
</div>
<h3>Modern Technologies</h3>
<p>Exposure to the latest frameworks and development practices.</p>
</div>

<div className="service-card">
<div className="icon-box">
<FaUsers />
</div>
<h3>Team Culture</h3>
<p>Collaborative work environment with experienced professionals.</p>
</div>

<div className="service-card">
<div className="icon-box">
<FaMoneyBillWave />
</div>
<h3>Competitive Salary</h3>
<p>Attractive compensation and performance-based growth.</p>
</div>

</div>
</div>
</section>



{/* OPEN POSITIONS */}

<section className="section" style={{background:"#f9fafb"}}>
<div className="container">

<div className="section-title">
<p className="subtitle">Current Openings</p>
<h2>Available Positions</h2>
</div>

<div style={{display:"grid",gap:"30px"}}>

{jobOpenings.map((job,index)=>(
<div
key={job.id}
className="service-card"
data-aos="fade-up"
data-aos-delay={index*100}
style={{textAlign:"left"}}
>

<h3>{job.title}</h3>

<div className="job-info">

<span><FaMapMarkerAlt/> {job.location}</span>
<span><FaClock/> {job.type}</span>
<span><FaBriefcase/> {job.experience}</span>

</div>

<p>{job.description}</p>

<a href="#apply" className="btn-primary">
Apply Now
</a>

</div>
))}

</div>

</div>
</section>

</div>
  );
};

export default Career;