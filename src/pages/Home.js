import React from "react";
import { COLORS } from "../theme/theme";
import { 
  FaCode, 
  FaMobile, 
  FaLaptopCode, 
  FaBullhorn, 
  FaShoppingCart,
  FaCheckCircle,
  FaHeadset,
  FaPalette,
  FaDollarSign,
  FaFilter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp
} from 'react-icons/fa';

import HeroCarousel from "../components/HeroCarousel";
import CompanySection from "../components/CompanySection";
import AIFeatures from "../components/AIFeatures";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";
import Info from "../components/Info";
import HomePortfolio from "../components/HomePortfolio";
// import ServiceHome from "../components/ServiceHome";
// import HomeProducts from "../components/HomeProducts";
import Aboutus from "../components/Aboutus"
import Industries from "../components/Industries"

const Home = () => {

return (

<div style={{background:COLORS.white}}>

{/* HERO */}
<section style={{paddingTop:"80px"}}>
<HeroCarousel/>
<CompanySection/>
</section>
{/* <ServiceHome/> */}
<Aboutus/>
<Industries/>

<HomePortfolio/>
{/* <HomeProducts/> */}

<Reviews/>
<AIFeatures/>

<WhyChooseUs/>
<a
  href="https://wa.me/9254147455" // 👈 replace with your number (with country code)
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: 1000,
    cursor: "pointer",
    transition: "transform 0.3s ease"
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  <FaWhatsapp />
</a>
</div>
);
};

export default Home;
