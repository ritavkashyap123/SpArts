import React, { useState, useEffect } from "react";

import "./sidebar.scss";

import {
    FaChevronCircleRight,
    FaChevronCircleLeft,
} from "react-icons/fa";
import { LuSchool2 } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { VscBellDot } from "react-icons/vsc";
import { GoPeople } from "react-icons/go";
import { BsBarChart } from "react-icons/bs";
import { PiMoney } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 450);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 450);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
      let value = event.target.value;  
      setSearchInput(value);
    };
  
    const menuItem1 = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <BsBarChart />,
        },
        {
            path: "/academy-management",
            name: "Academy Management",
            icon: <LuSchool2 />,
        },
    ];
    const menuItem2 = [
        {
            path: "/student",
            name: "Student",
            icon: <GoPeople />,
        },
        {
            path: "/fee-payment",
            name: "Fee Payment",
            icon: <PiMoney />,
        },
        {
            path: "/enquiries",
            name: "Enquiries",
            icon: <IoIosPeople />,
        },
        {
            path: "/coaches",
            name: "Coaches",
            icon: <GiTeacher />,
        },
        {
            path: "/schedule",
            name: "Schedule",
            icon: <AiOutlineSchedule />,
        },
    ];
    const menuItem3 = [
        {
            path: "/settings",
            name: "Settings",
            icon: <GoGear />,
        },
        {
            path: "/notification",
            name: "Notification",
            icon: <VscBellDot />,
        },
    ];

    return (
        <div className="CompanySidebar">
            <div className="Sidebar">
                <div
                    style={{ width: isOpen ? "15rem" : "4.5rem" }}
                    className="container"
                >
                    <div className="sidebarTop" style={{ alignItems: isOpen ? "start" : "center" }}>
                        <div className="top_section">
                            <div
                                style={{ marginLeft: isOpen ? "11rem" : "0" }}
                                className="bars"
                            >
                                <FaChevronCircleRight
                                    onClick={toggle}
                                    className="abc"
                                    style={{ display: isOpen ? "none" : "block", color: "#fff" }}
                                />
                                <FaChevronCircleLeft
                                    onClick={toggle}
                                    className="cba"
                                    style={{ display: isOpen ? "block" : "none", color: "#fff" }}
                                />
                            </div>
                        </div>
                        <div className="head" style={{ display: isOpen ? "block" : "none" }}
                        >Main Menu</div>
                        {menuItem1.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link">
                                <div className="icon">{item.icon}</div>
                                <div
                                    style={{ display: isOpen ? "block" : "none" }}
                                    className="link_text"
                                >
                                    {item.name}
                                </div>
                            </NavLink>
                        ))}
                        <div className="head2" style={{ display: isOpen ? "block" : "none" }}
                        >More</div>
                        <div className="link" style={{ display: isOpen ? "block" : "none" }}>
                            <input className='search' value={searchInput} onChange={handleInputChange} placeholder="🔍 Search students by name" />
                        </div>
                        {menuItem2.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link">
                                <div className="icon">{item.icon}</div>
                                <div
                                    style={{ display: isOpen ? "block" : "none" }}
                                    className="link_text"
                                >
                                    {item.name}
                                </div>
                            </NavLink>
                        ))}
                        {isSmallScreen && (
                            <div>
                                {menuItem3.map((item, index) => (
                                    <NavLink to={item.path} key={index} className="link">
                                        <div className="icon">{item.icon}</div>
                                        <div
                                            style={{ display: isOpen ? 'block' : 'none' }}
                                            className="link_text"
                                        >
                                            {item.name}
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Sidebar;
