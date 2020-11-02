import React from 'react'

interface LinkProps {
    active: boolean,
    children: any,
    onClick: () => void
}

const Link: React.FC<LinkProps> = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <button
            onClick={onClick}
            disabled={active}
        >
            {children}
        </button>
    );
};

export default Link