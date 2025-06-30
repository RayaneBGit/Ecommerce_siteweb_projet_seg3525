
import { usePanier } from './PanierContext';

function PanierPage() {
    const { panier } = usePanier();

    if(panier.length === 0){
        return <p>Votre panier est vide!</p>;
    }


    return (
        <div>
            <h1>Votre panier</h1>
            <p>Ici s’afficheront les produits ajoutés.</p>
             <ul>
                {panier.map((produit, index) => (
                    <li key={index}>{produit.nom}</li>  // ✅ AJOUT DU "key"
                ))}
            </ul>
        </div>

    );
}

export default PanierPage;
