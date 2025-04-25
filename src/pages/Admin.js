import { useEffect, useState } from "react";

const Admin = () => {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        const fetchVentas = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/sales/");
                const data = await response.json();
                if (response.ok) {
                    setVentas(data);
                } else {
                    console.error("Error al obtener ventas:", data.message);
                }
            } catch (error) {
                console.error("Error al conectar con el backend", error);
            }
        };

        fetchVentas();
    }, []);

    return (
        <div>
            <h2>Panel de Administrador - Ventas</h2>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Valor</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta) => (
                        <tr key={venta._id}>
                            <td>{venta.producto}</td>
                            <td>${venta.valor}</td>
                            <td>${venta.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p> Para salir del perfil de administrador por favor de click <a href="/login">Aquí</a></p>
        </div>
    );
};

export default Admin;
