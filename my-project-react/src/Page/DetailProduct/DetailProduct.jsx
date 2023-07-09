import RenderDetailProduct from "../ComponentPage/RenderDetailProduct/RenderRetailProduct";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import dataDef from "../../Mocks/apiDTGK.json";
import { useEffect } from "react";

const DetailProduct = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idProduct = searchParams.get("idproduct");
    const keyproducts = searchParams.get("keyproduct");

    const handleGetDataById = (idPr) => {
        let found = false;

        const filteredItems = dataDef[keyproducts].filter((item) => {
            if (found) {
                return false;
            }

            if (item.id === idPr) {
                // console.log("Match found");
                found = true;
                return true;
            } else if (item.pOptions) {
                const filteredItemSub = item.pOptions.filter((itemSub) => {
                    if (found) {
                        return false;
                    }
                    if (itemSub.id === idPr) {
                        found = true;
                        return true;
                    }
                });

                return filteredItemSub.length > 0;
            } else {
                // console.log("No match found");
                return false;
            }
        });

        if (filteredItems.length === 1) {
            return filteredItems[0];
        }

        return filteredItems;
    };

    const [dataProduct, setDataProduct] = useState(
        handleGetDataById(idProduct)
    );

    handleGetDataById(idProduct);

    return <RenderDetailProduct dataRender={dataProduct} />;
};

export default DetailProduct;
