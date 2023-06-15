import Content from "../Components/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <Content tittleContent={"iPhone"} />
            <Footer />
        </>
    );
};

export default Home;
