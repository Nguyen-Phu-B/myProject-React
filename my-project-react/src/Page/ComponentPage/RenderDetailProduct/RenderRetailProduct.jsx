import "./RenderDetailProduct.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const RenderDetailProduct = ({ dataRender }) => {
    const [valueInput, setValueInput] = useState("");
    const [dataDetail, setDataDetail] = useState({});

    const onChangeInput = (e) => {
        setValueInput(e.target.value);
        setDataDetail(dataRender.pOptions[e.target.value]);
    };

    const handleGetImage = (prValue) => {
        const matchedOption = dataRender.pOptions[prValue];
        if (matchedOption) {
            return matchedOption.images[0];
        }
        return "";
    };

    // useEffect(() => {}, [valueInput]);
    useEffect(() => {
        console.log(dataDetail);
    }, [dataDetail]);

    return (
        <>
            <div className="content-product">
                <div className="product-details-page">
                    <div className="page-body">
                        <div className="gallery">
                            <div className="picture">
                                <img
                                    src={
                                        handleGetImage(valueInput) ||
                                        dataRender.productPhoto
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="overview">
                            <div className="wrapper-info">
                                <div className="product-name">
                                    {dataRender.name +
                                        " " +
                                        (dataRender.pOptions[valueInput]
                                            ?.name || "")}
                                </div>
                                <div className="prices">
                                    <div className="price-actual">
                                        {dataRender.retailPrice.toLocaleString()}
                                    </div>
                                    <div className="price-old">
                                        {dataRender.price.toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            <div className="attributes">
                                <div className="product-attribute">
                                    <div className="product-attribute-label">
                                        Màu sắc
                                    </div>
                                    <div className="product-attribute-input">
                                        {dataRender?.pOptions.map(
                                            (item, index) => {
                                                return (
                                                    <label
                                                        className={
                                                            "attribute-color-" +
                                                            item?.name
                                                        }
                                                        key={item.id}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="color_mac"
                                                            value={index}
                                                            title={item.name}
                                                            onChange={
                                                                onChangeInput
                                                            }
                                                        />
                                                        <div></div>
                                                    </label>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="add-cart">
                                <Link to="/" className="add-to-cart-panel">
                                    MUA NGAY
                                </Link>
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

export default RenderDetailProduct;
