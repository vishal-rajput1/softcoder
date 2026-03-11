import { COLORS } from "../theme/theme";
import kingsprinter from "../assets/images/kingsprinter.png";
import budTulips from "../assets/images/budtulips.png";
import hsfFoods from "../assets/images/hsffoods.png";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const HomePortfolio = () => {

const portfolio = [
{
id:1,
title:"Kings Printer",
category:"Business Website",
image:kingsprinter
},
{
id:2,
title:"Bud & Tulips",
category:"E-commerce",
image:budTulips
},
{
id:3,
title:"HSF Foods",
category:"Food Industry",
image:hsfFoods
},
{
id:4,
title:"E-Commerce Website",
category:"Online Store",
image:kingsprinter
},
{
id:5,
title:"Restaurant Management System",
category:"Management System",
image:hsfFoods
},
{
id:6,
title:"School ERP System",
category:"Education Software",
image:budTulips
}
];

return (
<section style={{padding:"100px 0",background:"#f8fafc"}}>

<div className="container">

{/* SECTION HEADER */}
<div style={{textAlign:"center",marginBottom:"60px"}}>
<h6 style={{color:COLORS.primary,marginBottom:"10px"}}>
Our Portfolio
</h6>

<h2 style={{
fontSize:"36px",
fontWeight:"700",
color:COLORS.dark
}}>
Our Latest <span style={{color:COLORS.primary}}>Projects</span>
</h2>

<p style={{
maxWidth:"600px",
margin:"10px auto",
color:"#666"
}}>
Explore some of the real-world projects we have designed and developed
for businesses and organizations.
</p>
</div>

<Swiper
modules={[Autoplay, Navigation]}
navigation
autoplay={{delay:3000}}
spaceBetween={30}
slidesPerView={3}
loop={true}
breakpoints={{
0:{slidesPerView:1},
768:{slidesPerView:2},
1024:{slidesPerView:3}
}}
>

{portfolio.map(item => (

<SwiperSlide key={item.id}>

<div
style={{
position:"relative",
borderRadius:"14px",
overflow:"hidden",
boxShadow:"0 15px 35px rgba(0,0,0,0.08)",
cursor:"pointer"
}}
className="portfolio-card"
>

<img
src={item.image}
alt={item.title}
style={{
width:"100%",
height:"260px",
objectFit:"cover",
transition:"0.5s"
}}
className="portfolio-img"
/>

{/* Gradient Overlay */}
<div
style={{
position:"absolute",
bottom:"0",
left:"0",
width:"100%",
padding:"25px",
background:"linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent)",
color:"#fff"
}}
>

<span
style={{
fontSize:"12px",
background:COLORS.primary,
padding:"4px 10px",
borderRadius:"20px"
}}
>
{item.category}
</span>

<h4 style={{margin:"10px 0 8px"}}>{item.title}</h4>

<button
style={{
background:"#000000",
border:"none",
padding:"6px 14px",
borderRadius:"20px",
fontSize:"13px",
cursor:"pointer"
}}
>
View Project
</button>

</div>

</div>

</SwiperSlide>

))}

</Swiper>

</div>

{/* HOVER STYLE */}
<style>
{`
.portfolio-card:hover .portfolio-img{
transform:scale(1.1);
}
`}
</style>

</section>
)}

export default HomePortfolio;