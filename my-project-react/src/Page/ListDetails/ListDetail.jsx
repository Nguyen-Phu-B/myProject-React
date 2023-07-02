import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RenderProducts from "../ComponentPage/RenderProduct/RenderProducts";
import dataDef from "../../Mocks/apiDTGK.json";

const ListDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyproducts = searchParams.get("keyproduct");
    const keyproductSub = searchParams.get("keyproductsub");

    console.log(keyproducts);
    console.log(keyproductSub);
    // console.log("sss", dataDef[keyproducts]["pOptions"]);

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

    // if (keyproducts == "iphone") {
    //     return (
    //         <>
    //             <RenderProducts
    //                 listData={dataDef.iphone}
    //                 title={"iphone"}
    //                 keyRender="list"
    //             />
    //         </>
    //     );
    // }
    // if (keyproducts == "ipad") {
    //     return (
    //         <>
    //             <RenderProducts
    //                 listData={dataDef.ipad}
    //                 title={"ipad"}
    //                 keyRender="list"
    //             />
    //         </>
    //     );
    // }
    // if (keyproducts == "macbook") {
    //     return (
    //         <>
    //             <RenderProducts
    //                 listData={dataDef.mac}
    //                 title={"macbook"}
    //                 keyRender="list"
    //             />
    //         </>
    //     );
    // }
    // if (keyproducts == "applewatch") {
    //     return (
    //         <>
    //             <RenderProducts
    //                 listData={dataDef.apw}
    //                 title={"apple watch"}
    //                 keyRender="list"
    //             />
    //         </>
    //     );
    // }
    // if (keyproducts == "phukien") {
    //     return (
    //         <>
    //             <RenderProducts
    //                 listData={dataDef.phukien}
    //                 title={"phụ kiện"}
    //                 keyRender="list"
    //             />
    //         </>
    //     );
    // }
};

export default ListDetails;
