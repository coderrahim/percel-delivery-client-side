import { useEffect, useState } from "react";
import useUser from "../../../../hooks/useUser";
import DashboardTitle from "../../../../Components/DashboardTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyPercel = () => {
    const user = useUser()
    const [booking, setBooking] = useState([])

    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [url])
    // const totalPrice = 

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = booking.filter(booking => booking._id !== id);
                            setBooking(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-between">
                <DashboardTitle heading={"My Order "} subheading={"Parcel"} />
                <button className="btn btn-primary">PAY Now</button>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Parcel Type</th>
                            <th>Booking Date</th>
                            <th>Delivery Date</th>
                            <th>Price</th>
                            <th>Delivery Men</th>
                            <th>Booking Status</th>
                            <th>Update</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    {
                        booking.map(booked =>
                            <tbody key={booked._id}>
                                <tr>
                                    <th>{booked?.percelType}</th>
                                    <th> {booked?.bookingDate} </th>
                                    <th> {booked?.deliveryDate} </th>
                                    <th> {booked?.price} </th>
                                    <th> { } </th>
                                    <th> { } </th>
                                    <th>
                                        <Link to={`/dashboard/update/${booked._id}`}>
                                            <button className="btn btn-outline btn-primary btn-sm">Update</button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(booked._id)} className="btn btn-error">Delete</button>
                                    </th>
                                </tr>
                            </tbody>

                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default MyPercel;