import { useState } from "react";
import { dataNav } from "../Mocks/dataNav";

const NavMenu = () => {
    const [listNav, setListNav] = useState(dataNav);

    return (
        <ul className="top-menu">
            {listNav.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={"?" + item.href}>{item.title}</a>
                        <ul className="subnav">
                            {item.subnav.map((subItem, subIndex) => {
                                return (
                                    <li key={subIndex}>
                                        <a href={"?" + subItem.href}>
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
