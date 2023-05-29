import { Link } from "react-router-dom";
import navlogo from '../../../assets/home/navlogo.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../provider/Authprovider";



const Navbar = () => {
  const { user ,LogOut } = useContext(AuthContext) 

  const handleLogOut =()=>{
    LogOut()
    .then()
    .catch(error =>console.log(error))
  }


  return (
    <div>
      <div className="navbar   bg-opacity-75 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link  to='/'>Home</Link></li>
              <li ><Link to='/alltoys'>All Toys</Link></li>
              <li ><Link to='/mytoy'>My Toys</Link></li>
              <li ><Link to='/addtoy'>Add Toy</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
          </div>
          <img className="w-12 rounded-full mr-0" src={navlogo} alt="" />
          <a className="btn btn-ghost normal-case text-xl">SEGREX</a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">
            <Link className="mr-5" to='/'>Home</Link>
            <Link className="mr-5" to='/alltoys'>All Toys</Link>
         
              {user &&
              <p>
                <Link  className="mr-5" to='/mytoy'>My Toys</Link>
                <Link className="mr-5" to='/addtoy'>Add Toy</Link>
                <Link className="mr-5" to='/blog'>Blog</Link>
                
              </p>
                }
           
           
          </ul>
        </div>
        <div className="navbar-end">
        { user ?
           <button onClick={handleLogOut} type="submit" className="btn text-white">LogOut</button>:
           
           <Link className="mr-5" to='/login'><button type="submit" className="btn text-white">Login</button></Link>

          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;