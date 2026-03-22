import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { HiOutlineShoppingCart, HiOutlineArrowRight, HiOutlineRefresh } from 'react-icons/hi';
import { data } from '../restApi.json';
import toast from 'react-hot-toast';

const TasteMatcher = () => {
    const { addToCart } = useCart();
    const [step, setStep] = useState(0);
    const [preferences, setPreferences] = useState({ spicy: false, seafood: false });
    const [result, setResult] = useState(null);

    const questions = [
        {
            question: "What's your vibe today?",
            options: [
                { label: "Give me some HEAT 🔥", value: 'spicy', type: true },
                { label: "Keep it mild and rich 🍲", value: 'spicy', type: false }
            ]
        },
        {
            question: "Are you feeling like...",
            options: [
                { label: "Fresh Catch (Fish/Seafood) 🐟", value: 'seafood', type: true },
                { label: "Hearty Meat or Poultry 🥩", value: 'seafood', type: false }
            ]
        }
    ];

    const handleAnswer = (key, val) => {
        setPreferences({ ...preferences, [key]: val });
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            calculateResult({ ...preferences, [key]: val });
        }
    };

    const calculateResult = (finalPrefs) => {
        let recommendation = data[0].dishes[0]; // Default

        if (finalPrefs.seafood && finalPrefs.spicy) {
            recommendation = data[0].dishes.find(d => d.title === "SOUP KANDIA") || recommendation;
        } else if (finalPrefs.seafood && !finalPrefs.spicy) {
            recommendation = data[0].dishes.find(d => d.title === "POISSON BRAISE") || recommendation;
        } else if (!finalPrefs.seafood && !finalPrefs.spicy) {
            recommendation = data[0].dishes.find(d => d.title === "MAFE KANDJA") || recommendation;
        } else if (!finalPrefs.seafood && finalPrefs.spicy) {
            recommendation = data[0].dishes.find(d => d.title === "YASSA POULET") || recommendation;
        }

        setResult(recommendation);
        setStep(2);
    };

    const handleAddToCart = () => {
        if (result) {
            addToCart(result);
            toast.success(`${result.title} added to cart!`);
        }
    };

    const resetQuiz = () => {
        setStep(0);
        setResult(null);
        setPreferences({ spicy: false, seafood: false });
    };

    return (
        <section className="taste-matcher section" id="tastematcher">
            <div className="matcher-container glass">
                <div className="matcher-header">
                    <h2>TASTE MATCHER IA</h2>
                    <p>Not sure what to eat? Let us find your perfect Senegalese dish in 2 clicks.</p>
                </div>

                <div className="matcher-body">
                    {step < questions.length && (
                        <div className="quiz-slide animate-fade-in-up">
                            <h3>{questions[step].question}</h3>
                            <div className="options-grid">
                                {questions[step].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        className="btn btn-outline quiz-btn"
                                        onClick={() => handleAnswer(opt.value, opt.type)}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && result && (
                        <div className="result-slide animate-scale-in">
                            <h3>We found your match! ✨</h3>
                            <div className="result-card">
                                <img src={result.image} alt={result.title} />
                                <div className="result-info">
                                    <h4>{result.title}</h4>
                                    <p>A brilliant choice based on your cravings.</p>
                                    <div className="result-actions">
                                        <button className="btn btn-primary" onClick={handleAddToCart}>
                                            <HiOutlineShoppingCart size={20} /> Add to Order
                                        </button>
                                        <button className="btn restart-btn" onClick={resetQuiz} title="Retake Quiz">
                                            <HiOutlineRefresh size={22} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        .taste-matcher {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .matcher-container {
          background: linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9));
          border-radius: var(--border-radius-lg);
          padding: 60px 40px;
          border: 1px solid rgba(232, 93, 4, 0.2);
          max-width: 800px;
          width: 100%;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .matcher-header h2 {
          color: var(--primary-color);
          margin-bottom: 10px;
          font-size: 2rem;
        }

        .matcher-header p {
          color: var(--text-muted);
          margin-bottom: 40px;
        }

        .quiz-slide h3 {
          font-size: 1.5rem;
          color: var(--text-light);
          margin-bottom: 30px;
        }

        .options-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .quiz-btn {
          padding: 20px 40px;
          font-size: 1.1rem;
          border-width: 2px;
          border-radius: var(--border-radius-md);
        }

        .quiz-btn:hover {
          transform: translateY(-5px);
        }

        .result-slide h3 {
          color: #2ecc71;
          margin-bottom: 30px;
          font-size: 1.8rem;
        }

        .result-card {
          display: flex;
          align-items: center;
          gap: 30px;
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: var(--border-radius-md);
          text-align: left;
        }

        .result-card img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--primary-color);
        }

        .result-info h4 {
          font-size: 1.8rem;
          color: var(--text-light);
          margin-bottom: 8px;
        }

        .result-info p {
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .result-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .restart-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: var(--text-light);
          padding: 12px;
          border-radius: 50%;
        }

        .restart-btn:hover {
          background: rgba(255,255,255,0.1);
          color: var(--primary-color);
          transform: rotate(180deg);
        }

        @media (max-width: 768px) {
          .result-card {
            flex-direction: column;
            text-align: center;
          }
          .options-grid {
            flex-direction: column;
          }
        }
      `}</style>
        </section>
    );
};

export default TasteMatcher;
