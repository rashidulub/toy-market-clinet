import { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ActionCar from '../../ActionCar/ActionCar';
import SportsCar from '../../SportsCar/SportsCar';
import SupperCar from '../SupperCar/SupperCar';


const Categories = () => {
    const [Categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))

    }, [])

    return (
        <div className='text-center mb-7 '>
            <h1 className='text-6xl text-orange-500 md:w-4/12 mx-auto uppercase border-b-4 py-4 border-indigo-500 font-bold my-10'>Category</h1>
            <Tabs>
                <div className='mb-5 text-2xl text-white font-bold'>
                    <TabList >
                        <Tab>Action Car</Tab>
                        <Tab>Sports Car</Tab>
                        <Tab>Supper Car</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    {
                        Categories.map(category => <ActionCar
                            key={category.id}
                            category={category}
                        ></ActionCar>)
                    }

                </TabPanel>
                <TabPanel>
                    {
                        Categories.map(category => <SportsCar
                            key={category.id}
                            category={category}
                        ></SportsCar>)
                    }
                </TabPanel>
                <TabPanel>
                {
                        Categories.map(category => <SupperCar
                        key={category.id}
                        category={category}
                        ></SupperCar>)
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Categories;