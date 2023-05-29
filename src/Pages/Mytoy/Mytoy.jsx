import { useLoaderData } from "react-router-dom";
import ToyCard from "../ToyCard/ToyCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Mytoy = () => {
    const lodingtoys = useLoaderData();
    const [toyes, setToys] =useState(lodingtoys)
    const [asc,setAsc]=useState(true)
    return (
        <div>
          <div className="text-center mt-7">
            <Helmet>
                <title>SEGREX / My-Toy</title>
            </Helmet>
          <button className="btn text-center  btn-primary"
          onClick={()=> setAsc(!asc)}
           >
          {asc ? 'Price:  High to Low' : 'Price:  Low to High'}
            </button>
          </div>
          {
            lodingtoys.map(toy=> <ToyCard
            key={toy._id}
            toy={toy}
            toyes={toyes}
            setToys={setToys}
            ></ToyCard>)
          }
        </div>
    );
};

export default Mytoy;