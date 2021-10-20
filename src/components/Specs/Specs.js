import './Specs.scss';

import pic from '../../assets/images/mystery-ape.gif';

export const Specs = () => {
    return (
        <section className="specs contentWrapper">
            <div className="specs__content">
                <h1 className="section__title">
                    THE SPECS
                </h1>
                <p className="section__desc">
                    Each Bored Ape is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more. All apes are dope, but some are rarer than others.<br/><br/>The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (<a href="#/provenance">See Record and Proof.</a>) Purchasing an ape costs 0.08 ETH.<br/><br/>To access members-only areas such as&nbsp;<a href="#/bathroom">THE BATHROOM</a>, Apeholders will need to be signed into their Metamask Wallet.
                </p>
            </div>

            <div className="specs__picture">
                <img alt="img" src={pic}></img>
            </div>
        </section>
    )
}

export default Specs;