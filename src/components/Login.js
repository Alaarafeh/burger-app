import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const [, setCookie] = useCookies(['access_token'])


    const postLoginDetails = () => {
		fetch("http://localhost:8080/login", {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
			})
		})
        .then(response => response.json())
        .then(data => {
            console.log(data.token)
            setCookie('access_token', data.token)
        
            navigate("/dashboard");
        })
		.catch((err) => console.error(err));
	};

    const handleSubmit = (e) => {
        e.preventDefault();
        postLoginDetails();
        console.log({ email, password });
        setPassword("");
    };

    const gotoSignUpPage = () => navigate("/register");

    return (
        <div className='login__container'>
            <h2>Login </h2>
            <form className='login__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={6}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='loginBtn'>SIGN IN</button>
                <p>
                    Don't have an account?{" "}
                    <span className='link' onClick={gotoSignUpPage}>
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;