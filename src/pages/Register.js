import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user' // Valor por defecto
    });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://parcialback-five.vercel.app/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (response.ok) {
        alert(`Usuario registrado: ${data.user.name} con rol ${data.user.role}`);
    } else {
        alert(data.message);
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />

      {/* Selector de rol */}
        <select name="role" onChange={handleChange}>
        <option value="user">Usuario</option>
        <option value="admin">Administrador</option>
        </select>

        <button type="submit">Registrarse</button>
        <p>¿Ya tienes una cuenta? <a href="/login">Log in</a></p>
    </form>
    );
};

export default Register;
