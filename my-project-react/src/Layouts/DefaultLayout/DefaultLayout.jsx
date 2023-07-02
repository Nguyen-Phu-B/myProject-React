import Footer from "../ComponentLayout/Footer/Footer";
import Header from "../ComponentLayout/Header/Header";
import Slider from "../ComponentLayout/Slide/Slider";

const DefaultLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <Slider />
            <>{children}</>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
