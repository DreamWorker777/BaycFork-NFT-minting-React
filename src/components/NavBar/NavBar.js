import './NavBar.scss';
import logo from '../../assets/images/bayc-logo-z.png';
import icon1 from '../../assets/images/topIcon1.svg';
import icon2 from '../../assets/images/topIcon2.svg';
import icon3 from '../../assets/images/topIcon3.svg';

import { Link } from 'react-scroll'
import menuIcon from '../../assets/images/menu.svg';

export const NavBar = () => {
    const menu = [
        "BUY AN APE", "ROADMAP", "TEAM", "MAYC", "GALLERY", "PROVENENCE", "MEMBERS"
    ];

    return (
        <nav className="navBar">
            <a href='#/' className="navBar__logo">
                <img src={logo} alt="logo"></img>
            </a>

            <div className="navBar__dropDownMenu">
                <img src={menuIcon} className="navBar__dropDownMenu__icon" alt="menu"></img>
                <div className="navBar__dropDownMenu__content">
                    {
                        menu.map((item, index) => (
                            <Link
                                key={index}
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                to={ item }
                            >
                                { item.toUpperCase() }
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="navBar__menu">
                <div className="navBar__menu__links">
                    <a href="#">BUY AN APE</a>
                    <a href="#">ROADMAP</a>
                    <a href="#">TEAM</a>
                    <a href="#">MAYC</a>
                    <a href="#">GALLERY</a>
                    <a href="#">PROVENENCE</a>
                    <a href="#">MEMBERS</a>
                </div>

                <div className="navBar__menu__socialIcons">
                    <a href="#">
                        <img src={icon1} alt="icon1"></img>
                    </a>
                    <a href="#">
                        <img src={icon2} alt="icon2"></img>
                    </a>
                    <a href="#">
                        <img src={icon3} alt="icon2"></img>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;