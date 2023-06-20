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
