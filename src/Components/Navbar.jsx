import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)

    const navMenu = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to='/notification'>Notification</NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <img className="w-24" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="indicator cursor-pointer mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>

                {
                    user ?
                        <div className="flex items-center justify-center gap-5">

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost shadow-xl btn-circle avatar">
                                    <div className="w-12 rounded-full">
                                        {/* {
                                                user.photoURL ?
                                                    <img src={user.photoURL} />
                                                    :
                                                    <img src={dbuser[0]?.photo_url} />
                                            } */}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-right border">
                                    {/* {
                                            user?.displayName ?
                                            <li className="text-md text-center font-medium">{user?.displayName} </li>
                                            :
                                            <li className="text-md text-center font-medium">{dbuser[0]?.name} </li>
                                        } */}
                                    <button className="btn btn-primary btn-sm my-3">
                                        <Link to='/dashboard'>Dashboard</Link>
                                    </button>

                                    <button onClick={LogOut} className="btn btn-primary btn-sm md:btn-md">Logout
                                    </button>

                                </ul>
                            </div>
                        </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-outline btn-primary btn-sm md:btn-md">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;