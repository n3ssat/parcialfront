    // src/pages/PaymentGateway.js
    import { useLocation, useNavigate } from "react-router-dom";
    import { useState } from "react";

    const PaymentGateway = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { producto, valor } = location.state || {};

    const [nombre, setNombre] = useState("");
    const [cedula, setCedula] = useState("");
    const [telefono, setTelefono] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [vencimiento, setVencimiento] = useState("");
    const [ccv, setCcv] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
            const tarjetaValida = "4111111111111111";
            const estado = tarjeta === tarjetaValida ? "Aceptado" : "Declinado";
        
            const saleData = {
            producto,
            valor,
            nombre,
            cedula,
            telefono,
            tarjeta,
            estado
            };
        
            try {
            const response = await fetch("http://localhost:5000/api/sales/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(saleData)
            });
        
            const data = await response.json();
        
            if (response.ok) {
                alert(`Transacción ${estado}`);
                navigate("/marketplace");
            } else {
                alert(data.message || "Error al procesar el pago");
            }
            } catch (error) {
            console.error("Error al registrar la venta:", error);
            alert("Ocurrió un error en el servidor");
            }
        };
        

    return (
        <div>
        <h2>Pasarela de Pago</h2>
        <form onSubmit={handleSubmit}>
            <input value={producto} disabled />
            <input value={valor} disabled />
            <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            />
            <input
            placeholder="Cédula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
            />
            <input
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            />
            <input
            placeholder="Número de Tarjeta"
            value={tarjeta}
            onChange={(e) => setTarjeta(e.target.value)}
            required
            />
            <input
            placeholder="Fecha de Vencimiento"
            value={vencimiento}
            onChange={(e) => setVencimiento(e.target.value)}
            required
            />
            <input
            placeholder="CCV"
            value={ccv}
            onChange={(e) => setCcv(e.target.value)}
            required
            />
            <button type="submit">Confirmar Pago</button>
        </form>
        </div>
    );
    };

    export default PaymentGateway;
