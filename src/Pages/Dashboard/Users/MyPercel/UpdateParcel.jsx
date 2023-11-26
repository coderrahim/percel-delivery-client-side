import { useLoaderData } from "react-router-dom";
import DashboardTitle from "../../../../Components/DashboardTitle";
import useUser from "../../../../hooks/useUser";
import { useState } from "react";
import Swal from "sweetalert2";


const UpdateParcel = () => {
    const bookingData = useLoaderData()
    const user = useUser()
    const [kg, setKg] = useState(0)

    const {_id, name, email, phone, percelType, parcelWeight, receverName, receverPhone, deliveryDate, deliveryAddress, deliveryAddressLatitude, deliveryAddressLongitude } = bookingData;

    const calculatePrice = () => {
        const price1 = 50;
        const price2 = 100;
        const priceMoreThen2 = 150;

        const kgValue = parseFloat(kg);

        let totalPrice;
        if (kgValue === 1) {
            totalPrice = price1;
        } else if (kgValue === 2) {
            totalPrice = price2;
        } else if (kgValue > 2) {
            totalPrice = priceMoreThen2;
        } else {
            totalPrice = 0;
        }
        return totalPrice;
    }

    const handleUpdatePercel = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const percelType = form.percelType.value;
        const parcelWeight = kg;
        const receverName = form.receverName.value;
        const receverPhone = form.receverPhone.value;
        const deliveryDate = form.deliveryDate.value;
        const deliveryAddress = form.deliveryAddress.value;
        const deliveryAddressLatitude = form.deliveryAddressLatitude.value;
        const deliveryAddressLongitude = form.deliveryAddressLongitude.value;
        const price = form.price.value;

        const bookingData = { name, email, phone, percelType, parcelWeight, receverName, receverPhone, deliveryDate, deliveryAddress, deliveryAddressLatitude, deliveryAddressLongitude, price }

        fetch(`http://localhost:5000/booking/${_id}`, {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(bookingData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Good Job!',
                    `Booking Update Successfull`,
                    'success'
                )

            }
        })
    }

    return (
        <div>
            <div className="hero-content flex-col ">
                <DashboardTitle heading={"Update "} subheading={"Parcel"} />
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

                    <form onSubmit={handleUpdatePercel} className="grid md:grid-cols-2 mx-auto gap-8 py-12 px-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name="phone" defaultValue={phone} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Parcel Type</span>
                            </label>
                            <input type="text" name="percelType" defaultValue={percelType} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Parcel Weight (kg) </span>
                            </label>
                            <input type="number" name="parcelWeight" defaultValue={parcelWeight} className="input input-bordered" required
                                min={0}
                                onChange={(e) => setKg(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Receiver’s Name</span>
                            </label>
                            <input type="text" name="receverName" defaultValue={receverName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Receivers Phone Number</span>
                            </label>
                            <input type="number" name="receverPhone" defaultValue={receverPhone} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Parcel Delivery Address</span>
                            </label>
                            <input type="text" name="deliveryAddress" defaultValue={deliveryAddress} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Requested Delivery Date</span>
                            </label>
                            <input type="date" name="deliveryDate" defaultValue={deliveryDate} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivery Address Latitude</span>
                            </label>
                            <input type="text" name="deliveryAddressLatitude" defaultValue={deliveryAddressLatitude}className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivery Address longitude</span>
                            </label>
                            <input type="text" name="deliveryAddressLongitude" defaultValue={deliveryAddressLongitude} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price: </span>
                            </label>
                            <input type="number" name="price" value={`${calculatePrice()}`} className="input input-bordered" required  readOnly
                            />
                        </div>

                        <div className="form-control mt-6 col-span-2">
                            <button className="btn btn-primary text-orange-600 text-xl">Update Now</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateParcel;