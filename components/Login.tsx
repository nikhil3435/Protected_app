import React from 'react'
import { useState } from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import NikhilInput from './NikhilInput'

interface ILogin {
    loginSuccess: () => void,
    loginFailed : ()=> void
}

const Login=({loginSuccess,loginFailed} : ILogin)=> {

    let location = useLocation()
    console.log(location)
    const Username= "Nikhil"
    const Password= "123456"

    const[user,setUser] = useState("")
    const[password,setPassword]= useState("")
    
    let history = useHistory()

    let from = location.search.slice(1)
    console.log(from)
    const userChange = (e: any) => {
        setUser(e.target.value)
    }
    
    const passwordChange = (e:any) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(user=== Username && password===Password){
            loginSuccess()
            console.log("SUccess")
            history.push(from)
            console.log(from)
            
        }else{
            loginFailed()
            console.log("Failed")
        }
        
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <NikhilInput changeFunction={userChange} label="Username" placeholder="input username" />
                <NikhilInput changeFunction={passwordChange} label="Password" type="password" placeholder="input password"/>
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login