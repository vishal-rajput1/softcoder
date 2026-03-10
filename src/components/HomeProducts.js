
import { COLORS } from "../theme/theme";

import gurukulERPImg from "../assets/images/gurukulerp.png";
import billingSoftImg from "../assets/images/billingsoftware1.jpeg";
const HomeProducts=()=>{
    
const products = [
{
id:1,
title:"Gurukul ERP",
image:gurukulERPImg,
desc:"Complete School Management ERP System"
},
{
id:2,
title:"Billing Software",
image:billingSoftImg,
desc:"Retail billing & inventory software"
}
];
return(
    
<section style={{padding:"80px 0",background:COLORS.light}}>
<div className="container">

<h2 style={{textAlign:"center",marginBottom:"40px",color:COLORS.dark}}>
Our Products
</h2>

<div className="grid md:grid-cols-2 gap-10">

{products.map(product => (

<div key={product.id} style={{background:"#fff",padding:"30px",borderRadius:"10px"}}>

<img src={product.image} alt="" style={{marginBottom:"15px"}}/>

<h3>{product.title}</h3>

<p style={{color:COLORS.secondary}}>
{product.desc}
</p>

</div>

))}

</div>

</div>
</section>
)};

export default HomeProducts;