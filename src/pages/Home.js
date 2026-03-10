import React from "react";
import { COLORS } from "../theme/theme";

import HeroCarousel from "../components/HeroCarousel";
import CompanySection from "../components/CompanySection";
import AIFeatures from "../components/AIFeatures";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";
import Info from "../components/Info";
import HomePortfolio from "../components/HomePortfolio";
import ServiceHome from "../components/ServiceHome";

const Home = () => {

return (

<div style={{background:COLORS.white}}>

{/* HERO */}
<section style={{paddingTop:"80px"}}>
<HeroCarousel/>
<CompanySection/>
</section>
<ServiceHome/>

<HomePortfolio/>
<Reviews/>
<AIFeatures/>

<WhyChooseUs/>
<Info/>
</div>
);
};

export default Home;