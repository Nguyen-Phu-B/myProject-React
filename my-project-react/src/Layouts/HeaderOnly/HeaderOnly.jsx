import Header from "../ComponentLayout/Header/Header";

const HeaderOnly = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default HeaderOnly;
