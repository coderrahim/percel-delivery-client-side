import { useEffect, useState } from "react";
import DashboardTitle from "../../../../Components/DashboardTitle";
import Swal from "sweetalert2";


const MyDelivery = () => {
    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [])

    const handleMakeDelivery = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Continue!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/booking/status/${id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(booking)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    title: "Great!",
                                    text: "Status change to Deliver.",
                                    icon: "success"
                                });
                                const remaining = booking.filter(booking => booking._id !== id);
                                setBooking(remaining)
                            }
                        })
                }
            });
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your Booking has been Canceled!.",
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
            <DashboardTitle heading={"My "} subheading={"Delivery"} />

            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Booked User’s Name</th>
                            <th>Receivers Name</th>
                            <th>Booked User’s Phone</th>
                            <th>Requested Delivery </th>
                            <th>Approximate Delivery</th>
                            <th>Recievers phone</th>
                            <th>Receivers Address</th>
                            <th>View Location</th>
                            <th>Cancel</th>
                            <th>Deliver</th>
                        </tr>
                    </thead>
                    {
                        booking.map(booked =>
                            <tbody key={booked._id}>
                                <tr>
                                    <th>{booked?.name}</th>
                                    <th> {booked?.receverName} </th>
                                    <th> {booked?.phone} </th>
                                    <th> {booked?.bookingDate} </th>
                                    <th> {booked?.deliveryDate} </th>
                                    <th> {booked?.receverPhone} </th>
                                    <th> {booked?.deliveryAddress} </th>
                                    <th> <button className="btn btn-secondary btn-outline">View Loaction</button> </th>
                                    <th> <button onClick={() => handleDelete(booked._id)} className="btn btn-error btn-outline">X</button> </th>
                                    <th>
                                        {
                                            booked.status == 'delivered' ?
                                                <button onClick={() => handleMakeDelivery(booked?._id)} className="btn btn-primary btn-outline btn-sm">
                                                    Deliverd
                                                </button>
                                                :
                                                <button onClick={() => handleMakeDelivery(booked?._id)} className="btn btn-primary btn-sm">
                                                    Make Delivery
                                                </button>
                                        }
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

export default MyDelivery;