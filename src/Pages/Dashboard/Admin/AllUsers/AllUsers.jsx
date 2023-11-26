import { useEffect, useState } from "react";
import DashboardTitle from "../../../../Components/DashboardTitle";
import useUser from "../../../../hooks/useUser";
import Swal from "sweetalert2";


const AllUsers = () => {
    const user = useUser()
    const [users, setUsers] = useState([])
    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [url])

    const totalPrice = (parseInt(booking[0]?.price));

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Continue!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Great!",
                                text: `${booking?.name} is Now Admin`,
                                icon: "success"
                            });
                            const remaining = users.filter(users => users._id !== id);
                            setUsers(remaining)
                        }
                    })
            }
        });
    }

    const handleMakeDelivery = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Continue!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/delivery/${user}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Great!",
                                text: `${booking?.name} is now Delivery Man`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <DashboardTitle heading={"All "} subheading={"Users"} />

            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>User’s Name</th>
                        <th>Phone Number</th>
                        <th>Totall Booked</th>
                        <th>Total Spent</th>
                        <th>Make Delivery Men</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                {
                    users.map(users =>
                        <tbody key={users._id}>
                            <tr>
                                <th>{booking[0]?.name}</th>
                                <th>{booking[0]?.phone}</th>
                                <th>{booking?.length}</th>
                                <th>{totalPrice}</th>
                                <th>
                                    {
                                        users.role === 'delivery' ? 'Delivery Man'
                                        :
                                        <button onClick={() => handleMakeDelivery(users._id)} className="btn btn-primary btn-sm">Make Delivery</button>
                                    }
                                </th>
                                <th>
                                    {
                                        users.role === 'admin' ? 'Admin'
                                        :
                                        <button onClick={() => handleMakeAdmin(users._id)} className="btn btn-primary btn-sm">Make Admin</button>
                                    }
                                </th>
                            </tr>
                        </tbody>

                    )
                }
            </table>
        </div>
    );
};

export default AllUsers;