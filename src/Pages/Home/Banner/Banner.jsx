
const Banner = () => {
    return (
        <div className="hero h-[80vh] my-10 rounded-lg" style={{ backgroundImage: 'url(https://www.heritageexpress.net/images/service-detail/express.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-md"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-orange-400">Reliable Service Every Time</h1>
                    <p className="mb-5">Nullam ac aliquam purus. Donec tempor, metus sed porttitor posuere, elit sapien rutrum elit, eget tincidunt nisl tortor nec metus. Donec tempor rhoncus convallis.</p>

                    <div className="join">
                        <input className="input input-bordered join-item" placeholder="input test" />
                        <button className="btn join-item rounded-r-full">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;