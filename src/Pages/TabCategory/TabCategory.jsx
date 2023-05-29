import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const TabCategory = ({item}) => {
    const {name,image,price,rating , _id} =item
    return (
        <div className="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-3xl text-black">Name: {name}</h2>
            <p className="text-start text-2xl my-2 text-black">Price: $  {price}</p>
            <Rating className="text-start text-2xl my-2"
                placeholderRating={rating}
                emptySymbol={<FaRegStar></FaRegStar>}
                readonly
                placeholderSymbol={<FaStar className="text-orange-600"></FaStar>}
                fullSymbol={<FaStar></FaStar>}

            ></Rating>
            
            <div className="card-actions justify-end">
                <Link to={`/details/${_id}`}
                ><button className="btn btn-primary">View Details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default TabCategory;