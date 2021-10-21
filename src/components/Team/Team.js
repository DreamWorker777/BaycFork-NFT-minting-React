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
            position: 'TestPosition',
            address: 'TestAddress',
            photo: photo1,
            color: '#123456',
        },
        {
            name: 'GARGAMEL.',
            position: 'TestPosition',
            address: 'TestAddress',
            photo: photo2,
            color: '#123456',
        },
        {
            name: 'GARGAMEL.',
            position: 'TestPosition',
            address: 'TestAddress',
            photo: photo3,
            color: '#123456',
        },
        {
            name: 'GARGAMEL.',
            position: 'TestPosition',
            address: 'TestAddress',
            photo: photo4,
            color: '#123456',
        },
        {
            name: 'GARGAMEL.',
            position: 'TestPosition',
            address: 'TestAddress',
            photo: photo5,
            color: '#123456',
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
        
                            <div className="team__people__member__info" style={{ backgroundColor: item.color }}>
                                <p>{ item.name }</p>
                                <p>{ item.position }</p>
                                <p>{ item.address }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="team__contractAddress">
                <span>VERIFIED SMART CONTRACT ADDRESS: </span>
                <a href="https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D">
                    0x029290c564Ef921c56a784AA16C97E930dAF7372
                </a>
            </div>
        </section>
    )
}

export default Team;