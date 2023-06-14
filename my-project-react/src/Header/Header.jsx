// import React from "react";
import NavMenu from "../Components/NavMenu";
import "../Header/cssHeader.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <a href="index.html">
                        <img
                            className="header-img"
                            src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png"
                            alt=""
                        />
                    </a>
                </div>

                <div className="header-menu">
                    <NavMenu />

                    {/* <ul className="top-menu">
                        <li>
                            <a href="allProduct.html?iphone">iPhone</a>
                            <ul className="subnav">
                                <li>
                                    <a href="allProduct.html?iphone_14">iPhone 14 Series</a>
                                </li>
                                <li>
                                    <a href="allProduct.html?iphone_13">iPhone 13 Series</a>
                                </li>
                                <li>
                                    <a href="allProduct.html?iphone_12">iPhone 12 Series</a>
                                </li>
                                <li>
                                    <a href="allProduct.html?iphone_11">iPhone 11 Series</a>
                                </li>
                                <li>
                                    <a href="allProduct.html?iphone_se">iPhone SE</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="">iPad</a>
                            <ul className="subnav">
                                <li>
                                    <a href="">iPad Pro M1</a>
                                </li>
                                <li>
                                    <a href="">iPad Pro M2</a>
                                </li>
                                <li>
                                    <a href="">iPad Air</a>
                                </li>
                                <li>
                                    <a href="">ipad 9</a>
                                </li>
                                <li>
                                    <a href="">iPad 10</a>
                                </li>
                                <li>
                                    <a href="">iPad Mini</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="allProduct.html?macbook">Mac</a>
                            <ul className="subnav">
                                <li>
                                    <a href="allProduct.html?macbook_pro">MacBook Pro</a>
                                </li>
                                <li>
                                    <a href="allProduct.html?macbook_air">MacBook Air</a>
                                </li>
                                <li>
                                    <a href="">iMac</a>
                                </li>
                                <li>
                                    <a href="">Mac Mini</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="">Watch</a>
                            <ul className="subnav">
                                <li>
                                    <a href="">Apple Watch Ultra</a>
                                </li>
                                <li>
                                    <a href="">Apple Watch Series 8</a>
                                </li>
                                <li>
                                    <a href="">Apple Watch Series 7</a>
                                </li>
                                <li>
                                    <a href="">Apple Watch Series 6</a>
                                </li>
                                <li>
                                    <a href="">Apple Watch SE</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="">Âm Thanh</a>
                            <ul className="subnav">
                                <li>
                                    <a href="">AirPods</a>
                                </li>
                                <li>
                                    <a href="">EarPods</a>
                                </li>
                                <li>
                                    <a href="">Beats</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="">Phụ Kiện</a>
                            <ul className="subnav">
                                <li>
                                    <a href="">Sạc, Cáp</a>
                                </li>
                                <li>
                                    <a href="">Ốp Lưng</a>
                                </li>
                                <li>
                                    <a href="">Sạc Dự Phòng</a>
                                </li>
                                <li>
                                    <a href="">Chuột, Bàn Phím</a>
                                </li>
                                <li>
                                    <a href="">Apple Pencil</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="">Dịch Vụ</a>
                            <ul className="subnav">
                                <li>
                                    <a href="">ShopC4E Care</a>
                                </li>
                                <li>
                                    <a href="">ShopC4E Bảo Hành </a>
                                </li>
                                <li>
                                    <a href="">Thu Cũ Đổi Mới</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="">Trả Góp</a>
                            <ul className="subnav">
                                <li>
                                    <a href="">Điều Kiện Tham Gia</a>
                                </li>
                                <li>
                                    <a href="">Thủ Tục</a>
                                </li>
                                <li>
                                    <a href="">Đăng Ký</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="">Khuyến Mại</a>
                            <ul className="subnav">
                                <li>
                                    <a href="">Tin Tức</a>
                                </li>
                                <li>
                                    <a href="">Đăng Ký Nhận Tin</a>
                                </li>
                            </ul>
                        </li>
                    </ul> */}
                </div>

                <div className="header-wrapper">
                    <div className="header-search">
                        <a href="#">
                            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                        </a>
                    </div>
                    <div className="header-bagshop">
                        <a href="bagshop.html">
                            <i className="fa-solid fa-bag-shopping fa-xl"></i>
                            <span className="cal-item" id="cal_items">
                                0
                            </span>
                        </a>
                    </div>
                    <div className="header-user">
                        <a href="">
                            <i className="fa-solid fa-user fa-xl"></i>
                            <ul className="subnav-user">
                                <li>
                                    <a href="register.html">Tạo tài khoản</a>
                                </li>
                                <li>
                                    <a href="login.html">Đăng nhập</a>
                                </li>
                                <li>
                                    <a href="">Ngôn ngữ</a>
                                </li>
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
