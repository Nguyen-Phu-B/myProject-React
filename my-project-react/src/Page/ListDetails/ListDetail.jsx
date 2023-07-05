import { useLocation } from "react-router-dom";
import RenderProducts from "../ComponentPage/RenderProduct/RenderProducts";
import dataDef from "../../Mocks/apiDTGK.json";

const ListDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyproducts = searchParams.get("keyproduct");
    const keyproductSub = searchParams.get("keyproductsub");

    // console.log(keyproducts);
    // console.log(keyproductSub);

    return (
        <>
            {keyproductSub != null ? (
                <RenderProducts
                    listData={dataDef[keyproducts].filter((item) => {
                        if (item.brand === keyproductSub) {
                            return item;
                        }
                    })}
                    title={keyproducts}
                    keyRender="list"
                />
            ) : (
                <RenderProducts
                    listData={dataDef[keyproducts]}
                    title={keyproducts}
                    keyRender="list"
                />
            )}
        </>
    );
};

export default ListDetails;
