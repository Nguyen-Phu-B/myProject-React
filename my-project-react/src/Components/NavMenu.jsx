import { useState } from "react";

const dataNav = [
    {
        title: "iPhone",
        href: "iphone",
        subnav: [
            {
                titleSub: "iPhone 14 Series",
                href: "ip14sr",
            },
            {
                titleSub: "iPhone 13 Series",
                href: "ip13sr",
            },
            {
                titleSub: "iPhone 12 Series",
                href: "ip12sr",
            },
            {
                titleSub: "iPhone 11 Series",
                href: "ip11sr",
            },
            {
                titleSub: "iPhone SE Series",
                href: "ipsesr",
            },
        ],
    },
    {
        title: "iPad",
        href: "ipad",
        subnav: [
            {
                titleSub: "iPad Pro M2",
                href: "ipadprm2",
            },
            {
                titleSub: "iPad Pro M1",
                href: "ipadprm1",
            },
            {
                titleSub: "iPad Air",
                href: "ipadair",
            },
            {
                titleSub: "iPad 10",
                href: "ipad10",
            },
            {
                titleSub: "iPad Mini",
                href: "ipadmini",
            },
        ],
    },
    {
        title: "Mac",
        href: "mac",
        subnav: [
            {
                titleSub: "MacBook Pro",
                href: "macpr",
            },
            {
                titleSub: "MacBook Air",
                href: "macair",
            },
            {
                titleSub: "iMac",
                href: "imac",
            },
            {
                titleSub: "Mac Mini",
                href: "macmn",
            },
        ],
    },
    {
        title: "Watch",
        href: "watch",
        subnav: [
            {
                titleSub: "Apple Watch Ultra",
                href: "awul",
            },
            {
                titleSub: "Apple Watch Series 8",
                href: "aw8",
            },
            {
                titleSub: "Apple Watch Series 7",
                href: "aw7",
            },
            {
                titleSub: "Apple Watch Series 6",
                href: "aw6",
            },
            {
                titleSub: "Apple Watch SE",
                href: "awse",
            },
        ],
    },
    {
        title: "Âm thanh",
        href: "sounds",
        subnav: [
            {
                titleSub: "AirPod",
                href: "airpod",
            },
            {
                titleSub: "EarPod",
                href: "earpod",
            },
            {
                titleSub: "Beats",
                href: "beats",
            },
        ],
    },
    {
        title: "Phụ kiện",
        href: "phukien",
        subnav: [
            {
                titleSub: "Sạc, Cáp",
                href: "caple",
            },
            {
                titleSub: "Ốp Lưng",
                href: "case",
            },
            {
                titleSub: "Sạc Dự Phòng",
                href: "powresub",
            },
            {
                titleSub: "Chuột, Bàn Phím",
                href: "gear",
            },
            {
                titleSub: "Apple Pencil",
                href: "apen",
            },
        ],
    },
    {
        title: "Dịch vụ",
        href: "service",
        subnav: [
            {
                titleSub: "ShopC4E Care",
                href: "care",
            },
            {
                titleSub: "ShopC4E Bảo Hành ",
                href: "bh",
            },
            {
                titleSub: "Thu Cũ Đổi Mới",
                href: "changeold",
            },
        ],
    },
    {
        title: "Trả góp",
        href: "tragop",
        subnav: [
            {
                titleSub: "Điều Kiện Tham Gia",
                href: "dieukien",
            },
            {
                titleSub: "Thủ Tục",
                href: "thutuc",
            },
            {
                titleSub: "Đăng Ký",
                href: "dangkygop",
            },
        ],
    },
    {
        title: "Khuyến mãi",
        href: "khuyenmai",
        subnav: [
            {
                titleSub: "Tin tức",
                href: "news",
            },
            {
                titleSub: "Đăng ký nhận tin",
                href: "dknews",
            },
        ],
    },
];

const NavMenu = () => {
    const [listNav, setListNav] = useState(dataNav);

    return (
        <ul className="top-menu">
            {listNav.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={"allProduct.html?" + item.href}>
                            {item.title}
                        </a>
                        <ul className="subnav">
                            {item.subnav.map((subItem, subIndex) => {
                                return (
                                    <li key={subIndex}>
                                        <a
                                            href={
                                                "allProduct.html?" +
                                                subItem.href
                                            }
                                        >
                                            {subItem.titleSub}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavMenu;
