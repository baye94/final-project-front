import { data } from '../restApi.json';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<FaStar key={i} color="#F48C06" />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FaStarHalfAlt key={i} color="#F48C06" />);
            } else {
                stars.push(<FaStar key={i} color="rgba(255,255,255,0.2)" />);
            }
        }
        return stars;
    };

    return (
        <section className="testimonials section" id="testimonials">
            <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
            <p className="section-subtitle">Real experiences from our lovely customers at Jolof Rice.</p>

            <div className="testi-grid">
                {data[0].testimonials.map((testi) => (
                    <div className="testi-card glass animate-fade-in-up" key={testi.id}>
                        <div className="quote-icon">"</div>
                        <p className="testi-desc">{testi.description}</p>
                        <div className="testi-footer">
                            <img src={testi.image} alt={testi.userName} className="testi-avatar" />
                            <div className="testi-info">
                                <h4>{testi.userName}</h4>
                                <div className="stars">
                                    {renderStars(testi.rating)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .testi-card {
          padding: 40px 30px;
          border-radius: var(--border-radius-lg);
          position: relative;
          transition: transform var(--transition-normal);
        }

        .testi-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary-color);
        }

        .quote-icon {
          position: absolute;
          top: -20px;
          right: 30px;
          font-size: 5rem;
          color: var(--primary-color);
          opacity: 0.2;
          font-family: serif;
          line-height: 1;
        }

        .testi-desc {
          font-size: 1.05rem;
          color: var(--text-light);
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 30px;
          position: relative;
          z-index: 2;
        }

        .testi-footer {
          display: flex;
          align-items: center;
          gap: 15px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
        }

        .testi-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary-color);
        }

        .testi-info h4 {
          font-size: 1.1rem;
          color: var(--primary-color);
          margin-bottom: 4px;
        }

        .stars {
          display: flex;
          gap: 4px;
          font-size: 0.9rem;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
