import { useEffect, useState } from "react";
import AllToyTable from "../AllToyTable/AllToyTable";
import img from '../../assets/home/slide1.png'
import { Helmet } from "react-helmet-async";


const AllToys = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
               
            })
            .catch(error => console.error(error))

    }, [])

    

    return (
        <div>
            <Helmet>
                <title>SEGREX / All-Toys</title>
            </Helmet>
            <img className="text-center  h-28 w-full" src={img} alt="" />
          
            <thead className="table w-full bg-black bg-opacity-75 my-2 ">
                    <tr>
                        <th >
                            
                            <th>Image</th>
                            
                        </th>
                        <th>Name</th>
                        <th >Sub-Category</th>
                        <th> Car Price </th>
                        <th>details</th>
                       
                    </tr>
                </thead>
            
            {
                categories.map(item=><AllToyTable
                key={item._id}
                item={item}
                ></AllToyTable>)
            }
            <div className="text-center my-5">
            <button className="btn text-center  w-32  text-white bg-orange-500">See MOre</button>
            </div>
        
      </div> 
    );
};

export default AllToys;