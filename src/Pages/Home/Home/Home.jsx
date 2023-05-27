import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import LearnSec from '../../LearnSec/LearnSec';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SEGREX / Home</title>
            </Helmet>

            <Banner></Banner>
            <LearnSec></LearnSec>
            <Categories></Categories>
            
        </div>
    );
};

export default Home;