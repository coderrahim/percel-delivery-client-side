import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {

    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // PASSWORD VALIDATION
        if (password.length < 6) {
            Swal.fire(
                'Oopsh!',
                `<b>${name}</b> Password Length atleast Six`,
                'error'
            )
            return
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            Swal.fire(
                'Oopsh!',
                `<b>${name}</b> Password atleast one <br> Uppercase & Lowercase`,
                'error'
            )
            return
        }

        const signUpData = {
            name: name,
            email: email,
            password: password,
            photo_url: photo,
        }

        createUser(email, password)
            .then(() => {

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(signUpData)
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire(
                                'Good Job!',
                                `Account Create Successfully`,
                                'success'
                            )
                            navigate(location.state ? location.state : '/')

                        }
                    })
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
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <h1 className="text-5xl title">Create Account</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>

                        <div className="text-center my-3">
                            <p>Have an Accout? <Link className="font-bold text-primary text-xl" to='/login'>Sign In</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;