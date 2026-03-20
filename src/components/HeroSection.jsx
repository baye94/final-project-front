import Navbar from "./Navbar";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />

      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title animate-fade-in-up">
            Authentic <span className="highlight">Senegalese</span><br /> Cuisine
          </h1>
          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the rich flavors, vibrant culture, and warm hospitality of Jolof Rice.
          </p>
          <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="menu" spy={true} smooth={true} duration={500}>
              <button className="btn btn-primary">Discover Menu</button>
            </Link>
            <Link to="reservation" spy={true} smooth={true} duration={500}>
              <button className="btn btn-outline">Book a Table</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-overlay"></div>

      <style jsx>{`
        .heroSection {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0 5%;
          background: linear-gradient(to right, rgba(18, 18, 18, 0.9) 0%, rgba(18, 18, 18, 0.4) 100%), url('/senegalese_hero_minimal.png') center/cover no-repeat;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, transparent 0%, var(--bg-dark) 120%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding-top: 80px; /* Accounts for navbar */
        }

        .hero-text-container {
          max-width: 700px;
        }

        .hero-title {
          font-size: clamp(3rem, 5vw + 1rem, 5.5rem);
          line-height: 1.1;
          margin-bottom: 24px;
          color: var(--text-light);
        }

        .highlight {
          color: var(--primary-color);
          text-shadow: 0 0 20px rgba(232, 93, 4, 0.3);
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 550px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .heroSection {
            background-position: 70% center;
            align-items: center;
            text-align: center;
          }
          .hero-text-container {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
