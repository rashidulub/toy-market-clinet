import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const detail = useLoaderData();
    const {name,image,category,details,price}= detail
    return (
        <div className="card card-compact w-full mt-5 bg-base-100 mb-10 shadow-xl">
            <Helmet>
                <title>SEGREX / Details</title>
            </Helmet>
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-3xl text-white">Name: {name}</h2>
            <p className="text-start text-2xl my-2 text-white">Price: $ 
             {price}</p>
            <p className="text-start text-2xl my-2 text-white">category:  {category}</p>
            <p className="text-start text-2xl my-2 text-white">  {details}</p>
            
            
            
        </div>
    </div>
    );
};

export default Details;