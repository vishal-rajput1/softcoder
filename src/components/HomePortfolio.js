import { COLORS } from "../theme/theme";
import kingsprinter from "../assets/images/kingsprinter.png";
import budTulips from "../assets/images/budtulips.png";
import hsfFoods from "../assets/images/hsffoods.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomePortfolio = () => {

const portfolio = [
{
id:1,
title:"Kings Printer",
image:kingsprinter
},
{
id:2,
title:"Bud & Tulips",
image:budTulips
},
{
id:3,
title:"HSF Foods",
image:hsfFoods
},
{
id:4,
title:"E-Commerce Website",
image:kingsprinter
},
{
id:5,
title:"Restaurant Management System",
image:hsfFoods
},
{
id:6,
title:"School ERP System",
image:budTulips
}
];

return (
<section style={{padding:"80px 0"}}>
<div className="container">

<h2 style={{textAlign:"center",marginBottom:"40px",color:COLORS.dark}}>
Our Projects
</h2>

<Swiper
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
boxShadow:"0 10px 25px rgba(0,0,0,0.08)",
borderRadius:"10px",
overflow:"hidden"
}}
>

<img
src={item.image}
alt={item.title}
style={{width:"100%"}}
/>

<div style={{padding:"20px"}}>
<h4>{item.title}</h4>
</div>

</div>

</SwiperSlide>

))}

</Swiper>

</div>
</section>
)}

export default HomePortfolio;