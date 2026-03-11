import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer various technology courses including Web Development, React JS, Node JS, Python, and Full Stack Development."
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we provide placement support including resume building, interview preparation, and company referrals."
    },
    {
      question: "Are the classes online or offline?",
      answer:
        "We provide both online and offline classes depending on the course and student preference."
    },
    {
      question: "Do I get a certificate after completing the course?",
      answer:
        "Yes, every student receives a verified certificate after successful course completion."
    },
    {
      question: "What is the duration of the courses?",
      answer:
        "Course duration depends on the program. Most courses range between 2 to 6 months."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{ padding: "100px 0", background: "#f8fafc" }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "36px" }}>
            Frequently <span style={{ color: "#4f46e5" }}>Asked Questions</span>
          </h2>
          <p style={{ color: "#555", maxWidth: "600px", margin: "10px auto" }}>
            Find answers to common questions about our courses, training and placement support.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "auto" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "10px",
                marginBottom: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                overflow: "hidden"
              }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                style={{
                  padding: "18px 20px",
                  cursor: "pointer",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>

              {activeIndex === index && (
                <div
                  style={{
                    padding: "0 20px 20px",
                    color: "#555",
                    lineHeight: "1.6"
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;