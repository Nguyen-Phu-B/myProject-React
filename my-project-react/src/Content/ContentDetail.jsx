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
                <div class="product-details-page">
                    <div class="page-body">
                        <div class="gallery">
                            <div class="picture">
                                <img src={productDetail?.productPhoto} alt="" />
                            </div>
                        </div>
                        <div class="overview">
                            <div class="wrapper-info">
                                <div class="product-name">
                                    {productDetail?.name}
                                </div>
                                <div class="prices">
                                    <div class="price-actual">
                                        {productDetail?.retailPrice.toLocaleString()}
                                    </div>
                                    <div class="price-old">
                                        {productDetail?.price.toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            <div class="attributes">
                                <div class="product-attribute">
                                    <div class="product-attribute-label">
                                        Màu sắc
                                    </div>
                                    <div class="product-attribute-input"></div>
                                </div>
                            </div>
                            <div class="add-cart">
                                <a href="" class="add-to-cart-panel">
                                    MUA NGAY
                                </a>
                            </div>
                            <div class="product-policy">
                                <div class="prd-policy">
                                    <ul class="fa-ul">
                                        <li>
                                            <span class="fa-li">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                                            Hư gì đổi nấy 12 tháng
                                        </li>
                                        <li>
                                            <span class="fa-li">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                                            Bảo hành chính hãng 1 năm
                                        </li>
                                        <li>
                                            <span class="fa-li">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                                            Giao hàng nhanh toàn quốc
                                        </li>
                                        <li>
                                            <span class="fa-li">
                                                <i class="fa-solid fa-circle-check"></i>
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
                <div class="product-details-page">
                    <div class="page-body">
                        <div class="gallery">
                            <div class="picture">
                                <img src={productDetail?.productPhoto} alt="" />
                            </div>
                        </div>
                        <div class="overview">
                            <div class="wrapper-info">
                                <div class="product-name">
                                    {productDetail?.name}
                                </div>
                                <div class="prices">
                                    <div class="price-actual">
                                        {productDetail?.retailPrice.toLocaleString()}
                                    </div>
                                    <div class="price-old">
                                        {productDetail?.price.toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            <div class="attributes">
                                <div class="product-attribute">
                                    <div class="product-attribute-label">
                                        Màu sắc
                                    </div>
                                    <div class="product-attribute-input"></div>
                                </div>
                            </div>
                            <div class="add-cart">
                                <a href="" class="add-to-cart-panel">
                                    MUA NGAY
                                </a>
                            </div>
                            <div class="product-policy">
                                <div class="prd-policy">
                                    <ul class="fa-ul">
                                        <li>
                                            <span class="fa-li">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                                            Hư gì đổi nấy 12 tháng
                                        </li>
                                        <li>
                                            <span class="fa-li">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                                            Bảo hành chính hãng 1 năm
                                        </li>
                                        <li>
                                            <span class="fa-li">
                                                <i class="fa-solid fa-circle-check"></i>
                                            </span>
                                            Giao hàng nhanh toàn quốc
                                        </li>
                                        <li>
                                            <span class="fa-li">
                                                <i class="fa-solid fa-circle-check"></i>
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
