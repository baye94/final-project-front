import { Link as ScrollLink } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-container">
        <div className="about-text animate-fade-in-up">
          <h2 className="section-title" style={{ textAlign: "left" }}>ABOUT US</h2>
          <h3 className="about-subtitle">The only thing we are serious about is food.</h3>
          <p className="about-desc">
            At Jolof Rice, we bring the authentic taste of Senegal straight to your table.
            Our recipes have been passed down through generations, combining fresh ingredients
            with traditional cooking methods. Experience a rich culinary journey filled with vibrant
            spices and heartfelt hospitality.
          </p>
          <ScrollLink to="menu" spy={true} smooth={true} duration={500} className="about-link">
            Explore Menu <HiOutlineArrowRight size={20} />
          </ScrollLink>
        </div>

        <div className="about-image-wrapper animate-scale-in">
          <img src="/about.png" alt="about us" className="about-img" />
          <div className="img-backdrop"></div>
        </div>
      </div>

      <style jsx>{`
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-subtitle {
          font-size: 2rem;
          color: var(--text-light);
          margin-bottom: 24px;
        }

        .about-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 32px;
          line-height: 1.8;
        }

        .about-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--primary-color);
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .about-link:hover {
          color: var(--primary-hover);
          gap: 12px;
        }

        .about-image-wrapper {
          position: relative;
          border-radius: var(--border-radius-lg);
          padding: 20px;
        }

        .about-img {
          width: 100%;
          border-radius: var(--border-radius-lg);
          object-fit: cover;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .img-backdrop {
          position: absolute;
          top: 0;
          right: 0;
          width: 80%;
          height: 100%;
          background: var(--primary-color);
          border-radius: var(--border-radius-lg);
          opacity: 0.1;
          z-index: 1;
          transform: translate(15px, 15px);
        }

        @media (max-width: 968px) {
          .about-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .section-title {
            text-align: center !important;
          }
          .about-link {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
