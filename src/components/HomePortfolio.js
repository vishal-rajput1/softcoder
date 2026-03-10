import { COLORS } from "../theme/theme";
import kingsprinter from "../assets/images/kingsprinter.png";
import budTulips from "../assets/images/budtulips.png";
import hsfFoods from "../assets/images/hsffoods.png";


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

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{portfolio.map(item => (

<div key={item.id} style={{boxShadow:"0 10px 25px rgba(0,0,0,0.08)",borderRadius:"10px"}}>

<img src={item.image} alt="" style={{borderRadius:"10px 10px 0 0"}}/>

<div style={{padding:"20px"}}>
<h4>{item.title}</h4>
</div>

</div>

))}

</div>

</div>
</section>
)}

export default HomePortfolio;