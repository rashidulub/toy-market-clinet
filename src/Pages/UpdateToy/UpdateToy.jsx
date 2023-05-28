import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const toy = useLoaderData();
    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;

        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const Updatetoy = { name, price, category, details, photo }

        console.log(Updatetoy);

        // send data to the server
        fetch(`http://localhost:5000/addtoy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Updatetoy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount> 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }

            })

    };
    
    const { _id,name, photo, price, category ,details} = toy
    return (
        <div className="bg-[#3b300c] my-14 p-24">
            <h2 className="text-3xl text-white font-extrabold">Update toy-- {name}</h2>
            <form onSubmit={handleUpdateToy} >
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category}  placeholder="Category Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Toy" className="btn btn-block" />

            </form>
        </div>
    );
};

export default UpdateToy;