import Rating from "react-rating";
import { FaRegStar, FaStar } from 'react-icons/fa';


const ActionCar = ({ category }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 my-20 ">
            <div className="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
                <figure><img src={category.category1_img.img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-white">Name: {category.category1_info.name1}</h2>
                    <p className="text-start text-2xl my-2 text-white">Price: $  {category.category1_info.Price1}</p>
                    <Rating className="text-start text-2xl my-2"
                        placeholderRating={category.category1_info.rating1}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={<FaStar className="text-orange-600"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}

                    ></Rating>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
                <figure><img src={category.category1_img.img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-white">Name: {category.category1_info.name2}</h2>
                    <p className="text-start text-2xl my-2 text-white">Price: $  {category.category1_info.Price2}</p>
                    <Rating className="text-start text-2xl my-2"
                        placeholderRating={category.category1_info.rating2}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={<FaStar className="text-orange-600"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}

                    ></Rating>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
                <figure><img src={category.category1_img.img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-white">Name: {category.category1_info.name3}</h2>
                    <p className="text-start text-2xl my-2 text-white">Price: $  {category.category1_info.Price3}</p>
                    <Rating className="text-start text-2xl my-2"
                        placeholderRating={category.category1_info.rating3}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={<FaStar className="text-orange-600"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}

                    ></Rating>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
                <figure><img src={category.category1_img.img4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-white">Name: {category.category1_info.name4}</h2>
                    <p className="text-start text-2xl my-2 text-white">Price: $  {category.category1_info.Price4}</p>
                    <Rating className="text-start text-2xl my-2"
                        placeholderRating={category.category1_info.rating4}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={<FaStar className="text-orange-600"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}

                    ></Rating>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
           

        </div>
    );
};

export default ActionCar;