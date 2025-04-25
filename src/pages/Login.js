import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("https://parcialback-five.vercel.app/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", data.token);
            alert("Inicio de sesión exitoso");
    
            // 🔀 Redirigir según el rol
            if (data.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/marketplace");
            }
    
        } else {
            alert(data.message || "Error en el inicio de sesión");
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
        </div>
    );
}

export default Login;
