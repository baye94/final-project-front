import { data } from '../restApi.json';

const Qualities = () => {
  return (
    <section className="qualities section" id="qualities">
      <div className="qualities-grid">
        {data[0].ourQualities.map((element) => (
          <div className="quality-card glass" key={element.id}>
            <div className="icon-wrapper">
              <img src={element.image} alt={element.title} className="quality-icon" />
            </div>
            <h3 className="quality-title">{element.title}</h3>
            <p className="quality-desc">{element.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .qualities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 20px;
        }

        .quality-card {
          padding: 40px 30px;
          border-radius: var(--border-radius-lg);
          text-align: center;
          transition: transform var(--transition-normal);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .quality-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(232, 93, 4, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: background var(--transition-fast);
        }

        .quality-card:hover .icon-wrapper {
          background: var(--primary-color);
        }

        .quality-icon {
          width: 40px;
          height: 40px;
          filter: invert(1);
          transition: filter var(--transition-fast);
        }

        .quality-card:hover .quality-icon {
          filter: invert(0);
        }

        .quality-title {
          font-size: 1.4rem;
          color: var(--primary-color);
          margin-bottom: 16px;
          letter-spacing: 1px;
        }

        .quality-desc {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Qualities;
