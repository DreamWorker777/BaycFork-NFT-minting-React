import './Club.scss';

export const Club = () => {
    return (
        <section className="club contentWrapper">
            <h1 className="section__title">
                WELCOME TO THE CLUB
            </h1>
            <div className="club__item back_red">
                <p className="section__desc">10,000 Provably-rare Bored Ape tokens</p>
            </div>
            <div className="club__item back_blue">
                <p className="section__desc">Fair Launch, fair distribution: All apes cost 0.08 ETH</p>
            </div>
            <div className="club__item back_yellow">
                <p className="section__desc">Ownership and commercial usage rights given to the consumer over their NFT</p>
            </div>
            <div className="club__item back_green">
                <p className="section__desc">The Bathroom: A member's-only graffiti board</p>
            </div>
            <div className="club__item back_purple">
                <p className="section__desc">Gain additional benefits through roadmap activations</p>
            </div>
        </section>
    )
}

export default Club;