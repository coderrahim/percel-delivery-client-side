import { useEffect, useState } from "react";
import DashboardTitle from "../../../../Components/DashboardTitle";
import useUser from "../../../../hooks/useUser";
import Swal from "sweetalert2";
import useDbUser from "../../../../hooks/useDbUser";


const AllUsers = () => {
    const user = useUser()
    const [users, setUsers] = useState([])
    const [booking, setBooking] = useState([])
    const dbUser = useDbUser()

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const url = `http://localhost:5000/booking`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [url])

    useEffect(() => {
        fetch('http://localhost:5000/booking?email=rahim5@gmail.com')
    } ,[])

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
                            const remaining = users.filter(users => users._id !== user);
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
                        <th>User’s Email</th>
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
                                <th>{users?.name}</th>
                                <th>{users?.email}</th>
                                <th>{booking?.length}</th>
                                <th>{totalPrice}</th>
                                <th>
                                    {
                                        users.role === 'delivery' ? 'Delivery Man'
                                        :
                                        <button onClick={() => handleMakeDelivery(users._id)} className="btn btn-primary btn-sm">Make Deliver</button>
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