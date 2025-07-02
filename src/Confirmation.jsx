import { useState } from "react";

function ConfirmationPage() {
    const [avis, setAvis] = useState('');
    function envoyerSondage() {
    alert("Merci pour votre avis !")
    setAvis("");
    }
    return (
        <div>
            <h1>Confirmation de la commande</h1>
            <p>Merci infiniment pour votre achat, c’est un plaisir de vous servir !</p>
            <h3>Votre opinion compte</h3>
            <p>Et maintenant, dites-nous franchement : comment s’est passée votre expérience ? 😊</p>
            <textarea value={avis} placeholder="Écrivez votre avis ici..." onChange={(e)=>setAvis(e.target.value)}></textarea>
            <button onClick={() => envoyerSondage()}>Envoyer</button>
        </div>

    );
}

export default ConfirmationPage;
