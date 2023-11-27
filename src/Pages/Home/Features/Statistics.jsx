import CountUp from 'react-countup';

const Statistics = () => {
    return (
        <div className='flex justify-center gap-5 my-10 flex-wrap bg-base-200 rounded-md py-10'>
            <div className="card w-80 shadow-xl border m-4">
                <div className="card-body items-center text-center">
                    <h2 className="text-3xl mb-4 font-medium"> Parcel Booked</h2>
                    <h2 className="text-5xl font-bold text-orange-400">
                    <CountUp start={0} end={100} duration={5} />
                    </h2>
                </div>
            </div>
            <div className="card w-80 shadow-xl border m-4">
                <div className="card-body items-center text-center">
                    <h2 className="text-3xl mb-4 font-medium">Parcel Delivered</h2>
                    <h2 className="text-5xl font-bold text-orange-400">
                    <CountUp start={0} end={100} duration={5} />
                    </h2>
                </div>
            </div>
            <div className="card w-80 shadow-xl border m-4">
                <div className="card-body items-center text-center">
                    <h2 className="text-3xl mb-4 font-medium">People App Used</h2>
                    <h2 className="text-5xl font-bold text-orange-400">
                    <CountUp start={0} end={100} duration={5} />
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Statistics;