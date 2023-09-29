import React from 'react';

interface Props {
    content: string;
}

export const NavItem: React.FC<Props> = ({ content }) => {
    return (
        <div className='nav_item'>
            <h3 className='nav_item_content'>
                {content}
            </h3>
        </div>
    );
}