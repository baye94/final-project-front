import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { HiOutlinePlus, HiCheck, HiOutlineShoppingBag } from 'react-icons/hi';
import toast from 'react-hot-toast';

const PlateBuilder = () => {
    const { addToCart } = useCart();

    const categories = {
        base: [
            { id: 'b1', name: 'Jolof Red Rice', price: 5, img: '/thieboudienne.png' },
            { id: 'b2', name: 'White Rice (Yassa style)', price: 4, img: '/yassa_poulet.png' },
            { id: 'b3', name: 'Millet Couscous', price: 6, img: '/thiakry_dessert.png' }
        ],
        protein: [
            { id: 'p1', name: 'Braised Fish', price: 12, img: '/jolof_rice.png' },
            { id: 'p2', name: 'Peanut Beef (Mafe)', price: 10, img: '/mafe_stew.png' },
            { id: 'p3', name: 'Lemon Chicken (Yassa)', price: 9, img: '/yassa_poulet.png' }
        ],
        sides: [
            { id: 's1', name: 'Fried Plantains', price: 3, img: '/thieboudienne.png' },
            { id: 's2', name: 'Okra Sauce', price: 2, img: '/soup_kandia.png' },
        ]
    };

    const [selections, setSelections] = useState({
        base: null,
        protein: null,
        sides: []
    });

    const toggleSide = (side) => {
        const isSelected = selections.sides.find(s => s.id === side.id);
        if (isSelected) {
            setSelections({ ...selections, sides: selections.sides.filter(s => s.id !== side.id) });
        } else {
            setSelections({ ...selections, sides: [...selections.sides, side] });
        }
    };

    const calculateTotal = () => {
        let total = 0;
        if (selections.base) total += selections.base.price;
        if (selections.protein) total += selections.protein.price;
        selections.sides.forEach(s => total += s.price);
        return total;
    };

    const handleAddCustomToCart = () => {
        if (!selections.base || !selections.protein) {
            toast.error('Please select both a Base and a Protein to build your plate!');
            return;
        }

        const customDish = {
            id: `custom_${Date.now()}`,
            title: `Custom Bowl: ${selections.base.name} & ${selections.protein.name}`,
            price: calculateTotal(),
            quantity: 1,
            image: selections.protein.img // Main protein image acts as representative
        };

        addToCart(customDish);
        toast.success('Custom masterpiece added to cart!');

        // Reset
        setSelections({ base: null, protein: null, sides: [] });
    };

    return (
        <section className="plate-builder section" id="platebuilder">
            <h2 className="section-title">BUILD YOUR BOWL</h2>
            <p className="section-subtitle">Craft your ultimate Senegalese meal. Select your base, protein, and delicious sides.</p>

            <div className="builder-container glass">
                <div className="builder-grid">
                    {/* Base Selection */}
                    <div className="builder-column">
                        <h3 className="column-title">1. Choose Base</h3>
                        <div className="items-list">
                            {categories.base.map(item => (
                                <div
                                    key={item.id}
                                    className={`builder-item ${selections.base?.id === item.id ? 'selected' : ''}`}
                                    onClick={() => setSelections({ ...selections, base: item })}
                                >
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <span className="item-price">+${item.price}</span>
                                    </div>
                                    <div className="check-ring">
                                        {selections.base?.id === item.id && <HiCheck color="white" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Protein Selection */}
                    <div className="builder-column">
                        <h3 className="column-title">2. Choose Protein</h3>
                        <div className="items-list">
                            {categories.protein.map(item => (
                                <div
                                    key={item.id}
                                    className={`builder-item ${selections.protein?.id === item.id ? 'selected' : ''}`}
                                    onClick={() => setSelections({ ...selections, protein: item })}
                                >
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <span className="item-price">+${item.price}</span>
                                    </div>
                                    <div className="check-ring">
                                        {selections.protein?.id === item.id && <HiCheck color="white" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sides Selection */}
                    <div className="builder-column">
                        <h3 className="column-title">3. Add Sides (Optional)</h3>
                        <div className="items-list">
                            {categories.sides.map(item => {
                                const isSelected = selections.sides.some(s => s.id === item.id);
                                return (
                                    <div
                                        key={item.id}
                                        className={`builder-item ${isSelected ? 'selected' : ''}`}
                                        onClick={() => toggleSide(item)}
                                    >
                                        <div className="item-info">
                                            <h4>{item.name}</h4>
                                            <span className="item-price">+${item.price}</span>
                                        </div>
                                        <div className="check-box">
                                            {isSelected ? <HiCheck color="white" /> : <HiOutlinePlus />}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Live Total and Checkout */}
                <div className="builder-footer animate-fade-in-up">
                    <div className="live-total">
                        Total for your bowl: <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    <button
                        className="btn btn-primary add-custom-btn"
                        onClick={handleAddCustomToCart}
                    >
                        <HiOutlineShoppingBag size={22} /> Add to Cart
                    </button>
                </div>
            </div>

            <style jsx>{`
        .builder-container {
          padding: 40px;
          border-radius: var(--border-radius-lg);
          margin-top: 30px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .builder-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }

        .column-title {
          font-family: var(--font-heading);
          color: var(--primary-color);
          font-size: 1.3rem;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .items-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .builder-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .builder-item:hover {
          background: rgba(255,255,255,0.08);
          transform: translateX(5px);
        }

        .builder-item.selected {
          background: rgba(232, 93, 4, 0.15);
          border-color: var(--primary-color);
        }

        .item-info h4 {
          color: var(--text-light);
          font-size: 1.05rem;
          margin-bottom: 4px;
        }

        .item-price {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .check-ring {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .builder-item.selected .check-ring {
          background: var(--primary-color);
          border-color: var(--primary-color);
        }

        .check-box {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 2px solid var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .builder-item.selected .check-box {
          background: var(--primary-color);
          border-color: var(--primary-color);
        }

        .builder-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .live-total {
          font-size: 1.2rem;
          color: var(--text-light);
        }

        .live-total span {
          font-size: 1.8rem;
          font-weight: bold;
          color: var(--primary-color);
          margin-left: 10px;
        }

        .add-custom-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          font-size: 1.1rem;
        }

        @media (max-width: 968px) {
          .builder-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .builder-container {
            padding: 20px;
          }
          .builder-footer {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          .add-custom-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default PlateBuilder;
