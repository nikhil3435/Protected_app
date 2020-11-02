import React, { useEffect } from 'react'
import Button from './components-Button'
import {Digit, Operator} from './types'
import styled from 'styled-components'

//const styledComponents = require('styled-components')

interface PadProps {
    onDigitClick: (digit: Digit) => void
    onPointClick: () => void
    onOperatorClick: (operator: Operator) => void
    onChangeSignClick: () => void
    onEqualClick: () => void
    onAllClearClick: () => void
    onClearEntryClick: () => void
}

const StyledPad = styled.div`
    display: grid;
    grid-template-coulumns: repeat(8,1fr);
    grid-auto-rows: 1fr;
`

const Pad: React.FC<PadProps> = ({
    onDigitClick,
    onPointClick,
    onOperatorClick,
    onChangeSignClick,
    onEqualClick,
    onAllClearClick,
    onClearEntryClick
}) => {
    const handleKeyDown = ({ keyCode, shiftKey}: KeyboardEvent) => {
        if(keyCode >= 48 && keyCode <= 57 && !shiftKey){
            onDigitClick((keyCode-48) as Digit)
        } else if((keyCode >= 96 && keyCode <=105)){
            onDigitClick((keyCode-96) as Digit)
        } else if(keyCode === 107 || (keyCode === 187 && shiftKey)){
            onOperatorClick('+')
        } else if(keyCode === 109 || keyCode === 189){
            onOperatorClick('-')
        } else if(keyCode === 106 || (keyCode === 56 && shiftKey)){
            onOperatorClick('x')
        } else if(keyCode === 111 || keyCode === 191){
            onOperatorClick('÷')
        } else if(keyCode === 13 || (keyCode===187 && !shiftKey)){
            onEqualClick()
        } else if(keyCode === 46){
            onClearEntryClick()
        } else if(keyCode === 27){
            onAllClearClick()
        } else if(keyCode === 78){
            onChangeSignClick()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyDown)
        return () => document.body.removeEventListener('keydown', handleKeyDown)
    })

    return (
        <StyledPad>
            <Button color="red" onClick={onAllClearClick}>
                AC
            </Button>
            <Button onClick={onClearEntryClick}>
                C
            </Button>
            <Button onClick={onChangeSignClick}>
                +/-
            </Button>
            <Button color="dark" onClick={() => onOperatorClick('÷')}>
                ÷
            </Button>
            <Button onClick={() => onDigitClick(7)}>
                7
            </Button>
            <Button onClick={() => onDigitClick(8)}>
                8
            </Button>
            <Button onClick={() => onDigitClick(9)}>
                9
            </Button>
            <Button color="dark" onClick={() => onOperatorClick('x')}>
                x
            </Button>
            <Button onClick={() => onDigitClick(4)}>
                4
            </Button>
            <Button onClick={() => onDigitClick(5)}>
                5
            </Button>
            <Button onClick={() => onDigitClick(6)}>
                6
            </Button>
            <Button color="dark" onClick={() => onOperatorClick('-')}>
                -
            </Button>
            <Button onClick={() => onDigitClick(1)}>
                1
            </Button>
            <Button onClick={() => onDigitClick(2)}>
                2
            </Button>
            <Button onClick={() => onDigitClick(3)}>
                3
            </Button>
            <Button color="dark" onClick={()=> onOperatorClick('+')}>
                +
            </Button>
            <Button onClick={()=>onDigitClick(0)}>
                0
            </Button>
            <Button onClick={onPointClick}>
                .
            </Button>
            <Button color="green" isLarge= {true} onClick={onEqualClick}>
                =
            </Button>
        </StyledPad>
    )
}

export default Pad