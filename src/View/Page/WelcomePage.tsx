import React from "react"
import { Welcome } from "../Sections/Welcome";
import { Popular } from "../Sections/Popular";
import { PopularModel } from "../Sections/PopularModel";
import { ReadyModel } from "../Sections/ReadyModel";
import { Figures } from "../Sections/Figures";
import { Common } from "../Sections/Common";

export const WelcomePage: React.FC = () => {
    return (
        <>
            <Welcome />
            <Popular />
            <PopularModel />
            <ReadyModel />
            <Figures />
            <Common />
        </>
    );
}