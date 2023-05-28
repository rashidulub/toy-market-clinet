import {  useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import UseMenu from '../../../hooks/UseMenu';
import TabItem from '../../TabItem/TabItem';


const Categories = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [categories] = UseMenu();

    const Action =categories.filter(item => item.category ==="Action")
    const Supper =categories.filter(item => item.category ==="Supper")
    const Sports =categories.filter(item => item.category ==="Sports")
    

    return (
        <div className='text-center mb-7 '>
            <h1 className='text-6xl text-orange-500 md:w-4/12 mx-auto uppercase border-b-4 py-4 border-indigo-500 font-bold my-10'>Category</h1>
          

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Action Car</Tab>
                    <Tab>Sports Car</Tab>
                    <Tab>Supper Car</Tab>
                </TabList>
                <TabPanel>
                        <TabItem items={Action}></TabItem>

                </TabPanel>
                <TabPanel>
                    <TabItem items={Sports}></TabItem>
                </TabPanel>
                <TabPanel>
                <TabItem items={Supper}></TabItem>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Categories;