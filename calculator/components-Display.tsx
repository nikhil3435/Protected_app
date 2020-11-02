import React from 'react'
import styled from 'styled-components'

//const styledComponents = require('styled-components')

interface DisplayProps {
    value: string
    expression: string
}

const StyledIndicatorList = styled.div`
    font-size: 2em;
    line-height: 1;
    text-align:right;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25em;
    min-height: 1em;
    margin-left:auto
`




const StyleScreen = styled.div`
    font-size: 2.5em;
    min-height: 1.4em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const StyledDisplay = styled.div`
    background-color: #000000;
    color: #fff;
`

export const Screen: React.FC<DisplayProps> = ({value, expression}) => {
    return (
        <StyledDisplay>
            <StyledIndicatorList>
                {expression}
            </StyledIndicatorList>
            <StyleScreen>
                {value}
            </StyleScreen>
        </StyledDisplay>
    )
}
export default Screen