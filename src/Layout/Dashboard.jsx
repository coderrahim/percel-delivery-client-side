import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex flex-wrap justify-between ">
            <div className="w-64 h-screen bg-slate-600">
                <ul className="menu">
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
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;