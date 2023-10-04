import React, { useMemo } from "react";
import { WelcomeTop } from "./WelcomeTop";
import { WelcomeBottom } from "./WelcomeBottom";
import { WelcomeContent } from "./WelcomeContent";
import "./welcome.scss";
import { BackgroundImg } from "../../Module/BackgroundImg";
import { Swiper } from "../../Module/Swiper";

export const Welcome: React.FC = () => {
    const urlsImgs = useMemo(() => 
        ['https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg', 
        'https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg',
        'https://www.creativefabrica.com/wp-content/uploads/2023/04/02/Nature-Background-Graphics-66003217-1.jpg'], []);

    return (
        <Swiper>
            {urlsImgs.map((url: string) => (
                <BackgroundImg
                url={url}
            >
                <div className="welcome">
                    <WelcomeTop />
                    <WelcomeContent />
                    <WelcomeBottom />
                </div>
            </BackgroundImg>
            ))}
        </Swiper>
    )
}