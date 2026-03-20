import { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "glass scrolled" : ""} animate-fade-in-up`}>
      <div className="logo">JOLOF RICE</div>

      <div className={`navLinks ${show ? "showmenu" : ""}`}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <Link
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
              className="nav-link"
              onClick={() => setShow(false)}
            >
              {element.title}
            </Link>
          ))}
        </div>
        <button className="btn btn-primary menuBtn" onClick={() => {
          document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
          setShow(false);
        }}>
          OUR MENU
        </button>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu size={30} color={scrolled ? "var(--text-light)" : "var(--primary-color)"} />
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 24px 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          transition: all var(--transition-normal);
          background: transparent;
        }
        .navbar.scrolled {
          padding: 16px 5%;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary-color);
          letter-spacing: 1px;
        }
        .navLinks {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 1rem;
          color: var(--text-light);
          cursor: pointer;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary-color);
          transition: width var(--transition-fast);
        }
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
        .hamburger {
          display: none;
          cursor: pointer;
          z-index: 1000;
        }

        @media (max-width: 968px) {
          .navLinks {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background: var(--bg-darker);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: right 0.4s ease-in-out;
            box-shadow: -10px 0 30px rgba(0,0,0,0.8);
          }
          .navLinks.showmenu {
            right: 0;
          }
          .links {
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
            margin-bottom: 2rem;
          }
          .nav-link {
            font-size: 1.2rem;
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
