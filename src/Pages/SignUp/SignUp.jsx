import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-40">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white ml-10">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className="text-white text-center">New to Toy Market Place <Link className="text-orange-600 text-xl" to='/signup'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;