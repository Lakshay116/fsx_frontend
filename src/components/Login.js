
import '../css/Login.css';
import React, { Component, useState, useEffect } from 'react';
import { data, useNavigate } from "react-router-dom";





function Login() {
    const navigate = useNavigate();

    const [mail, setMail] = useState('');
    const [password, setPasword] = useState('');


    const emailChangeHandler = (e) => {
        setMail(e.target.value)
        console.log(mail)
    }
    const passwordChangeHandler = (e) => {
        setPasword(e.target.value)
        console.log(password)
    }


    const login = async () => {
        const result = await fetch("http://localhost:5001/api/login", {
            method: "POST",
            body: JSON.stringify({
                email: mail,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then(response => response.json()).then(data => {
            console.log(data)
            if (data['msg'] == "Logged In") {
                if (data['user']['is_verified'] == 1) {
                    console.log("Logged In success")
                    navigate('/')
                }
                else {
                    console.log("user Not Verified")
                }
            }
        })

    }


    return (
        <div className='login_main' >
            <div className='login_div'>
                <h1 style={{ color: 'orangered' }}>Log In</h1>
                <div className='login_form'  >
                    <input name="email" type="text" className="login_input" placeholder="Email" onChange={emailChangeHandler} />
                    <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>
                    <input name="password" type="text" className="login_input" placeholder="Password" onChange={passwordChangeHandler} />
                    <div style={{ width: '70%', height: '2px', backgroundColor: 'orangered', marginLeft: '15%' }}></div>
                    <button class="submit-contact" style={{ marginTop: '10vh' }} onClick={login}>Login</button>
                </div>
            </div>
        </div >
    )
    // }
}

export default Login   