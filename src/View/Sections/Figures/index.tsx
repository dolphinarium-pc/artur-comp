import React, { useEffect, useState } from "react"
import { FigureBlue } from "./FigureBlue";
import { FigureLight } from "./FigureLight";
import "./figures.scss";

export const Figures: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState<number>(0);

    const updateWidth = () => {
        setScreenWidth(window.screen.width);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth)

        return (() => {
            window.removeEventListener('resize', updateWidth);
        })
    }, [screenWidth]);

    let figures = Array.from(Array(screenWidth > 810 ? 5 : 4).keys()).map((_, i) => {
        return  i % 2 === 0 ?  <FigureLight /> : <FigureBlue />;
    });

    if (screenWidth <= 810) {
        figures[1] = figures[0];
        figures[0] = figures[3];
    }

    return (
        <div className="figures">
            {figures}
        </div>
    );
}