import './Promotion.css';
import { usePanier } from './PanierContext';

function Promotion() {
  const { ajouterAuPanier } = usePanier();

  function ajouterProduit(nom, prix, image, materiau) {
    const produit = {
      nom,
      prix,
      image,
      materiau,
      couleurChoisie: "défaut"
    };
    ajouterAuPanier(produit);
  }

  return (
    <div className="promotion-container">
      <h1>Nos Promotions du Mois!</h1>
      <div className="promotion-grid">
        <div className="promotion-card">
          <img
            src={process.env.PUBLIC_URL + "/images/porte_exterieur_style_regulier_canada_2.png"}
            alt="Porte Vitrée Pleine Moderne"
            className="promotion-img"
          />
          <h2>Porte Vitrée Pleine Moderne</h2>
          <p><s>195$</s> <strong>169$</strong> 🎉</p>
          <p>Laissez entrer la lumière sans compromis!</p>
          <button onClick={() =>
            ajouterProduit(
              "Porte Vitrée Pleine Moderne",
              169,
              process.env.PUBLIC_URL + "/images/porte_exterieur_style_regulier_canada_2.png",
              "acier avec verre trempé"
            )}>Ajouter au panier</button>
        </div>

        <div className="promotion-card">
          <img
            src={process.env.PUBLIC_URL + "/images/fenetre_exterieur_battant_regulier_canada.png"}
            alt="Fenêtre battante"
            className="promotion-img"
          />
          <h2>Fenêtre battante</h2>
          <p><s>245$</s> <strong>199$</strong> ✨</p>
          <p>Isolation supérieure à prix réduit.</p>
          <button onClick={() =>
            ajouterProduit(
              "Fenêtre battante",
              199,
              process.env.PUBLIC_URL + "/images/fenetre_exterieur_battant_regulier_canada.png",
              "PVC"
            )}>Ajouter au panier</button>
        </div>
      </div>

      <p className="promotion-note">
        🚚 Livraison gratuite pour toute commande de plus de 500$!
      </p>
    </div>
  );
}

export default Promotion;
