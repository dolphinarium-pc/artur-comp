import React from "react";
import { PopularModelItem } from "./PopularModelItem";
import "./item.scss";

interface PopularItemContent {
    imgUrl: string;
    content: string;
}

const popularITemsContent: PopularItemContent[] = [
    {
        imgUrl: "https://framerusercontent.com/images/vb2yi9LLpZQMlk2hrTr22i7ZT2k.jpg?scale-down-to=512",
        content: "Cutting-edge components that don’t compromise."
    },
    {
        imgUrl: "https://framerusercontent.com/images/MXEanw1h64srpEoMKH6TeynGg.jpg?scale-down-to=512",
        content: "Cutting-edge components that don’t compromise."
    },
    {
        imgUrl: "https://framerusercontent.com/images/Oe6tR7G5yjiYXjtsUASpMNH2K2s.jpg?scale-down-to=512",
        content: "Bringing your digital world to life."
    },
    {
        imgUrl: "https://framerusercontent.com/images/2KD4Glzl1o4fdVcxJXlRfmPGM.jpg?scale-down-to=512",
        content: "Tailored to fit your unique needs."
    },
    {
        imgUrl: "https://framerusercontent.com/images/ufKFltiMjs5TeWWcMbYmNy2BF0.jpg?scale-down-to=512",
        content: "Light up your gaming experience."
    },
    {
        imgUrl: "https://framerusercontent.com/images/kGC8CB2JfoBN02rkDLJLHEf3V4.jpg?scale-down-to=512",
        content: "Got questions? Our team is ready to help!"
    }
];

export const PopularModel: React.FC = () => {

    return (
        <div className="popular-content-wrapper">
            {popularITemsContent.map(({ imgUrl, content }) => (
                <PopularModelItem
                    imgUrl={imgUrl}
                    content={content} 
                />
            ))}
        </div>
    );
}