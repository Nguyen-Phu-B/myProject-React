import "./Header.scss";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/">
                        <img
                            className="header-img"
                            src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png"
                            alt=""
                        />
                    </Link>
                </div>

                <div className="header-menu">
                    <NavMenu />
                </div>

                <div className="header-wrapper">
                    <div className="header-search">
                        <Link to="#">
                            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                        </Link>
                    </div>
                    <div className="header-bagshop">
                        <Link to="/cart">
                            <i className="fa-solid fa-bag-shopping fa-xl"></i>
                            <span className="cal-item" id="cal_items">
                                0
                            </span>
                        </Link>
                    </div>
                    <div className="header-user">
                        <Link to="">
                            <i className="fa-solid fa-user fa-xl"></i>
                            <ul className="subnav-user">
                                <li>
                                    <Link to="register.html">
                                        Tạo tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link to="login.html">Đăng nhập</Link>
                                </li>
                                <li>
                                    <Link to="">Ngôn ngữ</Link>
                                </li>
                            </ul>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
