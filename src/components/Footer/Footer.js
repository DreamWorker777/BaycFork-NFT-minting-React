import './Footer.scss';
import icon1 from '../../assets/images/topIcon1.svg';
import icon2 from '../../assets/images/topIcon2.svg';
import icon3 from '../../assets/images/topIcon3.svg';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__siteName">The site name</div>
            <div className="footer__links">
                <a href="#javascript;"><img src={icon1} alt="icon1"></img></a>
                <a href="#javascript;"><img src={icon2} alt="icon2"></img></a>
                <a href="#javascript;"><img src={icon3} alt="icon3"></img></a>
            </div>
            <div className="footer__copyright">© 2021 Yuga Labs LLC</div>
        </div>
    )
}

export default Footer;