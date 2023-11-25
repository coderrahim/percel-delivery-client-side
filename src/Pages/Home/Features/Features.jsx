import { MdOutlineSecurity } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import SectionTitle from "../../../Components/SectionTitle";


const Features = () => {
    return (
        <div>
            <SectionTitle Heading="Our" Subheading="Feature" />

            <div className="flex justify-center flex-wrap gap-6 mx-auto">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border ">
                    <div className="p-6">
                        <span className="text-5xl"><MdOutlineSecurity /></span>
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Secure Parcel Handling
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Your parcels are our top priority. We ensure the utmost safety and security during transit, utilizing advanced tracking systems and secure packaging to guarantee the safe delivery of your items. Experience peace of mind knowing your packages are in reliable hands.
                        </p>
                    </div>
                </div>

                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border ">
                    <div className="p-6">
                        <span className="text-5xl"><IoSpeedometerOutline /></span>
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Fast Delivery
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Need it in a hurry? Our express delivery service ensures your parcels reach their destination in record time. Benefit from our streamlined logistics and efficient route optimization, providing you with the fastest delivery service possible. Say goodbye to long waits.
                        </p>
                    </div>
                </div>

                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border ">
                    <div className="p-6">
                        <span className="text-5xl"><CiDeliveryTruck /></span>
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Sustainable Shipping Solutions
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            We care about the environment. Choose our eco-friendly shipping option to reduce your carbon footprint. We use environmentally conscious packaging materials and employ green practices in our delivery process. Join us in creating a sustainable future, one parcel at a time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;