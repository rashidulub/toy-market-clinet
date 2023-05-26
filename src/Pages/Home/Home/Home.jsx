import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import LearnSec from '../../LearnSec/LearnSec';
import Categories from '../Categories/Categories';

import CategoryCard from '../CategoryCard/CategoryCard';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SEGREX / Home</title>
            </Helmet>

            <Banner></Banner>
            <LearnSec></LearnSec>
            <div  className="grid md:grid-cols-2 gap-4">
                <div>
                    <Categories></Categories>
                </div>
                <div>
                   <CategoryCard></CategoryCard>

                </div>
            </div>
        </div>
    );
};

export default Home;