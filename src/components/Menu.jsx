import { data } from '../restApi.json';

const Menu = () => {
  return (
    <section className="menu section" id="menu">
      <h2 className="section-title">POPULAR DISHES</h2>
      <p className="section-subtitle">
        Savor the iconic tastes of Senegal. From our signature Thieboudienne to the rich Mafe, every dish is a celebration.
      </p>

      <div className="menu-grid">
        {data[0].dishes.map((element) => (
          <div className="menu-card glass" key={element.id}>
            <div className="card-img-wrapper">
              <img src={element.image} alt={element.title} className="menu-img" />
            </div>
            <div className="card-content">
              <h3 className="dish-title">{element.title}</h3>
              <span className="dish-category">{element.category}</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .menu-card {
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .menu-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(232, 93, 4, 0.15);
          border-color: rgba(232, 93, 4, 0.3);
        }

        .card-img-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: #000;
        }

        .menu-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .menu-card:hover .menu-img {
          transform: scale(1.1);
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .dish-title {
          font-size: 1.3rem;
          color: var(--text-light);
          margin-bottom: 12px;
          font-family: var(--font-heading);
        }

        .dish-category {
          background: rgba(232, 93, 4, 0.1);
          color: var(--primary-color);
          padding: 6px 16px;
          border-radius: var(--border-radius-pill);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
};

export default Menu;
