import Content from "../Components/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <Content tittleContent={"iPhone"} dataName={"iphone"} />
            <Content tittleContent={"iPad"} dataName={"ipad"} />
            <Content tittleContent={"MacBook"} dataName={"mac"} />
            <Content tittleContent={"Apple Watch"} dataName={"apw"} />
            <Content tittleContent={"Phụ Kiện"} dataName={"phukien"} />
            <Footer />
        </>
    );
};

export default Home;
