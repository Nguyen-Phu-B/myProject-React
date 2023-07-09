import dataDef from "../../Mocks/apiDTGK.json";
import RenderProducts from "../ComponentPage/RenderProduct/RenderProducts";

const Home = ({}) => {
    return (
        <>
            <RenderProducts title={"Iphone"} listData={dataDef.iphone} />
            <RenderProducts title={"Ipad"} listData={dataDef.ipad} />
            <RenderProducts title={""} listData={dataDef.macbook} />
            <RenderProducts
                title={"Apple Watch"}
                listData={dataDef.applewatch}
            />
            <RenderProducts title={"Phụ Kiện"} listData={dataDef.phukien} />
        </>
    );
};

export default Home;
