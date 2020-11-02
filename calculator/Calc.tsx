import React, {useState} from 'react'
import {Digit, Operator} from './types'
import Pad from './components-Pad'
import Display from './components-Display'
import styledComponents from 'styled-components'
import LogoutFooter from '../components/LogoutFooter'

const StyledApp = styledComponents.div`
    font-family: Arial;
    font-size: 16px;
    width: 100%;
    height: 100%;
    max-width: 400px;
`

const App = () => {
    
    const[result,setResult] = useState<number>(0)
    const[waitingOp,setWaitingOp] = useState<boolean>(true)
    const[display, setDisplay] = useState<string>('0')
    const[pendingOp,setPendingOp] = useState<Operator>()

    const calculate = (rightOp: number, pendingOp: Operator): boolean => {
        let newResult = result;

        switch(pendingOp) {
            case '+':
                newResult += rightOp;
                break;
            case '-':
                newResult -= rightOp;
                break;
            case 'x':
                newResult *= rightOp;
                break;
            case '÷':
                if(rightOp===0){
                    return false
                }
                newResult /= rightOp
        }
        setResult(newResult)
        setDisplay(newResult.toString().slice(0,12))

        return true
    }

    const onDigitClick = (digit: Digit) => {
        let newDisplay = display

        if((display === '0' && digit === 0) || display.length > 10){
            return
        }
        if(waitingOp){
            newDisplay = ''
            setWaitingOp(false)
        }

        if(display !== '0'){
            newDisplay = newDisplay + digit.toString()
        } else {
            newDisplay = digit.toString()
        }

        setDisplay(newDisplay)
    }

    const onPointClick = () => {
        let newDisplay = display

        if(waitingOp){
            newDisplay = '0'
        }

        if(newDisplay.indexOf('.') === -1){
            newDisplay = newDisplay + '.'
        }

        setDisplay(newDisplay)
        setWaitingOp(false)
    }

    const onOperatorClick = (operator: Operator) => {
        const operand = Number(display)
        if(typeof pendingOp !== 'undefined' && !waitingOp){
            if(!calculate(operand, pendingOp)){
                return
            }
        } else {
            setResult(operand)
        }

        setPendingOp(operator)
        setWaitingOp(true)
    }

    const onChangeSignClick = () => {
        const value = Number(display)

        if(value > 0){
            setDisplay('-' + display )
        } else if(value < 0) {
            setDisplay(display.slice(1))
        }
    }

    const onEqualClick = () => {
        const operand = Number(display)

        if(typeof pendingOp !== 'undefined' && !waitingOp){
            if(!calculate(operand, pendingOp)){
                return
            }

            setPendingOp(undefined)
        } else {
            setDisplay(operand.toString())
        }

        setResult(operand)
        setWaitingOp(true)

    }

    const onAllClearClick = () => {
        setResult(0)
        setPendingOp(undefined)
        setDisplay('0')
        setWaitingOp(true)
    }

    const onClearEntryClick = () => {
        setDisplay('0')
        setWaitingOp(true)
    }

    return (
        <StyledApp>
            <Display value={display} expression={typeof pendingOp !== 'undefined' ? `${result}${pendingOp}${waitingOp ? '' : display}` : ''}/>
            <Pad
                onDigitClick = {onDigitClick}
                onPointClick = {onPointClick}
                onOperatorClick = {onOperatorClick}
                onChangeSignClick = {onChangeSignClick}
                onEqualClick = {onEqualClick}
                onAllClearClick = {onAllClearClick}
                onClearEntryClick = {onClearEntryClick}
            />
        </StyledApp>
    )
}

const Calc = () => {
    return (
        <div>
            <App/>
            <LogoutFooter />
        </div>
    )
}
export default Calc
