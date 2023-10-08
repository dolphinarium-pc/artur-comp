import React from "react"
import { NavItem } from "./NavItem";
import "./nav.scss";

const contentArr = [
    "Text1",
    "Text2",
    "Text3",
    "Text4",
    "Text5",
];

export const NavList: React.FC = () => {

    return (
        <div className="nav">
            {contentArr.map(content => (
                <NavItem
                    content={content} 
                />
            ))}
        </div>
    );
}