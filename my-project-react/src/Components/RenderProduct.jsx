const RenderProduct = ({ item, itemSub, classBox = "" }) => {
    return (
        <div className={classBox + " box-product"}>
            <div className="box-img">
                <a href="">
                    <img src={item.productPhoto || item.promoPhoto} alt={""} />
                </a>
            </div>
            <div className="box-title">
                <a href="" title={""}>
                    {item.name + "" + itemSub?.name}
                </a>
            </div>
            <div className="box-price">
                <div className="price-actual number">
                    {item.price.toLocaleString()}
                </div>
                <div className="price-old number">
                    {item.retailPrice.toLocaleString()}
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
