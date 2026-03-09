import webImg from "../assets/images/webdev.jpg";
import mobileImg from "../assets/images/OIP.webp";
import reactimg from "../assets/images/reactimg.webp";
import nodeimg from "../assets/images/node.webp";
import mongodb from "../assets/images/mongodb.webp";
import express from "../assets/images/expressjs.webp";

import mobile from "../assets/images/mob.webp";
import flutterimg from "../assets/images/flutter.webp";
import firebaseimg from "../assets/images/firebase.webp";
import kotlinimg from "../assets/images/kotlin.png";
import swiftimg from "../assets/images/swift.webp";


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


];

export default servicesData;