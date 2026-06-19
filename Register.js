import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        const res = await axios.post("http://localhost:5000/register", {
            username,
            password
        });

        alert(JSON.stringify(res.data));
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>🆕 Register</h1>

            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <br />

            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <br /><br />

            <button onClick={register}>Create Account</button>
        </div>
    );
          }
