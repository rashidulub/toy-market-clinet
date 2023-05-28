import TabCategory from "../TabCategory/TabCategory";


const TabItem = ({items}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 my-20 ">
                        {
                            items.map(item => <TabCategory
                            key={item._id}
                            item={item}
                            >

                            </TabCategory>)
                        }
                        </div>
    );
};

export default TabItem;