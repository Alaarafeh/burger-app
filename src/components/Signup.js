import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const postRegister = () => {
		fetch("http://localhost:8080/register", {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
			})
		})
        .then(response => response.json())
        .then(data => {
           
        })
		.catch((err) => console.error(err));
	};

    const handleSubmit = (e) => {
        e.preventDefault();
        postRegister();
        console.log({ email, password });
        setPassword("");
    };
    const gotoLoginPage = () => navigate("/");

    return (
        <div className='signup__container'>
            <h2>Sign up </h2>
            <form className='signup__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Username</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    value={email}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='tel'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='signupBtn'>SIGN UP</button>
                <p>
                    Already have an account?{" "}
                    <span className='link' onClick={gotoLoginPage}>
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Signup;