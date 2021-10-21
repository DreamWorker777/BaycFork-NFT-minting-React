import './Home.scss'
import NavBar from '../../components/NavBar/NavBar';
import Intro from '../../components/Intro/Intro';
import Specs from '../../components/Specs/Specs';
import Club from '../../components/Club/Club';
import BathRoom from '../../components/BathRoom/BathRoom';
import RoadMap from '../../components/RoadMap/RoadMap';
import Team from '../../components/Team/Team';
import Footer from '../../components/Footer/Footer';

export const Home = () => {
    return (
        <div>
            <NavBar />

            <div className="container">
                <Intro />
                <Specs />
                <Club />
                <BathRoom />
                <RoadMap />
                <Team />
            </div>

            <Footer />
        </div>
    )
}

export default Home;