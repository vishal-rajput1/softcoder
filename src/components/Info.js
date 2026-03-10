import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import { COLORS } from "../theme/theme";

const Info = () => {
  return (
    <section
      className="py-20"
      style={{ background: COLORS.light }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* EMAIL CARD */}
          <div
            className="group p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            style={{ background: COLORS.white }}
          >
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-5 transition-all duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                color: COLORS.white
              }}
            >
              <FaEnvelope size={22} />
            </div>

            <h5
              className="text-xl font-semibold mb-3"
              style={{ color: COLORS.dark }}
            >
              Email Us
            </h5>

            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: COLORS.secondary }}
            >
              Have questions about our services or need support?
              Send us an email and our team will respond quickly.
            </p>

            <a
              href="mailto:Info@softcoders.in"
              className="font-semibold hover:underline"
              style={{ color: COLORS.primary }}
            >
              Info@softcoders.in
            </a>
          </div>


          {/* PHONE CARD */}
          <div
            className="group p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            style={{ background: COLORS.white }}
          >
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-5 transition-all duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                color: COLORS.white
              }}
            >
              <FaPhoneAlt size={22} />
            </div>

            <h5
              className="text-xl font-semibold mb-3"
              style={{ color: COLORS.dark }}
            >
              Call Us
            </h5>

            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: COLORS.secondary }}
            >
              Speak directly with our experts for project discussions,
              service inquiries, or technical assistance.
            </p>

            <a
              href="tel:+918295000455"
              className="font-semibold hover:underline"
              style={{ color: COLORS.primary }}
            >
              +91-8295000455
            </a>
          </div>


          {/* ADDRESS CARD */}
          <div
            className="group p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            style={{ background: COLORS.white }}
          >
            <div
              className="w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-5 transition-all duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                color: COLORS.white
              }}
            >
              <FaMapMarkerAlt size={22} />
            </div>

            <h5
              className="text-xl font-semibold mb-3"
              style={{ color: COLORS.dark }}
            >
              Visit Our Office
            </h5>

            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: COLORS.secondary }}
            >
              Meet our team in person to discuss your business needs
              and explore our software solutions.
            </p>

            <span
              className="font-semibold"
              style={{ color: COLORS.primary }}
            >
              Sector 15, Noida 201301 (U.P.)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Info;