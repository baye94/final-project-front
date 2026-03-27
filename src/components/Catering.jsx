import { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import api from "../api.js";

const Catering = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", guests: "", date: "", eventType: "Wedding"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCatering = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/catering', formData);
            toast.success(data.message || "Catering Request sent successfully!");
            setFormData({ name: "", email: "", phone: "", guests: "", date: "", eventType: "Wedding" });
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to submit catering request.");
        }
    };

    return (
        <section className="catering section" id="catering">
            <div className="catering-container glass animate-scale-in">
                <div className="catering-text">
                    <h2 className="section-title" style={{ textAlign: "left", color: "var(--text-light)" }}>CATERING & EVENTS</h2>
                    <p className="res-subtitle">
                        Bring the spectacular flavors of Senegal to your next big event.
                        Whether it’s a wedding, corporate lunch, or a family gathering, Jolof Rice has you covered.
                    </p>
                    <ul className="perks-list">
                        <li>✔️ Customized Menu Options</li>
                        <li>✔️ Full Service or Buffet Drop-off</li>
                        <li>✔️ Authentic Taste Guaranteed</li>
                    </ul>
                </div>

                <div className="catering-form-wrapper">
                    <form className="res-form" onSubmit={handleCatering}>
                        <div className="input-group">
                            <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required className="res-input" />
                            <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required className="res-input" />
                        </div>

                        <div className="input-group">
                            <input type="number" name="guests" placeholder="No. of Guests *" value={formData.guests} onChange={handleChange} required className="res-input" />
                            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="res-input" />
                        </div>

                        <div className="input-group">
                            <select name="eventType" value={formData.eventType} onChange={handleChange} className="res-input">
                                <option value="Wedding">Wedding</option>
                                <option value="Corporate">Corporate Event</option>
                                <option value="Party">Private Party</option>
                                <option value="Other">Other</option>
                            </select>
                            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="res-input" />
                        </div>

                        <button type="submit" className="btn btn-outline submit-btn">
                            REQUEST QUOTE <HiOutlineArrowNarrowRight size={20} />
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
        .catering-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 50px;
          padding: 60px;
          border-radius: var(--border-radius-lg);
          background: linear-gradient(135deg, var(--primary-color) 0%, rgba(232, 93, 4, 0.2) 100%);
          color: white;
          box-shadow: 0 20px 40px rgba(232, 93, 4, 0.15);
          position: relative;
          overflow: hidden;
        }

        .catering-container::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
        }

        .res-subtitle {
          color: rgba(255,255,255,0.9);
          margin-bottom: 30px;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .perks-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          font-weight: 500;
          font-size: 1.1rem;
        }

        .perks-list li {
          background: rgba(0,0,0,0.2);
          padding: 10px 20px;
          border-radius: var(--border-radius-sm);
          display: inline-block;
        }

        .catering-form-wrapper {
          background: var(--bg-dark);
          padding: 40px;
          border-radius: var(--border-radius-lg);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .input-group {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
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

        .res-input option {
          background: var(--bg-dark);
          color: white;
        }

        ::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.6;
          cursor: pointer;
        }

        .submit-btn {
          margin-top: 10px;
          width: 100%;
          border-color: var(--primary-color) !important;
        }

        @media (max-width: 968px) {
          .catering-container {
            grid-template-columns: 1fr;
            padding: 30px 20px;
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

export default Catering;
