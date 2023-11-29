const Navbar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };

  const Menu = () => {
    return (
      <div>
        <h2>Menu</h2>
        {}
      </div>
    );
  };
  
  const About = () => {
    return (
      <div>
        <h2>About Us</h2>
        {}
      </div>
    );
  };
  
  const Contact = () => {
    return (
      <div>
        <h2>Contact</h2>
        {}
      </div>
    );
  };

  export default Navbar;