import "../Footer/cssFooter.css";

const Footer = () => {
    return (
        <div className="footer-df">
            <div className="footer-container">
                <div className="footer-follow">
                    <div className="ft-fl-logo">
                        <a href="#">
                            <img
                                className="ft-img"
                                src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png"
                                alt="Shopdunk"
                            />
                        </a>
                    </div>
                    <div className="ft-fl-about">
                        <p>
                            Năm 2020, ShopDunk trở thành đại lý ủy quyền của
                            Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu
                            chuẩn và Apple Mono Store nhằm mang đến trải nghiệm
                            tốt nhất về sản phẩm và dịch vụ của Apple cho người
                            dùng Việt Nam.
                        </p>
                    </div>
                    <div className="ft-fl-social">
                        <div className="ft-icon-social">
                            <a href="#">
                                <i className="fa-brands fa-facebook fa-2xl"></i>
                            </a>
                        </div>
                        <div className="ft-icon-social">
                            <a href="#">
                                <i className="fa-brands fa-tiktok fa-2xl"></i>
                            </a>
                        </div>
                        <div className="ft-icon-social">
                            <a href="#">
                                <i className="fa-brands fa-instagram fa-2xl"></i>
                            </a>
                        </div>
                        <div className="ft-icon-social">
                            <a href="#">
                                <i className="fa-brands fa-youtube fa-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-infomation">
                    <div className="ft-header">Thông tin</div>
                    <ul className="ft-list">
                        <li>
                            <a href="">Tin tức</a>
                        </li>
                        <li>
                            <a href="">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="">Check IMEI</a>
                        </li>
                        <li>
                            <a href="">Phương thức thanh toán</a>
                        </li>
                        <li>
                            <a href="">Bảo hành & sửa chữa</a>
                        </li>
                        <li>
                            <a href="">Đánh giá</a>
                        </li>
                        <li>
                            <a href="">Tuyển dụng</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-service">
                    <div className="ft-header">Chính sách</div>
                    <ul className="ft-list">
                        <li>
                            <a href="#">Thu cũ đổi mới</a>
                        </li>
                        <li>
                            <a href="#">Giao hàng</a>
                        </li>
                        <li>
                            <a href="#">Hủy giao hàng</a>
                        </li>
                        <li>
                            <a href="#">Bảo hành</a>
                        </li>
                        <li>
                            <a href="#">Đổi trả</a>
                        </li>
                        <li>
                            <a href="#">Giải quyết khiếu nại</a>
                        </li>
                        <li>
                            <a href="#">Bảo mật thông tin</a>
                        </li>
                        <li>
                            <a href="#">Trả góp</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-account">
                    <div className="ft-header">Địa chỉ & liên hệ</div>
                    <ul className="ft-list">
                        <li>
                            <a href="#">Tài khoản của tôi</a>
                        </li>
                        <li>
                            <a href="#">Đơn đặt hàng</a>
                        </li>
                        <li>
                            <a href="#">Hệ thống cửa hàng</a>
                        </li>
                        <li>
                            <a href="#">Tìm store trên Google Map</a>
                        </li>
                        <li>
                            <a href="#">
                                Mua hàng:{" "}
                                <span>
                                    <a id="ft-hot-line" href="">
                                        1900.6626
                                    </a>
                                </span>
                            </a>
                            <ul>
                                <li>
                                    Nhánh 1: Khu vực Hà Nội và các tỉnh phía Bắc
                                </li>
                                <li>
                                    Nhánh 2: Khu vực Tp Hồ Chí Minh và các tỉnh
                                    phía Nam{" "}
                                </li>
                                <li>Nhánh 3: Khiếu nại và góp ý</li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                Doanh nghiệp:{" "}
                                <span>
                                    <a id="ft-hot-line" href="">
                                        0822.668.688
                                    </a>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
