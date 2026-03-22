import { useState } from 'react';
import { data } from '../restApi.json';
import { useCart } from '../context/CartContext.jsx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import toast from 'react-hot-toast';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  // Extract unique categories
  const categories = ["All", ...new Set(data[0].dishes.map(dish => dish.category))];

  // Filter dishes based on active category
  const filteredDishes = activeCategory === "All"
    ? data[0].dishes
    : data[0].dishes.filter(dish => dish.category === activeCategory);

  const handleAddToCart = (dish) => {
    addToCart(dish);
    toast.success(`${dish.title} added to cart!`, {
      style: {
        background: '#333',
        color: '#fff',
      },
      iconTheme: {
        primary: 'var(--primary-color)',
        secondary: '#FFFAEE',
      },
    });
  };

  return (
    <section className="menu section" id="menu">
      <h2 className="section-title">POPULAR DISHES</h2>
      <p className="section-subtitle">
        Savor the iconic tastes of Senegal. From our signature Thieboudienne to the rich Mafe, every dish is a celebration.
      </p>

      {/* Interactive Category Filter */}
      <div className="menu-filters animate-fade-in-up">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredDishes.map((element) => (
          <div className="menu-card glass animate-scale-in" key={element.id}>
            <div className="card-img-wrapper">
              <img src={element.image} alt={element.title} className="menu-img" />
              <div className="category-badge">{element.category}</div>
            </div>

            <div className="card-content">
              <h3 className="dish-title">{element.title}</h3>
              <p className="dish-desc">Authentic senegalese flavors served fresh and hot.</p>

              <div className="card-footer">
                <span className="dish-price">$15.00</span>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(element)}
                  title="Add to Cart"
                >
                  <HiOutlineShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .menu-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 40px;
        }

        .filter-btn {
          background: transparent;
          border: 2px solid rgba(255,255,255,0.1);
          color: var(--text-light);
          padding: 8px 24px;
          border-radius: var(--border-radius-pill);
          font-family: var(--font-heading);
          font-size: 1rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover, .filter-btn.active {
          border-color: var(--primary-color);
          background: var(--primary-color);
          color: white;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }

        .menu-card {
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
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
          position: relative;
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

        .category-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          color: white;
          padding: 6px 16px;
          border-radius: var(--border-radius-pill);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .dish-title {
          font-size: 1.3rem;
          color: var(--text-light);
          margin-bottom: 8px;
          font-family: var(--font-heading);
        }

        .dish-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 20px;
          flex: 1;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 16px;
        }

        .dish-price {
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--primary-color);
        }

        .add-to-cart-btn {
          background: rgba(232, 93, 4, 0.1);
          color: var(--primary-color);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .add-to-cart-btn:hover {
          background: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Menu;
