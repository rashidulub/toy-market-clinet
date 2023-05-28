

const AllToyTable = ({item}) => {
    const {name,image,price,category} =item
    return (
        
         <div className="overflow-x-auto w-full text-white ">
           
            
            <table className="table w-full ">
                {/* head */}
                
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                            <img className="w-24" src={image} alt="Avatar Tailwind CSS Component" />
                                
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                       
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{name}</div>
                                    
                                </div>
                            </div>
                        </td>
                        <td>
                            sub categories of car
                            <br />
                            <span className="badge badge-ghost badge-sm">Sub-Category--  <span className="text-orange-500 text-sm">  {category }</span> </span>
                        </td>
                        <td>     Price-${price}</td>
                        <th>
                        <button className="btn btn-success">details</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    
                </tbody>
                

            </table>
            </div>
    );
};

export default AllToyTable;