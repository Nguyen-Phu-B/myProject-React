const RenderProduct = ({ item, itemSub, classBox = "" }) => {
    return (
        <div className={classBox + " box-product"}>
            <div className="box-img">
                <a href={"?" + (itemSub?.id || item?.id) + "/" + item?.brand}>
                    <img
                        src={itemSub?.images[0] || item.productPhoto}
                        alt={""}
                    />
                </a>
            </div>
            <div className="box-title">
                <a href="" title={item.name + " " + itemSub?.name}>
                    {item.name + " " + itemSub?.name}
                </a>
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
                <a className="box-add-cart" href="">
                    <div className="box-add-btn">Add to cart</div>
                    <div className="box-icon">
                        <i className="fa-solid fa-cart-arrow-down fa-xl"></i>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default RenderProduct;
