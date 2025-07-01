
import { usePanier } from './PanierContext';
import './PanierPage.css';
function PanierPage() {
    const { panier, supprimerDuPanier } = usePanier();

    if(panier.length === 0){
        return <h1 className="titre_page_panier">Votre panier est vide!</h1>;
    }
    return (
        <div>
            <h1 className="titre_page_panier">Votre panier</h1>
            <p className="description_page_panier">Ici s’afficheront les produits ajoutés:</p>
             <ul className="panier-grid">
                {panier.map((produit, index) => (
                    <>
                      <li key={index} className="carte-produit">  
                      <h3>{produit.nom}</h3>
                      <img className="image_produit_panier" src={produit.image}></img>
                      <p><strong>Materiau : </strong>{produit.materiau}</p>
                      <p><strong>Couleur : </strong> {produit.couleurChoisie ?? "Aucune couleur choisie"}</p>
                      <p><strong>Prix : </strong>{produit.prix} $</p>
                      <input type="button" value="Supprimer du panier" onClick={()=>
                        supprimerDuPanier(produit)
                      }></input>
                      </li> 
                       {(index + 1) % 4 === 0 && <div style={{ width: '100%', height: '0px' }}></div>}

                    </>
                ))}
            </ul>
        </div>

    );
}

export default PanierPage;
