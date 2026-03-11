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
import ServiceHome from "../components/ServiceHome";
import HomeProducts from "../components/HomeProducts";
import Industries from "../components/Industries";
import Aboutus from "../components/Aboutus";

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
<HomeProducts/>

<Reviews/>
<AIFeatures/>

<WhyChooseUs/>
<Info/>
</div>
);
};

export default Home;