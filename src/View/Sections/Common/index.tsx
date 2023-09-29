import React from "react";
import './common.scss';

export const Common: React.FC = () => {
    return (
        <div className="common">
            <h2 className="common_title">Common Questions</h2>
            <div className="common_block">
                <div className="common_block_divide">
                    <h2 className="common_text_title">How do I customize my Assembly?</h2>
                    <h2 className="common_text">Simply browse our models and select your preferred components.</h2>
                </div>
                <div className="common_block_divide">
                    <h2 className="common_text_title">Do you offer customer support?</h2>
                    <h2 className="common_text">Yes, our team of experts is here to assist you.</h2>
                </div>
            </div>
        </div>
    );
}