import Footer from "../../Components/Footer";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Statistics from "./Features/Statistics";
import Team from "./Team/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Statistics></Statistics>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;