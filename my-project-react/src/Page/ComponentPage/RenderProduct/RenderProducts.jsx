import { Link, useNavigate } from "react-router-dom";
import "./RenderProducts.scss";

const RenderProducts = ({ title, listData, keyRender }) => {
    // console.log(title);
    // console.log(listData);

    window.scrollTo(0, 0);

    const navigate = useNavigate();

    const handleClickTitle = (e) => {
        e.preventDefault();

        const newTitle = title
            .toLowerCase()
            .replace(/\s/g, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const newUrl = `/list?keyproduct=${encodeURIComponent(newTitle)}`;

        navigate(newUrl);
    };

    const handleClickCard = (e, idpr) => {
        e.preventDefault();
        const newTitle = title
            .toLowerCase()
            .replace(/\s/g, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        const newUrl = `/detail?keyproduct=${encodeURIComponent(
            newTitle
        )}&idproduct=${idpr}`;
        navigate(newUrl);
    };

    return (
        <div className="content">
            <div className="box-header">
                <Link to="" onClick={handleClickTitle}>
                    <h2>{title}</h2>
                </Link>
            </div>

            {keyRender === "list" ? (
                <div className={"box-booth box-wrap"}>
                    {listData?.map((item) => {
                        return item.pOptions.map((itemSub) => {
                            return (
                                <div className="box-product " key={itemSub.id}>
                                    <div className="box-img">
                                        <Link
                                            to=""
                                            onClick={(e) =>
                                                handleClickCard(e, itemSub.id)
                                            }
                                        >
                                            <img
                                                src={itemSub?.images[0]}
                                                alt={""}
                                            />
                                        </Link>
                                    </div>
                                    <div className="box-title">
                                        <Link
                                            to=""
                                            onClick={(e) =>
                                                handleClickCard(e, itemSub.id)
                                            }
                                            title={
                                                item.name + " " + itemSub.name
                                            }
                                        >
                                            {item.name + " " + itemSub.name}
                                        </Link>
                                    </div>
                                    <div className="box-price">
                                        <div className="price-actual number">
                                            {itemSub.retailPrice.toLocaleString()}
                                        </div>
                                        <div className="price-old number">
                                            {item.price.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="btn-add-cart">
                                        <Link
                                            className="box-add-cart"
                                            to="/cart"
                                        >
                                            <div className="box-add-btn">
                                                Add to cart
                                            </div>
                                            <div className="box-icon">
                                                <i className="fa-solid fa-cart-arrow-down fa-xl"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            );
                        });
                    })}
                </div>
            ) : (
                <div className={"box-booth"}>
                    {listData?.map((item) => {
                        return (
                            <div className="box-product " key={item.id}>
                                <div className="box-img">
                                    <Link
                                        to=""
                                        onClick={(e) =>
                                            handleClickCard(e, item.id)
                                        }
                                    >
                                        <img
                                            src={item?.productPhoto}
                                            alt={""}
                                        />
                                    </Link>
                                </div>
                                <div className="box-title">
                                    <Link
                                        to=""
                                        onClick={(e) =>
                                            handleClickCard(e, item.id)
                                        }
                                        title={item.name}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                                <div className="box-price">
                                    <div className="price-actual number">
                                        {item.retailPrice.toLocaleString()}
                                    </div>
                                    <div className="price-old number">
                                        {item.price.toLocaleString()}
                                    </div>
                                </div>
                                <div className="btn-add-cart">
                                    <Link
                                        className="box-add-cart"
                                        to=""
                                        onClick={(e) =>
                                            handleClickCard(e, item.id)
                                        }
                                    >
                                        <div className="box-add-btn">
                                            View More
                                        </div>
                                        <div className="box-icon">
                                            <i className="fa-solid fa-angles-right fa-xl"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default RenderProducts;
