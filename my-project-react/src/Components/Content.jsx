import { useState, useEffect } from "react";
import "../CSS/content.css";
import useHookGetProduct from "../Hooks/getProduct";

const Content = ({ tittleContent }) => {
    const { listIphone, listAppleWatch, listIpad, listPhuKien, listMac } =
        useHookGetProduct();

    return (
        <>
            <div className="box-header">
                <a href={"allProduct.html?" + tittleContent}>
                    <h2>{tittleContent}</h2>
                </a>
            </div>
            <div className="box-booth">
                {listIphone.map((item, indexItem) => {
                    console.log("item", item);
                    // return (
                    //     <div className="box-product">
                    //         <div
                    //             className="box-img"
                    //             // data-product_id="${idProduct}"
                    //             // data-product_name="${nameProduct}"
                    //         >
                    //             <a href="">
                    //                 <img
                    //                     src={
                    //                         item.productPhoto || item.promoPhoto
                    //                     }
                    //                     alt={""}
                    //                 />
                    //             </a>
                    //         </div>
                    //         <div className="box-title">
                    //             <a href="" title={""}>
                    //                 {item.name}
                    //             </a>
                    //         </div>
                    //         <div className="box-price">
                    //             <div className="price-actual">{item.price}</div>
                    //             <div className="price-old">
                    //                 {item.retailPrice}
                    //             </div>
                    //         </div>
                    //         <div className="btn-add-cart">
                    //             <a
                    //                 className="box-add-cart"
                    //                 href=""
                    //                 // data-product-id="${idProduct}"
                    //                 // data-product-name="${title}"
                    //                 // data-product-color="${colorTitl}"
                    //             >
                    //                 <div className="box-add-btn">
                    //                     Add to cart
                    //                 </div>
                    //                 <div className="box-icon">
                    //                     <i className="fa-solid fa-cart-arrow-down fa-xl"></i>
                    //                 </div>
                    //             </a>
                    //         </div>
                    //     </div>
                    // );

                    item.pOptions.map((itemSub, indexSub) => {
                        console.log("sub", itemSub);
                        return (
                            <div className="box-product">
                                <div
                                    className="box-img"
                                    // data-product_id="${idProduct}"
                                    // data-product_name="${nameProduct}"
                                >
                                    <a href="">
                                        <img
                                            src={
                                                item.productPhoto ||
                                                item.promoPhoto
                                            }
                                            alt={""}
                                        />
                                    </a>
                                </div>
                                <div className="box-title">
                                    <a href="" title={""}>
                                        {item.name + " " + itemSub.name}
                                    </a>
                                </div>
                                <div className="box-price">
                                    <div className="price-actual">
                                        {item.price}
                                    </div>
                                    <div className="price-old">
                                        {item.retailPrice}
                                    </div>
                                </div>
                                <div className="btn-add-cart">
                                    <a
                                        className="box-add-cart"
                                        href=""
                                        // data-product-id="${idProduct}"
                                        // data-product-name="${title}"
                                        // data-product-color="${colorTitl}"
                                    >
                                        <div className="box-add-btn">
                                            Add to cart
                                        </div>
                                        <div className="box-icon">
                                            <i className="fa-solid fa-cart-arrow-down fa-xl"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        );
                    });
                })}
            </div>
        </>
    );
};

export default Content;
