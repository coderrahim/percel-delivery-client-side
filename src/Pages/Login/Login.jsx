import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const {Login, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        Login(email, password)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                Swal.fire(
                    'Good Job!',
                    `Login Successful`,
                    'success'
                )
                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
                Swal.fire(
                    'Oopsh!',
                    `${error.message}`,
                    'error'
                )
            })

    }
    // Google login
    const handleGoogleLogin = () => {

        googleLogin()
            .then((data) => {
                console.log(data)
                Swal.fire(
                    'Good Job!',
                    `Login Successul`,
                    'success'
                )
                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
                Swal.fire(
                    'Oopsh!',
                    `${error.message}`,
                    'error'
                )
            })
    }

    return (
        <div className="hero min-h-screen ">

            <div className="hero-content flex-col ">
                <h1 className="text-5xl title">Login Now</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>

                        <div className="text-center my-3">
                            <p>Dont have an Accout? <Link className="font-bold text-primary text-xl" to='/registration'>Sign Up</Link> </p>
                        </div>
                    </form>

                    <div onClick={handleGoogleLogin} className="flex justify-around items-center mx-5 my-8 cursor-pointer shadow-md p-2 font-semibold border rounded-full bg-transparent">
                        <span className="text-2xl"> <FcGoogle /> </span>
                        <span>Login with Google</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;