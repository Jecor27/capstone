import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <header className="header">
      <div className="header__inner">
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/foods" className="nav__link">
                Food
              </NavLink>
            </li>
            <li>
              <NavLink to="/drinks" className="nav__link">
                Drinks
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
