import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bottom-navbar">

      <button className="nav-item active">
        About
      </button>

      <button className="nav-item">
        Projects
      </button>

      <button className="nav-item">
        Experience
      </button>

      <button className="nav-item">
        Skills
      </button>

      <button className="nav-item">
        Contact
      </button>

    </div>
  );
};

export default Navbar;