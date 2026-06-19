import React, { useState } from "react";
import axios from "axios";

export default function Login({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        const res = await axios.post("http://localhost:5000/login", {
            username,
            password
        });

        if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            setToken(res.data.token);
        } else {
            alert(res.data.error);
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>🔐 Betfity Login</h1>

            <input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <br />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={login}>Login</button>
        </div>
    );
}
