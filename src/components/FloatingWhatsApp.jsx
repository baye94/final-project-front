import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    return (
        <>
            <a
                href="https://wa.me/1234567890?text=Hello%20Jolof%20Rice!%20I%20would%20like%20to%20order..."
                target="_blank"
                rel="noopener noreferrer"
                className="floating-wa"
            >
                <FaWhatsapp size={35} />
            </a>

            <style jsx>{`
        .floating-wa {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #25D366;
          color: white;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
          z-index: 9999;
          transition: all 0.3s ease;
          animation: pulse-wa 2s infinite;
        }

        .floating-wa:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
          color: white;
        }

        @keyframes pulse-wa {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        @media (max-width: 768px) {
          .floating-wa {
            bottom: 20px;
            right: 20px;
            width: 55px;
            height: 55px;
          }
        }
      `}</style>
        </>
    );
};

export default FloatingWhatsApp;
