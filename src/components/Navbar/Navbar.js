export default function Navbar() {
  return (
    <nav className="navigation flex-row space-between align-center">
      <div className="left-navigation flex-row align-center">
        {/* <i
            className="fas fa-bars hamburger cursor-pointer"
            id="hamburger"
          ></i> */}
        <h2 className="logo-full cursor-pointer">electron</h2>
      </div>

      <div className="search flex-row align-center space-between">
        <input type="text" />
        <i className="fas fa-search"></i>
      </div>

      <div className="right-navigation navigation-icons flex-row align-center">
        <div className="navigation-option">
          <i className="fas fa-cog"></i>
          <h4 className="option-name regular">settings</h4>
        </div>

        <div className="navigation-option">
          <i className="fas fa-shopping-cart"></i>
          <h4 className="option-name regular">cart</h4>
        </div>
      </div>
    </nav>
  );
}
