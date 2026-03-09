import React from "react";

import student1 from "../assets/images/student1.avif";
import student2 from "../assets/images/student2.avif";
import student3 from "../assets/images/student3.webp";
import student4 from "../assets/images/student4.jpg";
// import student5 from "../images/student5.jpg";
// import student6 from "../images/student6.jpg";
// import student7 from "../images/student7.jpg";
// import student8 from "../images/student8.jpg";
// import student9 from "../images/student9.jpg";

const StudentTestimonials = () => {
  const students = [
    { img: student1, company: "Microsoft" },
    { img: student2, company: "Goldman Sachs" },
    { img: student3, company: "Google" },
    { img: student4, company: "Google" },
    { img: student1, company: "Amazon" },
    { img: student2, company: "Samsung" },
    { img: student3, company: "PayPal" },
    { img: student4, company: "Amazon" },
    { img: student2, company: "JPMorgan" }
  ];

  return (
    <section className="students-section">
      <div className="container students-container">

        {/* LEFT TEXT */}
        <div className="students-text">
          <h2>
            Hear from our <span>students..</span>
          </h2>

          <p>
            From product based companies, startups to fintech firms &
            service based orgs - our students are everywhere.
          </p>

          <button className="testimonial-btn">
            Read SWE testimonials →
          </button>
        </div>

        {/* RIGHT GRID */}
        <div className="students-grid">
          {students.map((item, index) => (
            <div className="student-card" key={index}>
              <img src={item.img} alt="student" />
              <span className="company-tag">{item.company}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudentTestimonials;