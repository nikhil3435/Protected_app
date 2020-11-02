import React from 'react'
import styledComponents,{css} from 'styled-components'


interface ButtonProps {
    color?: 'red' | 'dark' | 'green'
    isLarge?: boolean
    onClick?: () => void
}

const cssColor = (color: ButtonProps['color']) => {
    switch(color){
        case 'red':
            return css`
                background-color: #c04444;
                color: #ccc;
            `
        case 'dark':
            return css`
                background-color: #ffffff;
                color: #000;
            `
        case 'green':
            return css`
                background-color: #228b22;
                color: #ccc;
            `
    }

    return css `
        background-color: #777777;
        color: #ccc;
    `
}

const StyledButton = styledComponents.button<ButtonProps>`
    font-family: inherit;
    font-size: inherit;
    border: 2px solid rgba(0, 0, 0, 0.05);
    border-radius: 0;
    padding-top: 1em;
    padding-bottom: 1em;
    ${({ color }) => cssColor(color)}
    ${({ isLarge }) => 
        isLarge &&
        css`
            grid-column-end: span 4;
        `}
    position: relative;
    transform: translate3d(0,0,0); 
`

const Button: React.FC<ButtonProps> = ({children, color, isLarge, onClick}) => {
    return (
        <StyledButton color={color} isLarge={isLarge} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button