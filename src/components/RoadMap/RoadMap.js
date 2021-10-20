import './RoadMap.scss';

import pic from '../../assets/images/serum-machine.gif';

export const RoadMap = () => {
    return (
        <section className="roadMap contentWrapper">
            <div className="roadMap__title">
                <h1 className="section__title">
                    ROADMAP ACTIVATIONS
                </h1>
            </div>

            <div className="roadMap__picture">
                <img src={pic} alt="img"></img>
            </div>
        </section>
    )
}

export default RoadMap;