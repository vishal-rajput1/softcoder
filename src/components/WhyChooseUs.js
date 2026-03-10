
import whychooseus from "../assets/images/whychooseus.png";

import { Link } from "react-router-dom";
import { COLORS, BUTTON } from "../theme/theme";
const WhyChooseUs = () => {
return(
<section style={{padding:"80px 0",background:COLORS.light}}>

<div className="container">

<div className="grid lg:grid-cols-2 gap-12 items-center">

<img src={whychooseus} alt="why"/>

<div>

<h6 style={{color:COLORS.primary}}>Why Choose Us</h6>

<h2 style={{color:COLORS.dark}}>
Experience in IT Industry
</h2>

<p style={{color:COLORS.secondary}}>
Experienced team delivering scalable digital products.
</p>

<Link to="/about" style={BUTTON.primary}>
Learn More
</Link>

</div>

</div>

</div>

</section>

);
}
export default WhyChooseUs;