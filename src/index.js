import React, { useState } from "react";
import ReactDOM  from "react-dom/client";

const LoginForm =() =>{
    //create email and password state variables and assign a null value to them
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //variable to read the email value to update the email state value
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    //variable to read password value to update the password state value
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(email + ' ' + password);
    }

    console.log(email + ' ' + password);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                id="email" 
                type="text"
                value={email}
                onChange={handleEmail}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                id="password"
                type="password"
                value={password}
                onChange={handlePassword} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
//render Login component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LoginForm />
);