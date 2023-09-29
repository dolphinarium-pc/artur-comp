import React from "react";
import { NavList } from "./NavList";
import './header.scss';

export const Header: React.FC = () => {
    return (
        <div className="header">
            <NavList />
        </div>
    );
}