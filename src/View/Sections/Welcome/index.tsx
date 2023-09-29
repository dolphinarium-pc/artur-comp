import React from "react";
import { WelcomeTop } from "./WelcomeTop";
import { WelcomeBottom } from "./WelcomeBottom";
import { WelcomeContent } from "./WelcomeContent";
import "./welcome.scss";

export const Welcome: React.FC = () => {
    return (
        <div className="welcome">
            <WelcomeTop />
            <WelcomeContent />
            <WelcomeBottom />
        </div>
    )
}