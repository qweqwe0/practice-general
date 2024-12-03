import { NavLink } from "react-router-dom";



function Header() {

    return (
      <div className="header">
          <div className="logo"></div>
          <ul className="menu_wrapper">
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/'}><li>Main Page</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/categories'}><li>Categories</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/products'}><li>All products</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/sales'}><li>All sales</li></NavLink>
          </ul>
          <div className="cart"></div>
      </div>
    );
  }
  
  export default Header;