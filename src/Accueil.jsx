
import { Link } from 'react-router-dom';
import './Accueil.css';
import { useState } from 'react';
function Accueil() {
  const [filtre, setFiltre] = useState('');
  function inclutMateriau(texte, filtre) {
    if (filtre === '') return true;
    return texte.toLowerCase().includes(filtre.toLowerCase());
  }

  return (
    <div>
      <section className="hero_presentation">
        <div className="banniere_page_accueil" style={

          {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${process.env.PUBLIC_URL}/images/maison_accueil_page_variation2.png)`
          }

        }>
          <div className="div_titres_page_accueil_banniere">
            <h1 className="titre_page_accueil_banniere">Des portes et des fenètres pour un intérieur chaud et sécurisant</h1>
            <p class="sous_titre_page_accueil_banniere">Une expertise locale depuis 1999</p>
          </div>
        </div>
      </section>
      <section><select onChange={(e) => setFiltre(e.target.value)}>
        <option value="">Tous les matériaux</option>
        <option value="Acier">Acier</option>
        <option value="Acier avec verre">Acier avec verre</option>
        <option value="PVC">PVC</option>
        <option value="Hybride">Hybride</option>
      </select>
      </section>
      <section className="section_presentation_produits">
        <h2 className="titre_presentation_produits_grid">Voici nos portes et fenêtres faits exclusivement au canada</h2>
        <div className="div_presentation_gridproduits">
          <div className="div_presentation_listesportes">
            <div className="div_titre_ligne_portes">
              <h3 className="titre_ligne_portes">Nos portes</h3>
            </div>
            {inclutMateriau("Acier", filtre) && (
              <Link to="/Ecommerce_siteweb_projet_seg3525/produit/porte-classique-6-panneaux">
                <div className="div_presentation_carteproduit">
                  <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada.png`} />
                  <p className="texte_nom_produit_grid_presentation">Porte Classique 6 Panneaux</p>
                  <p className="texte_nom_materiau_grid_presentation">(Acier)</p>
                </div>
              </Link>
            )}
            {inclutMateriau("Acier", filtre) && (
              <Link to="/Ecommerce_siteweb_projet_seg3525/produit/porte-elegance-arrondie">
                <div className="div_presentation_carteproduit">
                  <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_3.png`} />
                  <p className="texte_nom_produit_grid_presentation">Porte Élégance Arrondie</p>
                  <p className="texte_nom_materiau_grid_presentation">(Acier)</p>
                </div>
              </Link>
            )}
            {inclutMateriau("Acier avec verre", filtre) && (
              <Link to="/Ecommerce_siteweb_projet_seg3525/produit/porte-vitree-pleine-moderne">
                <div className="div_presentation_carteproduit">
                  <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_2.png`} />
                  <p className="texte_nom_produit_grid_presentation">Porte Vitrée Pleine Moderne</p>
                  <p className="texte_nom_materiau_grid_presentation"> (Acier avec verre trempé)</p>
                </div>
              </Link>
            )}
            {inclutMateriau("Acier", filtre) && (
              <Link to="/Ecommerce_siteweb_projet_seg3525/produit/porte-demi-lune-classique">
                <div className="div_presentation_carteproduit">
                  <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_4.png`} />
                  <p className="texte_nom_produit_grid_presentation">Porte Demi-Lune Classique</p>
                  <p className="texte_nom_materiau_grid_presentation">(Acier)</p>
                </div>
              </Link>
            )}
            {inclutMateriau("Acier avec verre", filtre) && (
            <Link to="/Ecommerce_siteweb_projet_seg3525/produit/porte-vision-depolie">
              <div className="div_presentation_carteproduit">
                <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_5.png`} />
                <p className="texte_nom_produit_grid_presentation">Porte Vision Dépolie</p>
                <p className="texte_nom_materiau_grid_presentation">(Acier avec verre givré)</p>
              </div>
            </Link>
             )}
             {inclutMateriau("Acier", filtre) && (
            <Link to="/Ecommerce_siteweb_projet_seg3525/produit/porte-majestique-a-arches">
              <div className="div_presentation_carteproduit">
                <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_6.png`} />
                <p className="texte_nom_produit_grid_presentation">Porte Majestique à Arches</p>
                <p className="texte_nom_materiau_grid_presentation">(Acier renforcé)</p>
              </div>
            </Link>
             )}
          </div>
          <div className="div_presentation_listesfenetres">
            <div className="div_titre_ligne_fenetres">
              <h3 className="titre_ligne_fenetres">Nos fenetres</h3>
            </div>
            {inclutMateriau("PVC", filtre) && (
            <Link to="/Ecommerce_siteweb_projet_seg3525/produit/fenetre-auvent">
              <div className="div_presentation_carteproduit">
                <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/fenetre_exterieur_auvent_regulier_canada.png`} />
                <p className="texte_nom_produit_grid_presentation">Fenetre à auvent</p>
                <p className="texte_nom_materiau_grid_presentation">(PVC)</p>
              </div>
            </Link>
            )}
            {inclutMateriau("PVC", filtre) && (
            <Link to="/Ecommerce_siteweb_projet_seg3525/produit/fenetre-guillotine">
              <div className="div_presentation_carteproduit">
                <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/fenetre_exterieur_guillotine_regulier_canada.png`} />
                <p className="texte_nom_produit_grid_presentation">Fenetre guillotine</p>
                <p className="texte_nom_materiau_grid_presentation">(PVC)</p>
              </div>
            </Link>
            )}
            {inclutMateriau("PVC", filtre) && (
            <Link to="/Ecommerce_siteweb_projet_seg3525/produit/fenetre-battante">
              <div className="div_presentation_carteproduit">
                <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/fenetre_exterieur_battant_regulier_canada.png`} />
                <p className="texte_nom_produit_grid_presentation">Fenetre battant</p>
                <p className="texte_nom_materiau_grid_presentation">(PVC)</p>
              </div>
            </Link>
             )}
             {inclutMateriau("PVC", filtre) && (
            <Link to="/Ecommerce_siteweb_projet_seg3525/produit/fenetre-coulissante">
              <div className="div_presentation_carteproduit">
                <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/fenetre_exterieur_coulissante_regulier_canada.png`} />
                <p className="texte_nom_produit_grid_presentation">Fenetre coulissante</p>
                <p className="texte_nom_materiau_grid_presentation">(PVC)</p>
              </div>
            </Link>
             )}
             {inclutMateriau("Hybride", filtre) && (
            <Link to="/Ecommerce_siteweb_projet_seg3525/produit/fenetre-architecturale">
              <div className="div_presentation_carteproduit">
                <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/fenetre_exterieur_architecturale_regulier_canada.png`} />
                <p className="texte_nom_produit_grid_presentation">Fenetre architecturale</p>
                <p className="texte_nom_materiau_grid_presentation">(Hybride)</p>
              </div>
            </Link>
            )}
            {inclutMateriau("PVC", filtre) && (
            <Link to="/Ecommerce_siteweb_projet_seg3525/produit/fenetre-basculante">
              <div className="div_presentation_carteproduit">
                <img className="img_presentation_carteproduit" src={`${process.env.PUBLIC_URL}/images/fenetre_exterieur_basculante_regulier_canada.png`} />
                <p className="texte_nom_produit_grid_presentation">Fenetre basculante</p>
                <p className="texte_nom_materiau_grid_presentation">(PVC renforcé)</p>
              </div>
            </Link>
             )}
          </div>
        </div>
      </section>
      <section>
        <div className="div_a_propos_court">
          <h2>Pourquoi nous choisir?</h2>
          <p>
            Produits conçus pour le climat canadien. Qualité locale, installation rapide et service attentionné.
            Choisissez la sécurité, le style et la durabilité avec Portes & Fenêtres.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Accueil;
