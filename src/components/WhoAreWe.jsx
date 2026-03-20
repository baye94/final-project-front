import { data } from '../restApi.json';

const WhoAreWe = () => {
  return (
    <section className="who_are_we section" id="who_are_we">
      <div className="stats-container">

        <div className="stats-column">
          {data[0].who_we_are.slice(0, 2).map((element) => (
            <div className="stat-card glass animate-fade-in-up" key={element.id}>
              <h3 className="stat-number">{element.number}</h3>
              <p className="stat-title">{element.title}</p>
            </div>
          ))}
        </div>

        <div className="center-image-wrapper animate-scale-in">
          <img src="/whoweare.png" alt="Our story" className="center-img" />
          <div className="glow-effect"></div>
        </div>

        <div className="stats-column">
          {data[0].who_we_are.slice(2).map((element) => (
            <div className="stat-card glass animate-fade-in-up" key={element.id} style={{ animationDelay: '0.2s' }}>
              <h3 className="stat-number">{element.number}</h3>
              <p className="stat-title">{element.title}</p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .stats-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .stats-column {
          display: flex;
          flex-direction: column;
          gap: 30px;
          flex: 1;
        }

        .stat-card {
          padding: 40px 20px;
          text-align: center;
          border-radius: var(--border-radius-lg);
          transition: transform var(--transition-normal);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }

        .stat-number {
          font-size: 3.5rem;
          color: var(--primary-color);
          margin-bottom: 10px;
          line-height: 1;
        }

        .stat-title {
          font-size: 1.1rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .center-image-wrapper {
          flex: 2;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .center-img {
          width: 100%;
          max-width: 450px;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
          border: 10px solid var(--bg-card);
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
          opacity: 0.15;
          z-index: 1;
          filter: blur(40px);
        }

        @media (max-width: 968px) {
          .stats-container {
            flex-direction: column;
          }
          .stats-column {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
          }
          .stat-card {
            flex: 1;
            min-width: 150px;
            padding: 20px 10px;
          }
          .stat-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoAreWe;
