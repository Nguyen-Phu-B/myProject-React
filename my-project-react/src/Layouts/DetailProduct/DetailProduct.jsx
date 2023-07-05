import Footer from "../ComponentLayout/Footer/Footer";
import Header from "../ComponentLayout/Header/Header";

const DetailProduct = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default DetailProduct;
