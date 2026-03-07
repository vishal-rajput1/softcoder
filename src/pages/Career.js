import React, { useState } from 'react';
import { FaWhatsapp, FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Career = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Web Developer',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Looking for an experienced web developer proficient in React, Node.js, and modern web technologies.'
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Seeking a talented mobile app developer with expertise in React Native or Flutter.'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Creative designer needed with strong portfolio in web and mobile app design.'
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Noida, India',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Digital marketing expert to manage SEO, social media, and online advertising campaigns.'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '9671308053';

    const message = `Job Application

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.position}
Experience: ${formData.experience}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: ''
    });
  };

  return (
    <div className="career-page">

      {/* LOCAL CSS ONLY FOR THIS PAGE */}
      <style>{`
      .form-group{
      display:flex;
      flex-direction:column;
      gap:6px;
      }

      .form-group label{
      font-weight:500;
      }

      .form-group input,
      .form-group select,
      .form-group textarea{
      padding:12px 14px;
      border-radius:8px;
      border:1px solid #d1d5db;
      font-size:14px;
      transition:0.2s;
      }

      .form-group input:focus,
      .form-group select:focus,
      .form-group textarea:focus{
      outline:none;
      border-color:var(--primary-color);
      box-shadow:0 0 0 3px rgba(79,70,229,0.1);
      }
      .whatsapp-btn{
background:#25D366;
color:white;
border:none;
display:inline-flex;
align-items:center;
gap:8px;
padding:12px 22px;
border-radius:30px;
font-weight:600;
transition:0.3s;
}

.whatsapp-btn:hover{
background:#1ebe5d;
transform:translateY(-2px);
box-shadow:0 8px 18px rgba(0,0,0,0.15);
}
      `}</style>


      {/* HERO */}

      <section className="hero" style={{ minHeight: '60vh', paddingTop: '150px', textAlign: 'center' }}>
        <div className="container">
          <h1>Career Opportunities</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Join our growing team and work on exciting technologies, innovative projects,
            and meaningful digital solutions.
          </p>
        </div>
      </section>


      {/* WHY JOIN */}

      <section className="section">
        <div className="container">

          <div className="section-title">
            <p className="subtitle">Why Join Us</p>
            <h2>Build Your Career With Softcoders</h2>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))' }}>

            <div className="service-card">
              <h3>Career Growth</h3>
              <p>Work on real-world projects and continuously upgrade your skills.</p>
            </div>

            <div className="service-card">
              <h3>Modern Technologies</h3>
              <p>Exposure to the latest frameworks, tools, and development practices.</p>
            </div>

            <div className="service-card">
              <h3>Team Culture</h3>
              <p>Collaborative work environment with experienced professionals.</p>
            </div>

            <div className="service-card">
              <h3>Competitive Salary</h3>
              <p>Attractive compensation and performance-based growth.</p>
            </div>

          </div>

        </div>
      </section>


      {/* OPEN POSITIONS */}

      <section className="section" style={{ background: 'var(--light-color)' }}>
        <div className="container">

          <div className="section-title">
            <p className="subtitle">Current Openings</p>
            <h2>Available Positions</h2>
          </div>

          <div style={{ display: 'grid', gap: '30px' }}>

            {jobOpenings.map((job, index) => (

              <div
                key={job.id}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ textAlign: 'left', padding: '30px' }}
              >

                <h3 style={{ marginBottom: '10px' }}>{job.title}</h3>

                <div style={{
                  display: 'flex',
                  gap: '20px',
                  flexWrap: 'wrap',
                  fontSize: '0.9rem',
                  color: 'var(--gray)',
                  marginBottom: '15px'
                }}>

                  <span><FaMapMarkerAlt /> {job.location}</span>
                  <span><FaClock /> {job.type}</span>
                  <span><FaBriefcase /> {job.experience}</span>

                </div>

                <p>{job.description}</p>

                <a href="#apply" className="btn btn-primary">
                  Apply Now
                </a>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* APPLICATION FORM */}

      <section className="section" id="apply">
        <div className="container">

          <div className="section-title">
         
            <h2>Submit Your Application</h2>
          </div>

          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: '#fff',
            padding: '50px',
            borderRadius: '16px',
            boxShadow: '0 20px 45px rgba(0,0,0,0.08)'
          }}>

            <form onSubmit={handleSubmit}>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>

                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Position *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Position</option>

                    {jobOpenings.map(job => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}

                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label>Years of Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g. 3 years"
                    required
                  />
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label>Cover Letter / Additional Information</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tell us why you'd be a great fit..."
                  />
                </div>

              </div>

              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button type="submit" className="btn whatsapp-btn">
                  <FaWhatsapp /> Submit Application via WhatsApp
                </button>
              </div>

              <p style={{
                marginTop: '20px',
                textAlign: 'center',
                fontSize: '0.9rem'
              }}>
                You can also email your resume to
                <a href="mailto:Info@softcoders.in"> Info@softcoders.in</a>
              </p>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Career;