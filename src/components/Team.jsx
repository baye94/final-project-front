import { data } from '../restApi.json';

const Team = () => {
  return (
    <section className="team section" id="team">
      <h2 className="section-title">MEET OUR CHEFS</h2>
      <p className="section-subtitle">
        The passionate masters behind the authentic Senegalese flavors.
      </p>

      <div className="team-grid">
        {data[0].team.map((element) => (
          <div className="team-member glass" key={element.id}>
            <div className="member-img-wrapper">
              <img src={element.image} alt={element.name} className="member-img" />
            </div>
            <h3 className="member-name">{element.name}</h3>
            <p className="member-role">{element.designation}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .team-member {
          padding: 40px 20px;
          border-radius: var(--border-radius-lg);
          text-align: center;
          transition: transform var(--transition-normal);
        }

        .team-member:hover {
          transform: translateY(-8px);
        }

        .member-img-wrapper {
          width: 150px;
          height: 150px;
          margin: 0 auto 24px auto;
          border-radius: 50%;
          border: 4px solid var(--primary-color);
          overflow: hidden;
          padding: 4px;
          background: var(--bg-dark);
        }

        .member-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .member-name {
          font-size: 1.4rem;
          color: var(--text-light);
          margin-bottom: 8px;
        }

        .member-role {
          color: var(--primary-color);
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
};

export default Team;
