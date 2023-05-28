import { useLoaderData } from "react-router-dom";
import ToyCard from "../ToyCard/ToyCard";


const Mytoy = () => {
    const toys = useLoaderData();
    return (
        <div>
          {
            toys.map(toy=> <ToyCard
            key={toy._id}
            toy={toy}
            ></ToyCard>)
          }
        </div>
    );
};

export default Mytoy;