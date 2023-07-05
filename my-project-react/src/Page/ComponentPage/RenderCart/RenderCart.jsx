import "./RenderCart.scss";

const RenderCart = () => {
    return (
        <div className="bag-content">
            <div className="bag-product">
                <div className="tbl-details">
                    <div className="tbl-wrapper">
                        <table className="tbl-cart">
                            <thead>
                                <tr>
                                    <th className="align-left img-product">
                                        Hình ảnh
                                    </th>
                                    <th className="align-left product">
                                        Tên sản phẩm
                                    </th>
                                    <th className="align-left price-product">
                                        Giá bán
                                    </th>
                                    <th className="align-left count-product">
                                        Số lượng
                                    </th>
                                    <th className="align-left edit-tbl"></th>
                                </tr>
                            </thead>
                            <tbody id="tbody_tble"></tbody>
                        </table>

                        <div className="common-btn">
                            <a className="btn-sbl" href="/">
                                Tiếp tục mua sắm
                            </a>
                        </div>
                    </div>
                </div>
                <h2 className="h-title">Thông tin thanh toán</h2>
                <div className="form-user-info">
                    <form className="form-wrapper">
                        <input
                            className="inp-fl"
                            type="text"
                            name=""
                            id="inp_form_user"
                            placeholder="Name"
                        />
                        <div className="form-row m-20">
                            <input
                                className="inp-half"
                                type="text"
                                name=""
                                id="inp_form_phone"
                                placeholder="Phone Number"
                            />
                            <input
                                className="inp-half"
                                type="text"
                                name=""
                                id="inp_form_email"
                                placeholder="Email"
                            />
                        </div>
                        <b>Hình thức nhận hàng</b>
                        <div className="m-20">
                            <input
                                className="mr-10"
                                type="radio"
                                name="way_rec"
                                id="rad_store"
                                value="store"
                            />
                            <label className="mr-10" for="rad_store">
                                Nhận tại cửa hàng
                            </label>
                            <input
                                className="mr-10"
                                type="radio"
                                name="way_rec"
                                id="rad_home"
                                value="home"
                            />
                            <label className="mr-10" for="rad_home">
                                Nhận tại nhà
                            </label>
                        </div>
                        <b>Địa chỉ nhận hàng</b>
                        <input
                            className="inp-fl m-20"
                            type="text"
                            name=""
                            id="address_rec"
                            placeholder="Exp: 123/12, Đường Đương Huyền, Phường Phương Huyền, Quận 1, Tp Hồ Chí Minh"
                        />
                    </form>
                </div>
            </div>

            <div className="calc">
                <div className="calc-wrapper">
                    <div className="voucher">
                        <input
                            className="inp-voucher"
                            type="text"
                            name=""
                            id=""
                            placeholder="Mã giảm giá"
                        />
                        <button className="btn-voucher">Áp Dụng</button>
                    </div>

                    <div className="calc-price">
                        <div className="sub-calc">
                            <p>Tổng phụ:</p>
                            <b id="sub_sum">0</b>
                        </div>
                        <div className="sub-calc">
                            <p>Giảm giá:</p>
                            <b id="dis_sum">0</b>
                        </div>
                        <div className="calc-sum">
                            <p>Tổng cộng:</p>
                            <b id="sum_price">0</b>
                        </div>
                    </div>

                    <div className="calc-submit">
                        <div className="checkbox-rule">
                            <input
                                className="check-rule"
                                type="checkbox"
                                name=""
                                id="check-rule"
                            />
                            <label for="check-rule"></label>
                            <span className="check-span">
                                Tôi đã đọc và đồng ý với{" "}
                                <a href="https://shopdunk.com/chinh-sach-doi-tra">
                                    điều khoản và điều kiện
                                </a>{" "}
                                của website.
                            </span>
                        </div>
                        <button className="btn-buy-submit">
                            Tiến hành đặt hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RenderCart;
