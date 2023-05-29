import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const AddToy = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;

        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newToys = { name, price, category, details, photo }

        console.log(newToys);

        // send data to the server
        fetch('https://toy-market-place-server-xi.vercel.app/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Add Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }

            })

    };

    return (
        <div className="bg-[#72bdff] my-14 p-24">
            <Helmet>
                <title>SEGREX / Add-Toy</title>
            </Helmet>
            <h2 className="text-3xl text-white font-extrabold">Add a toy</h2>
            <form onSubmit={handleAddCoffee} >
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-tex text-black">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add A Toy" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddToy;