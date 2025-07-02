import { useState } from "react";
import { usePanier } from './PanierContext';
import { useNavigate } from "react-router-dom";
function PaiementPage() {
    const { setPanier } = usePanier();
    const navigate = useNavigate();
    const [nomCarte, setNomCarte] = useState('');
    const [numeroCarte, setNumeroCarte] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');

    function traiterPaiement(e) {
        e.preventDefault(); // empêche la page de recharger
        setNomCarte("");
        setNumeroCarte("");
        setExpiration("");
        setCvv("");
        setPanier([]);
        navigate("/Ecommerce_siteweb_projet_seg3525/confirmation");
    }
    return (
        <div>
            <h2>Étape 2/2</h2>
            <h1>Paiement</h1>
            <form onSubmit={traiterPaiement}>
                <label>Nom sur la carte :</label>
                <input type="text" required value={nomCarte} onChange={(e) => setNomCarte(e.target.value)} />

                <label>Numéro de carte :</label>
                <input type="text" required value={numeroCarte} onChange={(e) => setNumeroCarte(e.target.value)} />

                <label>Date d’expiration :</label>
                <input type="text" placeholder="MM/AA" required value={expiration} onChange={(e) => setExpiration(e.target.value)} />

                <label>CVV :</label>
                <input type="text" required value={cvv} onChange={(e) => setCvv(e.target.value)} />
                <p style={{ fontSize: "0.85em", color: "#555" }}>
                    Aucune transaction réelle – ceci est un prototype.
                </p>

                <input type="submit" value="Commander" />
            </form>
        </div>

    );
}

export default PaiementPage;
