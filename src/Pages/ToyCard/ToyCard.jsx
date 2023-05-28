import Swal from "sweetalert2";



const ToyCard = ({ toy }) => {
    const {_id, name, photo, price, category } = toy
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/addtoy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            
                        }
                    })

            }
        })
    }

    return (
        <div className="overflow-x-auto w-full text-white ">


            <table className="table w-full ">
                {/* head */}

                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <img className="w-20 rounded-full" src={photo} alt="Avatar Tailwind CSS Component" />

                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">

                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold items-start ms-0">Name : {name}</div>

                                </div>
                            </div>
                        </td>
                        <td className="items-start">

                            <h1>Category: {category}</h1>
                        </td>
                        <td>     Price-${price}</td>
                        <th>
                            <button className="btn btn-warning">Update</button>
                        </th>
                        <th> 
                            <button 
                            onClick={()=>handleDelete(_id)}
                            className="btn btn-error">Delete</button>
                        </th>
                    </tr>
                    {/* row 2 */}

                </tbody>


            </table>
        </div>
    );
};

export default ToyCard;