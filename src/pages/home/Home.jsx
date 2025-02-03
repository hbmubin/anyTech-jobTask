import Banner from "../../components/banner/banner";
import Contact from "../../components/contact/Contact";
import Bottom from "../../components/finance/Bottom";
import Finance from "../../components/finance/Finance";
import Partner from "../../components/partner/Partner";
import Philosophy from "../../components/philosophy/Philosophy";
import Technology from "../../components/technology/Technology";

const Home = () => {
    return (
        <main>
            <Banner />
            <Finance />
            <Bottom />
            <Philosophy />
            <div className="md:hidden"><Bottom /></div>
            <Technology />
            <div className="md:my-0 my-16"><Bottom /></div>
            <Partner />
            <Contact />
        </main>
    );
};

export default Home;