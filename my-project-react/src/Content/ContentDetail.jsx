import { useEffect, useState } from "react";
import dataProductDf from "../Mocks/apiDTGK.json";
import "./detailpage.css";

const ContentDetail = ({ prUrl }) => {
    const [dataProduct, setDataProduct] = useState(prUrl);
    const [dataList, setDataList] = useState(dataProductDf);
    const [product, setProduct] = useState([]);

    let keyData = dataProduct.split("/")[1];
    let idProduct = dataProduct.split("?")[0].split("/")[0];

    useEffect(() => {
        setProduct(handleGetListData(keyData));
    }, []);

    const handleGetListData = (prKeyData) => {
        let listData =
            prKeyData == "iphone"
                ? dataList.iphone
                : prKeyData == "ipad"
                ? dataList.ipad
                : prKeyData == "apw"
                ? dataList.apw
                : prKeyData == "mac"
                ? dataList.mac
                : prKeyData == "phukien"
                ? dataList.phukien
                : "";

        return listData;
    };

    console.log("id", idProduct);

    let productDetail;
    if (keyData == "mac") {
        productDetail = product.find((obj) => {
            return obj.id == idProduct;
        });
    } else {
        productDetail = product.find((obj) => {
            return obj.pOptions.find((objSub) => objSub.id == idProduct);
        });
    }

    console.log("data", productDetail);

    return keyData == "mac" ? (
        <>
            <div className="content-product">
                <div className="product-details-page">
                    <div className="page-body">
                        <div className="gallery">
                            <div className="picture">
                                <img src={productDetail?.productPhoto} alt="" />
                            </div>
                        </div>
                        <div className="overview">
                            <div className="wrapper-info">
                                <div className="product-name">
                                    {productDetail?.name}
                                </div>
                                <div className="prices">
                                    <div className="price-actual">
                                        {productDetail?.retailPrice.toLocaleString()}
                                    </div>
                                    <div className="price-old">
                                        {productDetail?.price.toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            <div className="attributes">
                                <div className="product-attribute">
                                    <div className="product-attribute-label">
                                        Màu sắc
                                    </div>
                                    <div className="product-attribute-input"></div>
                                </div>
                            </div>
                            <div className="add-cart">
                                <a href="" className="add-to-cart-panel">
                                    MUA NGAY
                                </a>
                            </div>
                            <div className="product-policy">
                                <div className="prd-policy">
                                    <ul className="fa-ul">
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            Hư gì đổi nấy 12 tháng
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            Bảo hành chính hãng 1 năm
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            Giao hàng nhanh toàn quốc
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            Gọi đặt mua 1900 6626 (7:30 - 22:00)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="content-product">
                <div className="product-details-page">
                    <div className="page-body">
                        <div className="gallery">
                            <div className="picture">
                                <img src={productDetail?.productPhoto} alt="" />
                            </div>
                        </div>
                        <div className="overview">
                            <div className="wrapper-info">
                                <div className="product-name">
                                    {productDetail?.name}
                                </div>
                                <div className="prices">
                                    <div className="price-actual">
                                        {productDetail?.retailPrice.toLocaleString()}
                                    </div>
                                    <div className="price-old">
                                        {productDetail?.price.toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            <div className="attributes">
                                <div className="product-attribute">
                                    <div className="product-attribute-label">
                                        Màu sắc
                                    </div>
                                    <div className="product-attribute-input">
                                        {productDetail?.pOptions.map(
                                            (item, index) => {
                                                return item.name == "Vàng" ? (
                                                    <label class="attribute-color-gold">
                                                        <input
                                                            type="radio"
                                                            name="color_mac"
                                                            value={index}
                                                            title={item.name}
                                                            checked
                                                        />
                                                        <div></div>
                                                    </label>
                                                ) : (
                                                    ""
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="add-cart">
                                <a href="" className="add-to-cart-panel">
                                    MUA NGAY
                                </a>
                            </div>
                            <div className="product-policy">
                                <div className="prd-policy">
                                    <ul className="fa-ul">
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            Hư gì đổi nấy 12 tháng
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            Bảo hành chính hãng 1 năm
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            Giao hàng nhanh toàn quốc
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            Gọi đặt mua 1900 6626 (7:30 - 22:00)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentDetail;
