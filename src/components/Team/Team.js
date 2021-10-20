import './Team.scss';

import photo1 from '../../assets/images/garga.png';
import photo2 from '../../assets/images/gordy.png';
import photo3 from '../../assets/images/tomato.png';
import photo4 from '../../assets/images/sass.png';
import photo5 from '../../assets/images/garga.png';

export const Team = () => {
    const teamInfo = [
        {
            name: 'GARGAMEL.',
            photo: photo1,
        },
        {
            name: 'GARGAMEL.',
            photo: photo2,
        },
        {
            name: 'GARGAMEL.',
            photo: photo3,
        },
        {
            name: 'GARGAMEL.',
            photo: photo4,
        },
        {
            name: 'GARGAMEL.',
            photo: photo5,
        },
    ]

    return (
        <section className="team contentWrapper">
            <div className="team__title">
                <h1 className="section__title">
                    THE TEAM
                </h1>
            </div>
            <div className="team__people">
                {
                    teamInfo.map(( item, index ) => (
                        <div className="team__people__member" key={index}>
                            <div className="team__people__member__photo">
                                <img alt="img" src={ item.photo }></img>
                            </div>
        
                            <div className="team__people__member__name">
                                <p>{ item.name }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Team;