import { useState } from "react";
import { dataNav } from "../Mocks/dataNav";
import { Link } from "react-router-dom";

const NavMenu = () => {
    const [listNav, setListNav] = useState(dataNav);

    return (
        <ul className="top-menu">
            {listNav.map((item, index) => {
                return (
                    <li key={index}>
                        <Link to={"/" + item.href}>{item.title}</Link>
                        <ul className="subnav">
                            {item.subnav.map((subItem, subIndex) => {
                                return (
                                    <li key={subIndex}>
                                        <Link href={"/" + subItem.href}>
                                            {subItem.titleSub}
                                        </Link>
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
