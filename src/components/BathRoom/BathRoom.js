import './BathRoom.scss';
import pic from '../../assets/images/toilet.png';

export const BathRoom = () => {
    return (
        <section className="bathRoom contentWrapper">
            <div className="bathRoom__content">
                <h1 className="section__title">
                    THE BATHROOM
                </h1>
                
                <p className="section__desc">The BAYC Bathroom will become operational once the presale period is over. It contains a canvas accessible only to wallets containing at least one ape. Like any good dive bar bathroom, this is the place to draw, scrawl, or write expletives.</p>
                <p className="section__desc">Each ape-holder will be able to paint a pixel on the bathroom wall every fifteen minutes. Think of it as a collaborative art experiment for the cryptosphere. A members-only canvas for the discerning minds of crypto twitter.</p>
                <p className="section__desc">We're pretty sure it's going to be full of dicks.</p>
            </div>

            <div className="bathRoom__picture">
                <img alt="img" src={pic}></img>
            </div>
        </section>
    )
}

export default BathRoom;