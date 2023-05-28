import { useLoaderData } from "react-router-dom";
import ToyCard from "../ToyCard/ToyCard";
import { useState } from "react";


const Mytoy = () => {
    const lodingtoys = useLoaderData();
    const [toyes, setToys] =useState(lodingtoys)
    return (
        <div>
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