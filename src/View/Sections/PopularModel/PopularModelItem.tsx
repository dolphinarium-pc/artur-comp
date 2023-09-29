import React from "react";

interface Props {
    imgUrl: string;
    content: string;
}

export const PopularModelItem: React.FC<Props> = ({ imgUrl, content }) => {
    return (
        <div className="item">
            <img className="item_img" src={imgUrl} />
            <div className="item_content">{content}</div>
        </div>
    );
}