import './Intro.scss';

import img1 from '../../assets/images/ape1.png';
import img2 from '../../assets/images/ape2.png';
import img3 from '../../assets/images/ape3.png';
import img4 from '../../assets/images/ape4.png';

import back from '../../assets/images/bayc-mutant-hero.jpg';

export const Intro = () => {
    return (
        <section className="intro">
            <div className="intro__back">
                <img alt="back" src={back}></img>
            </div>

            <div className="contentWrapper">                
                <div className="intro__welcome">
                    <div className="intro__welcome__desc">
                        <h1 className="section__title">WELCOME TO THE<br />BORED APE YACHT CLUB</h1>
                        <p className="section__desc">
                        BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.
                        </p>
                    </div>

                    <div className="intro__welcome__pictures">
                        <div><img alt="img" src={img1}></img></div>
                        <div><img alt="img" src={img2}></img></div>
                        <div><img alt="img" src={img3}></img></div>
                        <div><img alt="img" src={img4}></img></div>
                    </div>
                </div>

                <div className="intro__fair">
                    <h3 className="intro__fair__title">FAIR DISTRIBUTION</h3>
                    <div className="intro__fair__mint">
                        <h3 className="intro__fair__mint__title">BUY AN APE</h3>
                        <p className="intro__fair__mint__desc">The initial sale has sold out. To get your Bored Ape, check out the collection on OpenSea.</p>
                        <div className="intro__fair__mint__wrapper">
                            <a href="#javascript">
                                <button type="button">BUY AN APE ON OPENSEA</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;