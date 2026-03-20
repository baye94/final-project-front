import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", date: "", time: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReservation = (e) => {
    e.preventDefault();
    // Simulate successful API call since backend isn't part of this task
    if (formData.firstName && formData.email && formData.date && formData.time) {
      toast.success("Reservation confirmed successfully! (Simulated)");
      navigate("/success");
    } else {
      toast.error("Please fill all required fields correctly.");
    }
  };

  return (
    <section className="reservation section" id="reservation">
      <div className="res-container">

        <div className="res-image-wrapper animate-scale-in">
          <img src="/reservation.png" alt="Reserve a table" className="res-img" />
          <div className="res-overlay">
            <div className="overlay-text">
              <h3>Dine With Us</h3>
              <p>Experience true Senegalese hospitality</p>
            </div>
          </div>
        </div>

        <div className="res-form-wrapper glass animate-fade-in-up">
          <h2 className="section-title" style={{ textAlign: "left", marginBottom: "10px" }}>BOOK A TABLE</h2>
          <p className="res-subtitle">Reserve your spot at Jolof Rice for an unforgettable culinary journey.</p>

          <form className="res-form" onSubmit={handleReservation}>
            <div className="input-group">
              <input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required className="res-input" />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="res-input" />
            </div>

            <div className="input-group">
              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="res-input" />
              <input type="time" name="time" value={formData.time} onChange={handleChange} required className="res-input" />
            </div>

            <div className="input-group">
              <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required className="res-input" />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="res-input" />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              CONFIRM RESERVATION <HiOutlineArrowNarrowRight size={20} />
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .res-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 0;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }

        .res-image-wrapper {
          position: relative;
          height: 100%;
          min-height: 400px;
        }

        .res-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .res-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(16,16,16,0.9), rgba(16,16,16,0.2));
          display: flex;
          align-items: flex-end;
          padding: 40px;
        }

        .overlay-text h3 {
          color: var(--text-light);
          font-size: 2rem;
          margin-bottom: 8px;
        }

        .overlay-text p {
          color: var(--primary-color);
          font-weight: 500;
        }

        .res-form-wrapper {
          padding: 60px 50px;
          background: var(--bg-darker);
          border-radius: 0;
          border-left: 1px solid rgba(255,255,255,0.05);
        }

        .res-subtitle {
          color: var(--text-muted);
          margin-bottom: 40px;
          font-size: 1.05rem;
        }

        .res-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .input-group {
          display: flex;
          gap: 20px;
        }

        .res-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding: 12px 0;
          color: var(--text-light);
          font-family: var(--font-body);
          font-size: 1rem;
          transition: border-color var(--transition-fast);
        }

        .res-input:focus {
          outline: none;
          border-bottom-color: var(--primary-color);
        }

        .res-input::placeholder {
          color: rgba(255,255,255,0.4);
        }

        /* Hack for dark calendar/time picker icons in webkit */
        ::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.6;
          cursor: pointer;
        }

        .submit-btn {
          margin-top: 20px;
          align-self: flex-start;
          padding: 16px 40px;
          width: 100%;
        }

        @media (max-width: 968px) {
          .res-container {
            grid-template-columns: 1fr;
          }
          .res-image-wrapper {
            min-height: 250px;
          }
          .res-form-wrapper {
            padding: 40px 20px;
          }
          .input-group {
            flex-direction: column;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Reservation;
