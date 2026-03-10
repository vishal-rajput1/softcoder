import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaLaptopCode,
  FaProjectDiagram,
  FaUsers,
  FaBullhorn,
  FaTimes,
  FaBars,
  FaChevronDown
} from "react-icons/fa";

import softcoders from "../assets/images/mercedes-benz.jpg";
import { COLORS } from "../theme/theme";

const Header = () => {

  const [isScrolled,setIsScrolled] = useState(false);
  const [mobileOpen,setMobileOpen] = useState(false);
  const [servicesOpen,setServicesOpen] = useState(false);

  const location = useLocation();

  useEffect(()=>{
    const handleScroll = ()=> setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);

  useEffect(()=>{
    setMobileOpen(false);
  },[location]);

  const isActive = (path)=>
    location.pathname === path
      ? {color:COLORS.dark}
      : {color:COLORS.primary};

  return (

<header className="fixed top-0 w-full z-50">

{/* TOP MARQUEE */}

<div
className="overflow-hidden text-sm py-2"
style={{background:COLORS.dark}}
>

<motion.div
className="flex gap-12 whitespace-nowrap items-center"
style={{color:COLORS.white}}
animate={{x:["0%","-50%"]}}
transition={{repeat:Infinity,duration:25,ease:"linear"}}
>

<Link to="/career" className="flex items-center gap-2">
<FaBriefcase style={{color:COLORS.primary}}/>
We Are Hiring Developers
</Link>

<Link to="/services" className="flex items-center gap-2">
<FaLaptopCode style={{color:COLORS.primary}}/>
Web Development • Mobile Apps • UI/UX
</Link>

<Link to="/portfolio" className="flex items-center gap-2">
<FaProjectDiagram style={{color:COLORS.primary}}/>
100+ Successful Projects Delivered
</Link>

<a href="mailto:Info@softcoders.in" className="flex items-center gap-2">
<FaEnvelope style={{color:COLORS.primary}}/>
Info@softcoders.in
</a>

<a href="tel:+918295000455" className="flex items-center gap-2">
<FaPhone style={{color:COLORS.primary}}/>
+91-8295000455
</a>

<Link to="/about" className="flex items-center gap-2">
<FaUsers style={{color:COLORS.primary}}/>
Trusted by Businesses Worldwide
</Link>

<Link to="/contact" className="flex items-center gap-2">
<FaBullhorn style={{color:COLORS.primary}}/>
Get Your Website Built Today
</Link>

</motion.div>

</div>

{/* NAVBAR */}

<nav
className="transition-all duration-300"
style={{
background:COLORS.light,
backdropFilter:isScrolled ? "blur(10px)" : "none"
}}
>

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

{/* LOGO */}

<Link to="/">
<img src={softcoders} alt="logo" className="h-10"/>
</Link>

{/* DESKTOP MENU */}

<ul className="hidden md:flex items-center gap-8 font-medium">

<li><Link to="/" style={isActive("/")}>Home</Link></li>
<li><Link to="/about" style={isActive("/about")}>About</Link></li>
<li><Link to="/services" style={isActive("/services")}>Services</Link></li>
<li><Link to="/portfolio" style={isActive("/portfolio")}>Portfolio</Link></li>
<li><Link to="/products" style={isActive("/products")}>Products</Link></li>
<li><Link to="/career" style={isActive("/career")}>Career</Link></li>

<li>
<Link
to="/contact"
className="px-5 py-2 rounded-full"
style={{background:COLORS.primary,color:COLORS.white}}
>
Contact
</Link>
</li>

</ul>

{/* MOBILE TOGGLE */}

<button
className="md:hidden text-xl"
style={{color:COLORS.dark}}
onClick={()=>setMobileOpen(!mobileOpen)}
>
{mobileOpen ? <FaTimes/> : <FaBars/>}
</button>

</div>


{/* MOBILE DROPDOWN */}

<AnimatePresence>

{mobileOpen && (

<motion.div
initial={{opacity:0,height:0}}
animate={{opacity:1,height:"auto"}}
exit={{opacity:0,height:0}}
className="md:hidden px-6 pb-6"
style={{background:COLORS.light}}
>

<ul className="flex flex-col gap-4 font-medium">

<li><Link to="/">Home</Link></li>

<li><Link to="/about">About</Link></li>

{/* SERVICES DROPDOWN */}

<li>

<button
className="flex justify-between items-center w-full"
onClick={()=>setServicesOpen(!servicesOpen)}
>
Services
<FaChevronDown/>
</button>

<AnimatePresence>

{servicesOpen && (

<motion.ul
initial={{height:0}}
animate={{height:"auto"}}
exit={{height:0}}
className="ml-4 mt-2 flex flex-col gap-2 text-sm"
>

<li><Link to="/services/web-development">Web Development</Link></li>
<li><Link to="/services/mobile-apps">Mobile Apps</Link></li>
<li><Link to="/services/uiux">UI / UX</Link></li>
<li><Link to="/services/digital-marketing">Digital Marketing</Link></li>

</motion.ul>

)}

</AnimatePresence>

</li>

<li><Link to="/portfolio">Portfolio</Link></li>

<li><Link to="/products">Products</Link></li>

<li><Link to="/career">Career</Link></li>

<li>

<Link
to="/contact"
className="px-4 py-2 rounded-lg inline-block"
style={{background:COLORS.primary,color:COLORS.white}}
>
Contact
</Link>

</li>

</ul>

</motion.div>

)}

</AnimatePresence>

</nav>

</header>

  );
};

export default Header;