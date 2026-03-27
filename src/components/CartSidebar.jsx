import { useCart } from '../context/CartContext';
import { HiX, HiPlus, HiMinus, HiOutlineTrash } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import api from "../api.js";

const CartSidebar = () => {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = async () => {
        if (cart.length === 0) return;
        try {
            const { data } = await api.post('/orders', { items: cart, totalAmount: cartTotal });
            toast.success(data.message || "Order Placed Successfully!");
            clearCart();
            toggleCart();
            navigate("/success");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to place order.");
        }
    };

    return (
        <>
            {/* Backdrop */}
            {isCartOpen && <div className="cart-backdrop" onClick={toggleCart}></div>}

            {/* Sidebar */}
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Order</h2>
                    <button className="close-btn" onClick={toggleCart}>
                        <HiX size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty.</p>
                            <button className="btn btn-outline" style={{ marginTop: "20px" }} onClick={toggleCart}>Browse Menu</button>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.title} className="item-img" />
                                <div className="item-details">
                                    <h4>{item.title}</h4>
                                    <p className="item-price">${item.price}</p>

                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}><HiMinus /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}><HiPlus /></button>
                                    </div>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    <HiOutlineTrash size={20} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-summary">
                            <span>Total:</span>
                            <span className="total-price">${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
                            Checkout Securely
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
        .cart-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.6);
          z-index: 2000;
          backdrop-filter: blur(5px);
        }

        .cart-sidebar {
          position: fixed;
          top: 0;
          right: -450px;
          width: 400px;
          height: 100vh;
          background: #151515;
          z-index: 2001;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 30px rgba(0,0,0,0.8);
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cart-sidebar.open {
          right: 0;
        }

        .cart-header {
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .cart-header h2 {
          color: var(--primary-color);
          font-size: 1.5rem;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .close-btn:hover {
          color: var(--primary-color);
        }

        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 20px 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .empty-cart {
          text-align: center;
          margin-top: 50px;
          color: var(--text-muted);
        }

        .cart-item {
          display: flex;
          gap: 15px;
          align-items: center;
          background: rgba(255,255,255,0.03);
          padding: 15px;
          border-radius: var(--border-radius-md);
        }

        .item-img {
          width: 70px;
          height: 70px;
          border-radius: var(--border-radius-sm);
          object-fit: cover;
        }

        .item-details {
          flex: 1;
        }

        .item-details h4 {
          font-size: 1rem;
          color: var(--text-light);
          margin-bottom: 5px;
        }

        .item-price {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 10px;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(0,0,0,0.3);
          border-radius: var(--border-radius-sm);
          width: fit-content;
          padding: 4px 10px;
        }

        .quantity-controls button {
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .quantity-controls button:hover {
          color: var(--primary-color);
        }

        .remove-btn {
          background: transparent;
          border: none;
          color: #ff4757;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity var(--transition-fast);
        }

        .remove-btn:hover {
          opacity: 1;
        }

        .cart-footer {
          padding: 30px;
          border-top: 1px solid rgba(255,255,255,0.1);
          background: #0A0A0A;
        }

        .cart-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .total-price {
          color: var(--primary-color);
          font-size: 1.5rem;
        }

        .checkout-btn {
          width: 100%;
          padding: 16px;
        }

        @media (max-width: 500px) {
          .cart-sidebar {
            width: 100%;
            right: -100%;
          }
        }
      `}</style>
        </>
    );
};

export default CartSidebar;
