import React from "react";

const StudentTestimonials = () => {

const students = [
{
img:"https://randomuser.me/api/portraits/men/32.jpg",
company:"Microsoft"
},
{
img:"https://randomuser.me/api/portraits/women/44.jpg",
company:"Google"
},
{
img:"https://randomuser.me/api/portraits/men/55.jpg",
company:"Amazon"
},
{
img:"https://randomuser.me/api/portraits/women/68.jpg",
company:"Goldman Sachs"
},
{
img:"https://randomuser.me/api/portraits/men/41.jpg",
company:"PayPal"
},
{
img:"https://randomuser.me/api/portraits/women/22.jpg",
company:"Samsung"
},
{
img:"https://randomuser.me/api/portraits/men/76.jpg",
company:"JPMorgan"
},
{
img:"https://randomuser.me/api/portraits/women/15.jpg",
company:"Meta"
},
{
img:"https://randomuser.me/api/portraits/men/83.jpg",
company:"Netflix"
}
];

return (

<section
style={{
padding:"100px 0",
background:"#f8fafc"
}}
>

<div className="container">

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"60px",
alignItems:"center"
}}
>

{/* LEFT TEXT */}

<div>

<h2
style={{
fontSize:"36px",
marginBottom:"15px"
}}
>

Hear from our <span style={{color:"#4f46e5"}}>students</span>

</h2>

<p
style={{
color:"#555",
marginBottom:"25px",
maxWidth:"420px"
}}
>

From product based companies, startups to fintech firms
and service organizations — our students are placed
across the tech industry.

</p>

<button
style={{
background:"#4f46e5",
color:"#fff",
border:"none",
padding:"12px 22px",
borderRadius:"6px",
cursor:"pointer",
fontWeight:"500"
}}
>

Read SWE Testimonials →

</button>

</div>


{/* RIGHT GRID */}

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px"
}}
>

{students.map((item,index)=>(

<div
key={index}
style={{
background:"#fff",
borderRadius:"12px",
padding:"15px",
textAlign:"center",
boxShadow:"0 10px 25px rgba(0,0,0,0.08)",
transition:"0.3s"
}}
>

<img
src={item.img}
alt="student"
style={{
width:"70px",
height:"70px",
borderRadius:"50%",
objectFit:"cover",
marginBottom:"10px"
}}
/>

<span
style={{
fontSize:"13px",
background:"#f1f5f9",
padding:"4px 10px",
borderRadius:"20px"
}}
>

{item.company}

</span>

</div>

))}

</div>

</div>

</div>

</section>

);
};

export default StudentTestimonials;