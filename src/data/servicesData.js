import webImg from "../assets/images/webdev.jpg";
//import mobileImg from "../assets/images/OIP.webp";
import reactimg from "../assets/images/reactimg.webp";
import nodeimg from "../assets/images/node.webp";
import mongodb from "../assets/images/mongodb.webp";
import express from "../assets/images/expressjs.webp";

import mobile from "../assets/images/mob.webp";
import flutterimg from "../assets/images/flutter.webp";
import firebaseimg from "../assets/images/firebase.webp";
import kotlinimg from "../assets/images/kotlin.png";
import swiftimg from "../assets/images/swift.webp";

import ecommerce from "../assets/images/ecommerce.jpg";
import stripeimg from "../assets/images/stripe.jpg";
import shopify from "../assets/images/shopify.jpg";
import paypallogo from "../assets/images/PayPal-Logo.png";
import woocommerce from "../assets/images/woocommerce.jpg";

import digitalimg from "../assets/images/digimarketing.jpg"
import seoimg from "../assets/images/seo.jpg";
import analyticsimg from "../assets/images/analytics.jpg";
import socialimg from "../assets/images/social.jpg";
import adsimg from "../assets/images/ads.jpg";
 
import brandingimg from "../assets/images/branding.jpg"
import illustratorimg from "../assets/images/adobeillustrator.webp";
import photoshopimg from "../assets/images/photoshop.webp";
import figmaimg from "../assets/images/figma.webp";
import canvaimg from "../assets/images/canva-icon.webp";

import softwareimg from "../assets/images/softwaredev.avif";
import javaimg from "../assets/images/java.webp";
import dotnetimg from "../assets/images/dotnet.png";
import mysqlimg from "../assets/images/mysql.png";
import electronimg from "../assets/images/electron.png";

import maintenanceimg from "../assets/images/mantainanceandsupport.avif";
import securityimg from "../assets/images/securitytools.avif";
import monitorimg from "../assets/images/monitoringtools.avif";
import performanceimg from "../assets/images/performanacetools.avif";
import backupimg from "../assets/images/backupsystem.avif";

import googleadsimg from "../assets/images/googleads.webp"
import facebookadsimg from "../assets/images/facebook.png"
import conversionimg from "../assets/images/conversiontracking.webp"



const servicesData = [

  //WEB DEVELOPMENT
{
slug: "web-development",
title: "Web Development",
image: webImg,
heroText: "Web development refers to building, creating, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet, i.e., websites.",
description: "Web development is the back-end of the website, the programming and interactions on the pages. A web developer focuses on how a site works and how the customers get things done on it. Good web developers know how to program CGI and scripts like PHP. They understand about how web forms work and can keep a site running effectively. At Softcoders, we provide back-end of the website, the programming and interactions on the pages. Our web developer focuses on how a site works and how easily the customers get things done on it..",

technologies: [
{
name: "React",
logo: reactimg,
description:
"React is a powerful JavaScript library used for building fast, scalable and interactive user interfaces."
},

{
name: "Node.js",
logo: nodeimg,
description:
"Node.js allows developers to build high-performance backend services using JavaScript on the server."
},

{
name: "MongoDb" ,
logo: mongodb,
description:
"MongoDB is a flexible NoSQL database used to store scalable and high-performance application data."
},

{
name: "Express.js" ,
logo: express,
description:
"Express.js is a lightweight Node.js framework used to build powerful APIs and backend systems."
}
]
,

features: [
"Custom Web Applications",
"Enterprise Solutions",
"API Development",
"Cloud Integration"
],
benefits: [
"High performance",
"Secure architecture",
"SEO friendly"
]
},

//MOBILE APP DEVELOPMENT
{
slug: "mobile-app-development",
title: "Mobile App Development",
image: mobile,
heroText: "Mobile app development offers numerous advantages, including enhanced customer engagement, improved brand visibility, and operational efficiencies that can transform business strategies.",
description: "App development is the process of designing, building, testing, and maintaining software applications for devices like smartphones, tablets, and wearables. Unlike desktop software, apps are optimized for smaller screens, touch interfaces, and mobile hardware constraints. Developers use languages like Swift for iOS and Kotlin/Java for Android, or cross-platform tools like Flutter and React Native.",

technologies: [
{
name: "React Native",
logo: reactimg,
description:
"React Native allows developers to build cross-platform mobile apps using a single JavaScript codebase."
},

{
name: "Flutter",
logo: flutterimg,
description:
"Flutter enables fast development of beautiful and highly responsive mobile apps for Android and iOS."
},

{
name: "Firebase",
logo: firebaseimg,
description:
"Firebase provides authentication, real-time database, cloud storage and push notification services."
},

{
name: "Kotlin",
logo: kotlinimg,
description:
"Kotlin is a modern programming language used for building powerful Android applications."
},

{
name: "Swift",
logo: swiftimg,
description:
"Swift is Apple's programming language used to create fast and secure iOS applications."
}
]

,
features: [
"Android Apps",
"iOS Apps",
"Cross Platform Apps"
],
benefits: [
"Fast performance",
"User friendly UI",
"Secure data"
]
}
,
//E-COMMERCE
{
slug: "e-commerce-solutions",
title: "E-commerce Solutions",
image: ecommerce,
heroText: "E-commerce development helps businesses sell products online through scalable and secure platforms.",
description:
"New IT technologies have completely changed the way people shop in the 21st century. Internet and mobile devices have made it possible to purchase products or services at any time and in any location As a result, a tremendous number of e-commerce websites appeared on the world wide web and continue to compete with each other. In order to win that competition, make sure that your e-commerce website is able to provide excellent customer experience. There is no magic formula for a successful e-commerce business. However, there are some major elements of an eCommerce website that you must pay attention to.",

technologies: [
{
name: "Shopify",
logo: shopify,
description: "Leading e-commerce platform for fast online store deployment."
},
{
name: "WooCommerce",
logo: woocommerce,
description: "Flexible WordPress-based e-commerce system."
},
{
name: "Stripe",
logo: stripeimg,
description: "Secure online payment gateway used worldwide."
},
{
name: "PayPal",
logo: paypallogo,
description: "Global payment platform trusted by millions of businesses."
}
],

features: [
"Custom Online Stores",
"Payment Gateway Integration",
"Inventory Management",
"Product Management"
],

benefits: [
"Higher online sales",
"Secure transactions",
"Better customer experience"
]
},

//DIGITAL MARKETING

{
slug: "digital-marketing",
title: "Digital Marketing",
image: digitalimg,
heroText: "Digital marketing helps businesses reach the right audience online using SEO, social media, content marketing and paid advertising strategies.",
description: "Digital marketing is the process of promoting products and services using online channels. At Softcoders, we help businesses grow their online presence using SEO, social media marketing, paid campaigns, and content marketing. Our strategies focus on generating quality leads, increasing brand visibility, and maximizing ROI.",

technologies: [
{
name: "SEO Tools",
logo: seoimg,
description: "Professional SEO tools used to analyze keywords, optimize content and improve search rankings."
},

{
name: "Google Analytics",
logo: analyticsimg,
description: "Powerful analytics platform used to track website performance and user behavior."
},

{
name: "Social Media",
logo: socialimg,
description: "Platforms like Facebook, Instagram and LinkedIn used to engage and grow your audience."
},

{
name: "Ad Platforms",
logo: adsimg,
description: "Google Ads and social advertising tools used to run high-performance campaigns."
}
],

features: [
"Search Engine Optimization",
"Social Media Marketing",
"Content Marketing",
"Paid Advertising Campaigns"
],

benefits: [
"Increased website traffic",
"Higher brand visibility",
"Better lead generation"
]
},

//BRAND AND LOGO DESIGN

{
slug: "brand-logo-design",
title: "Brand and Logo Design",
image: brandingimg,
heroText: "Branding and logo design create a strong visual identity that helps businesses stand out in the market.",
description: "Creating a strong brand starts with a professional, memorable logo that reflects your business identity.Understanding Brand and Logo Design, a brand represents the identity, values, and personality of your business, while a logo is the visual symbol that communicates this identity to your audience. A well-designed logo should be unique, versatile, and memorable, aligning with your brand’s colors, fonts, and overall style. It serves as the face of your business across websites, social media, packaging, and marketing materials.Logo design psychology is the study of how visual elements—specifically colour, typeface, and shape—influence human emotion, perception, and behaviour. It combines marketing strategy with behavioural science to create visual identities that align with specific business goals.",

technologies: [
{
name: "Adobe Illustrator",
logo: illustratorimg,
description: "Industry standard vector design tool used to create professional logos and graphics."
},

{
name: "Photoshop",
logo: photoshopimg,
description: "Advanced design software used for editing images and marketing visuals."
},

{
name: "Figma",
logo: figmaimg,
description: "Collaborative design tool used to create brand layouts and UI concepts."
},

{
name: "Canva",
logo: canvaimg,
description: "Design platform used for creating quick marketing assets and presentations."
}
],

features: [
"Logo Design",
"Brand Identity",
"Business Branding Kits",
"Brand Guidelines"
],

benefits: [
"Stronger brand recognition",
"Professional visual identity",
"Increased customer trust"
]
},

//SOFTWARE DEVELOPMENT 

{
slug: "software-development",
title: "Software Development",
image: softwareimg,
heroText: "Custom software development helps businesses automate processes and build scalable digital solutions.",
description: "We have demonstrated our abilities in delivering the customized applications using cutting edge technologies. Our Customer oriented approach enables us to deliver the optimum solutions for your requirements. At Softcoders, we strongly focused on creating customer oriented software applications. Our development team minutely examines and analyses the existing IT processes of the clients. It does the gap analysis to ensure complete compatibility between existing system and custom developed application. The supplications are designed, tested and deployed to complete satisfaction of the clients.",

technologies: [
{
name: "Java",
logo: javaimg,
description: "Enterprise-grade programming language used for building scalable applications."
},

{
name: ".NET",
logo: dotnetimg,
description: "Microsoft framework used to build secure and high-performance software systems."
},

{
name: "MySQL",
logo: mysqlimg,
description: "Reliable relational database used to store application data efficiently."
},

{
name: "Electron",
logo: electronimg,
description: "Framework used to build cross-platform desktop applications."
}
],

features: [
"Custom Software Development",
"Enterprise Systems",
"Automation Tools",
"System Integration"
],

benefits: [
"Improved business efficiency",
"Automation of repetitive tasks",
"Scalable business systems"
]
},

//MAINTAINANCE AND SUPPORT 

{
slug: "maintenance-support",
title: "Maintenance & Support",
image: maintenanceimg,
heroText: "Technical maintenance ensures your systems stay secure, optimized and always available for users.",
description: " 'It is better not to have a product if you do not have someone to keep it updated and well maintained.' We have just the right resources, skills and manpower needed to keep your product updated, keeping it operational and trouble free. A website maintenance services includes revising, editing, or otherwise changing in existing web pages to keep your website up to date and operational. Web site maintenance services basically refer to your web site up to date in means of company news, latest developments, and new project deals.",

technologies: [
{
name: "Monitoring Tools",
logo: monitorimg,
description: "Tools used to track system uptime and detect technical issues."
},

{
name: "Security Tools",
logo: securityimg,
description: "Advanced security systems used to protect applications from threats."
},

{
name: "Performance Tools",
logo: performanceimg,
description: "Optimization tools used to improve speed and application efficiency."
},

{
name: "Backup Systems",
logo: backupimg,
description: "Secure backup solutions used to prevent data loss."
}
],

features: [
"Bug Fixing",
"Security Updates",
"Performance Optimization",
"24/7 Monitoring"
],

benefits: [
"Reliable system performance",
"Improved security",
"Reduced downtime"
]
},

//ONLINE ADVERTISING
{
slug: "online-advertising",
title: "Online Advertising",
image: adsimg,
heroText: "Online advertising offers businesses cost-effective, highly targeted, and measurable ways to reach a global audience while optimizing marketing performance in real time.",
description: "Online advertising, also known as online marketing, Internet advertising, digital advertising or web advertising, is a form of marketing and advertising that uses the Internet to promote products and services to audiences and platform users.[1] Online advertising includes email marketing, search engine marketing (SEM), social media marketing, many types of display advertising (including web banner advertising), and mobile advertising. Advertisements are increasingly being delivered via automated software systems operating across multiple websites, media services and platforms, known as programmatic advertising.Like other advertising media, online advertising frequently involves a publisher, who integrates advertisements into its online content, and an advertiser, who provides the advertisements to be displayed on the publisher's content.",

technologies: [
{
name: "Google Ads",
logo: googleadsimg,
description: "Powerful advertising platform used to target customers through search and display ads."
},

{
name: "Facebook Ads",
logo: facebookadsimg,
description: "Social advertising platform used to reach highly targeted audiences."
},

{
name: "Analytics Tools",
logo: analyticsimg,
description: "Tools used to track campaign performance and optimize ad spending."
},

{
name: "Conversion Tracking",
logo: conversionimg,
description: "Technology used to measure and improve advertising ROI."
}
],

features: [
"Google Ads Campaigns",
"Facebook & Instagram Ads",
"Retargeting Campaigns",
"Campaign Strategy"
],

benefits: [
"Higher conversion rates",
"Targeted customer reach",
"Improved marketing ROI"
]
}

];

export default servicesData;