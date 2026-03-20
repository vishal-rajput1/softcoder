import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

 const faqs = [
  {
    question: "What services does Softcoders provide?",
    answer:
      "Softcoders offers a wide range of IT services including Website Development, Mobile App Development, UI/UX Design, Digital Marketing, and E-commerce Solutions."
  },
  {
    question: "Do you build custom websites?",
    answer:
      "Yes, we specialize in creating fully customized websites tailored to your business needs, ensuring modern design, fast performance, and scalability."
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on the complexity and requirements. A basic website may take 1-2 weeks, while larger projects can take several weeks."
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your website or application runs smoothly after deployment."
  },
  {
    question: "Can you help grow my business online?",
    answer:
      "Absolutely! Our digital marketing services, including SEO, social media marketing, and paid ads, help increase your online visibility and generate leads."
  },
  {
    question: "Do you develop mobile applications?",
    answer:
      "Yes, we develop both Android and iOS mobile applications with user-friendly design and high performance."
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like React, Node.js, Python, MongoDB, and other latest frameworks to build scalable and efficient solutions."
  },
  {
    question: "How can I contact Softcoders for a project?",
    answer:
      "You can contact us through our website, email, or WhatsApp. Our team will get back to you quickly to discuss your requirements."
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