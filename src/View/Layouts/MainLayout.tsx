import React from "react";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { WelcomePage } from "../Page/WelcomePage";

export const MainLayout: React.FC = () => {
    return (
        <div>
            <Header />
            <WelcomePage />
            <Footer />
        </div>
    );
}