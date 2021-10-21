import './NavBar.scss';
import logo from '../../assets/images/bayc-logo-z.png';

import discordIcon from '../../assets/images/discord.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import homeIcon from '../../assets/images/home.png';
import telegramIcon from '../../assets/images/telegram.png';

import { Link } from 'react-scroll'
import menuIcon from '../../assets/images/menu.svg';

export const NavBar = () => {
    const menu = [
        {
            title: 'BUY AN APE',
            to: '',
        },
        {
            title: 'ROADMAP',
            to: 'roadMap',
        },
        {
            title: 'TEAM',
            to: '',
        },
        {
            title: 'MAYC',
            to: '',
        },
    ];

    return (
        <nav className="navBar">
            <a href='#javascript' className="navBar__logo">
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
                                to={ item.to }
                            >
                                { item.title }
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="navBar__menu">
                <div className="navBar__menu__links">
                    {
                        menu.map((item, index) => (
                            <Link
                                key={index}
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                to={ item.to }
                            >
                                { item.title }
                            </Link>
                        ))
                    }
                </div>

                <div className="navBar__menu__socialIcons">
                    <a href="#javascript">
                        <img src={homeIcon} alt="icon2"></img>
                    </a>
                    <a href="#javascript">
                        <img src={instagramIcon} alt="icon1"></img>
                    </a>
                    <a href="#javascript">
                        <img src={discordIcon} alt="icon2"></img>
                    </a>
                    <a href="#javascript">
                        <img src={twitterIcon} alt="icon2"></img>
                    </a>
                    <a href="#javascript">
                        <img src={telegramIcon} alt="icon2"></img>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;