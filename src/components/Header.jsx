import { NavLink } from "react-router-dom";
import cart from '../assets/basket=empty.png'
import logo from '../assets/logo.png'



function Header() {

    return (
      <header>
        <div className="nav-cont">
            <div className="logo"><img src={logo}/></div>
            <ul className="nav-center">
                <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/'}><li>Main Page</li></NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/categories'}><li>Categories</li></NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/products/all'}><li>All products</li></NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/products/sales'}><li>All sales</li></NavLink>
            </ul>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/cart'}><div className="cart" ><img src={cart}/></div> </NavLink>
        </div>
      </header>
    );
  }
  
  export default Header;