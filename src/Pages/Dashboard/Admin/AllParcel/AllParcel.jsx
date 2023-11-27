import { useEffect, useState } from "react";
import DashboardTitle from "../../../../Components/DashboardTitle";

const AllParcel = () => {
    const [allParcel, setAllParcel] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setAllParcel(data))
    }, [])

    

    return (
        <div>
            <DashboardTitle heading={"All "} subheading={"Parcel"} />
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>User’s Photo</th>
                            <th>User’s Name</th>
                            <th>Booking Date</th>
                            <th>Delivery Date</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    {
                        allParcel.map(parcel =>
                            <tbody key={parcel._id}>
                                <tr>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={parcel?.userImage} />
                                        </div>
                                    </div>
                                    <th> {parcel?.receverName} </th>
                                    <th> {parcel?.bookingDate} </th>
                                    <th> {parcel?.deliveryDate} </th>
                                    <th> {parcel?.price} </th>
                                    <th> {parcel?.status} </th>
                                    <th> Set D. Man </th>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default AllParcel;