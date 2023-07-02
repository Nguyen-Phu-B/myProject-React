import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer-df">
            <div className="footer-container">
                <div className="footer-follow">
                    <div className="ft-fl-logo">
                        <Link to="#">
                            <img
                                className="ft-img"
                                src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png"
                                alt="Shopdunk"
                            />
                        </Link>
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
                            <Link to="#">
                                <i className="fa-brands fa-facebook fa-2xl"></i>
                            </Link>
                        </div>
                        <div className="ft-icon-social">
                            <Link to="#">
                                <i className="fa-brands fa-tiktok fa-2xl"></i>
                            </Link>
                        </div>
                        <div className="ft-icon-social">
                            <Link to="#">
                                <i className="fa-brands fa-instagram fa-2xl"></i>
                            </Link>
                        </div>
                        <div className="ft-icon-social">
                            <Link to="#">
                                <i className="fa-brands fa-youtube fa-2xl"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-infomation">
                    <div className="ft-header">Thông tin</div>
                    <ul className="ft-list">
                        <li>
                            <Link to="">Tin tức</Link>
                        </li>
                        <li>
                            <Link to="">Giới thiệu</Link>
                        </li>
                        <li>
                            <Link to="">Check IMEI</Link>
                        </li>
                        <li>
                            <Link to="">Phương thức thanh toán</Link>
                        </li>
                        <li>
                            <Link to="">Bảo hành & sửa chữa</Link>
                        </li>
                        <li>
                            <Link to="">Đánh giá</Link>
                        </li>
                        <li>
                            <Link to="">Tuyển dụng</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-service">
                    <div className="ft-header">Chính sách</div>
                    <ul className="ft-list">
                        <li>
                            <Link to="#">Thu cũ đổi mới</Link>
                        </li>
                        <li>
                            <Link to="#">Giao hàng</Link>
                        </li>
                        <li>
                            <Link to="#">Hủy giao hàng</Link>
                        </li>
                        <li>
                            <Link to="#">Bảo hành</Link>
                        </li>
                        <li>
                            <Link to="#">Đổi trả</Link>
                        </li>
                        <li>
                            <Link to="#">Giải quyết khiếu nại</Link>
                        </li>
                        <li>
                            <Link to="#">Bảo mật thông tin</Link>
                        </li>
                        <li>
                            <Link to="#">Trả góp</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-account">
                    <div className="ft-header">Địa chỉ & liên hệ</div>
                    <ul className="ft-list">
                        <li>
                            <Link to="#">Tài khoản của tôi</Link>
                        </li>
                        <li>
                            <Link to="#">Đơn đặt hàng</Link>
                        </li>
                        <li>
                            <Link to="#">Hệ thống cửa hàng</Link>
                        </li>
                        <li>
                            <Link to="#">Tìm store trên Google Map</Link>
                        </li>
                        <li>
                            <Link to="#">
                                Mua hàng:{" "}
                                <span>
                                    <Link id="ft-hot-line" href="">
                                        1900.6626
                                    </Link>
                                </span>
                            </Link>
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
                            <Link to="#">
                                Doanh nghiệp:{" "}
                                <span>
                                    <Link id="ft-hot-line" href="">
                                        0822.668.688
                                    </Link>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
