import { useEffect, useState } from "react";
import AllToyTable from "../AllToyTable/AllToyTable";
import img from '../../assets/home/slide1.png'
import { Helmet } from "react-helmet-async";


const AllToys = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://toy-market-place-server-xi.vercel.app/services')
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
            <div className="form-control ml-40 my-5 text-center">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered w-7/12" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

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
                categories.map(item => <AllToyTable
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