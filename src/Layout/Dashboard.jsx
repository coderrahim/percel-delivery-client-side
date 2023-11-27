import { Link, NavLink, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const user = useUser()
    const [users, setUsers] = useState([])
    const {LogOut} = useContext(AuthContext)

    const url = `http://localhost:5000/user?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [url])

    return (
        <div className="flex flex-wrap justify-between ">
            {
                users[0]?.role === 'admin' &&
                <>
                    <div className="w-64 h-screen bg-slate-600">
                        <ul className="menu">
                            <h2 className="text-xl font-bold my-2 text-orange-400 text-center"> Admin Section </h2>
                            <li>
                                <NavLink to='/dashboard/admin'>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allparcel'>All Parcel</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allusers'>All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/alldeliveryman'>Delivery Men</NavLink>
                            </li>
                        </ul>
                        <div className="divider"></div>
                        <ul className="menu">
                            <li className="btn btn-outline mb-3 btn-sm btn-primary">
                                <Link to='/'><button>Go Home</button></Link>
                            </li>
                            <li>
                                <button onClick={LogOut} className="btn  btn-sm btn-primary">Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            }

            {
                users[0]?.role === 'delivery' &&
                <>
                    <div className="w-64 h-screen bg-slate-600">
                        <ul className="menu">
                            <h2 className="text-xl font-bold my-2 text-orange-400 text-center"> Delivery Man Section </h2>
                            <li>
                                <NavLink to='/dashboard/delivery'>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/delivery-list'>My Delivery List</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/my-review'>My Review</NavLink>
                            </li>
                        </ul>
                        <div className="divider"></div>
                        <ul className="menu">
                            <li className="btn btn-outline mb-3 btn-sm btn-primary">
                                <Link to='/'><button>Go Home</button></Link>
                            </li>
                            <li>
                                <button onClick={LogOut} className="btn  btn-sm btn-primary">Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            }
            {
                (users[0]?.role !== 'admin') && (users[0]?.role !== 'delivery') &&
                <>
                    <div className="w-64 h-screen bg-slate-600">
                        <ul className="menu">
                            <h2 className="text-xl font-bold my-2 text-orange-400 text-center"> User Section </h2>
                            <li>
                                <NavLink to='/dashboard/user'>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/book-parcel'>Book Parcel</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/my-parcel'>My Parcel</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/my-profile'>My Profile</NavLink>
                            </li>
                        </ul>
                        <div className="divider"></div>
                        <ul className="menu">
                            <li className="btn btn-outline mb-3 btn-sm btn-primary">
                                <Link to='/'><button>Go Home</button></Link>
                            </li>
                            <li>
                                <button onClick={LogOut} className="btn  btn-sm btn-primary">Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            }

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;