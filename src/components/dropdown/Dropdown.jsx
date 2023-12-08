import React, { useState } from "react";
import "./dropdown.scss";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const options = ['Last 30 Days', 'Last 3 months', 'Last 6 months', 'Last 1 year'];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    return (
        <div className="Dropdown">
            <div
                className={`dropdown-header ${dropdownOpen ? "open" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                {selectedOption ? selectedOption : "Select an option"}
                <div className="custom-down-icon"><FaChevronDown /></div>
            </div>
            {dropdownOpen && (
                <div className="options">
                    {options.map((option) => (
                        <div
                            key={option}
                            className="option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
