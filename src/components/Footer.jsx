import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content section">

        <div className="footer-brand">
          <h2 className="footer-logo">JOLOF RICE</h2>
          <p className="footer-desc">
            Bringing the authentic taste of Senegal directly to you. Enjoy the vibrant spices and rich cultural heritage in every bite.
          </p>
        </div>

        <div className="footer-info">
          <div className="info-block">
            <h3>Visit Us</h3>
            <p>Dakar,Senegal</p>
            <p>parcelle assainies</p>
          </div>
          <div className="info-block">
            <h3>Working Hours</h3>
            <p>Everyday</p>
            <p className="highlight">05:00 PM - 12:00 AM</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jolof Rice. All Rights Reserved.</p>
        <p>Developed with ❤️ by the Jolof Team</p>
      </div>

      <style jsx>{`
        .footer {
          background: #050505;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-content {
          padding-top: 60px;
          padding-bottom: 60px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 40px;
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 16px;
          letter-spacing: 2px;
        }

        .footer-desc {
          color: var(--text-muted);
          line-height: 1.6;
        }

        .footer-info {
          display: flex;
          gap: 60px;
        }

        .info-block h3 {
          color: var(--text-light);
          margin-bottom: 16px;
          font-size: 1.2rem;
        }

        .info-block p {
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .highlight {
          color: var(--primary-color) !important;
          font-weight: 500;
        }

        .footer-bottom {
          padding: 24px 5%;
          background: #000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255,255,255,0.4);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
          }
          .footer-info {
            flex-direction: column;
            gap: 30px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;