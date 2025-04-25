    import { useState } from "react";
    import { useNavigate } from "react-router-dom";

    const Marketplace = () => {
    const [producto, setProducto] = useState("");
    const [valor, setValor] = useState("");
    const navigate = useNavigate(); // ⬅️ Aquí se inicializa useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        // Redireccionamos a la vista de pago con los datos del producto y valor
        navigate("/payment", { state: { producto, valor } });
    };

    return (
        <div>
        <h2>Marketplace</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nombre del producto"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            required
            />
            <input
            type="number"
            placeholder="Precio"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
            />
            <button type="submit">Pagar</button>
        </form>
        <p>
            Para salir de su perfil favor de click <a href="/login">Aquí</a>
        </p>
        </div>
    );
    };

    export default Marketplace;
