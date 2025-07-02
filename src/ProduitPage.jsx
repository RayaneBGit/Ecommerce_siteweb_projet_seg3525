
import './ProduitPage.css';
import { useParams } from 'react-router-dom';
import { usePanier } from './PanierContext';
import { useState } from 'react';
function ProduitPage() {

    const produits = {

        "porte-classique-6-panneaux": {
            nom: "Porte Classique 6 Panneaux",
            description: "Une porte d'entrée en acier au style traditionnel, dotée de six panneaux moulés en relief. Ce modèle offre une allure symétrique et élégante qui s’intègre aussi bien dans un style résidentiel classique que contemporain. Fabriquée en acier galvanisé, elle offre une excellente résistance aux chocs, aux intempéries et à l’usure. Elle est conçue pour affronter les rigueurs du climat canadien, tout en garantissant une bonne isolation thermique. Sa surface lisse au fini gris standard usine peut être peinte selon vos préférences.",
            image: `${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada.png`,
            prix: 130,
            couleurs: [
                "défaut / gris standard usine",
                "blanc",
                "noir",
                "gris clair",
                "gris foncé",
                "anthracite",
                "beige sable",
                "marron foncé",
                "bordeaux",
                "bleu marine",
                "vert forêt",
                "brun chocolat"
            ],
            largeur: 36,               // pouces (standard au Canada)
            hauteur: 80,               // pouces (standard)
            epaisseur: 1.75,           // pouces
            poids_approx: 38,          // kg estimé pour acier
            materiau: "acier galvanisé",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "aucun",
            type_ouverture: "droite",  // ce qu'on devine par défaut (image = poignée gauche)
            code_produit: "PC6P001"
        },
        "porte-elegance-arrondie": {
            nom: "Porte Élégance Arrondie",
            description: "Cette porte d'entrée en acier présente un style raffiné avec son arc en haut du panneau supérieur. Le relief subtil et l’arrondi central évoquent l’élégance des demeures classiques. Solide, durable et isolée, elle est parfaite pour les résidences cherchant un équilibre entre charme traditionnel et efficacité moderne.",
            image: `${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_3.png`,
            prix: 165,
            couleurs: ["défaut / gris standard usine", "blanc", "noir", "anthracite", "gris clair", "chêne clair", "chêne foncé", "noyer", "bordeaux"],
            largeur: 36,
            hauteur: 80,
            epaisseur: 1.75,
            poids_approx: 40,
            materiau: "acier galvanisé",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "aucun",
            type_ouverture: "droite",
            code_produit: "PEA002"
        }
        ,
        "porte-vitree-pleine-moderne": {
            nom: "Porte Vitrée Pleine Moderne",
            description: "Dotée d’un grand panneau de verre trempé, cette porte moderne maximise la lumière naturelle tout en conservant une structure en acier solide. Son style minimaliste la rend idéale pour les maisons contemporaines. Verre sécuritaire et thermos double pour une meilleure isolation.",
            image: `${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_2.png`,
            prix: 195,
            couleurs: ["défaut / gris standard usine", "blanc", "noir", "gris foncé", "aluminium", "acier brossé"],
            largeur: 36,
            hauteur: 80,
            epaisseur: 1.75,
            poids_approx: 45,
            materiau: "acier avec verre trempé",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "verre trempé clair",
            type_ouverture: "droite",
            code_produit: "PVM003"
        }
        ,
        "porte-demi-lune-classique": {
            nom: "Porte Demi-Lune Classique",
            description: "Inspirée des designs traditionnels nord-américains, cette porte présente un petit vitrage demi-lune dans la partie supérieure, permettant un apport de lumière sans compromis sur l’intimité. Fabriquée en acier, elle allie esthétisme classique et sécurité.",
            image: `${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_4.png`,
            prix: 175,
            couleurs: ["défaut / gris standard usine", "blanc", "gris clair", "bordeaux", "noyer"],
            largeur: 36,
            hauteur: 80,
            epaisseur: 1.75,
            poids_approx: 42,
            materiau: "acier",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "verre givré en demi-lune",
            type_ouverture: "droite",
            code_produit: "PDLC004"
        }
        ,
        "porte-vision-depolie": {
            nom: "Porte Vision Dépolie",
            description: "Cette porte est dotée d’un vitrage vertical étroit en verre dépoli, offrant une lumière naturelle diffuse tout en préservant l’intimité. Un excellent choix pour ceux qui veulent combiner lumière, discrétion et modernité dans une porte d’entrée robuste.",
            image: `${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_5.png`,
            prix: 180,
            couleurs: ["défaut / gris standard usine", "blanc", "anthracite", "gris foncé"],
            largeur: 36,
            hauteur: 80,
            epaisseur: 1.75,
            poids_approx: 43,
            materiau: "acier avec verre dépoli",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "verre givré vertical",
            type_ouverture: "droite",
            code_produit: "PVD005"
        }
        ,
        "porte-majestique-a-arches": {
            nom: "Porte Majestique à Arches",
            description: "Avec ses doubles arcs moulés en relief dans la partie supérieure, cette porte dégage prestige et élégance. Conçue en acier renforcé, elle offre une sécurité supérieure tout en présentant une allure royale, parfaite pour les entrées imposantes ou les maisons à cachet.",
            image: `${process.env.PUBLIC_URL}/images/porte_exterieur_style_regulier_canada_6.png`,
            prix: 210,
            couleurs: ["défaut / gris standard usine", "noir", "acier brossé", "cuivre", "bordeaux", "chêne foncé"],
            largeur: 36,
            hauteur: 80,
            epaisseur: 2,
            poids_approx: 48,
            materiau: "acier renforcé",
            usage: "extérieur",
            isolee: true,
            anti_effraction: true,
            type_verre: "aucun",
            type_ouverture: "droite",
            code_produit: "PMA006"
        },
        "fenetre-auvent": {
            nom: "Fenêtre à auvent",
            description: "Fenêtre s’ouvrant vers l’extérieur par le bas grâce à une charnière en haut. Idéale pour aérer même en cas de pluie. Excellente étanchéité à l'air.",
            image: `${process.env.PUBLIC_URL}/images/fenetre_exterieur_auvent_regulier_canada.png`,
            prix: 235,
            couleurs: ["blanc", "noir", "gris clair", "anthracite"],
            largeur: 36,
            hauteur: 24,
            epaisseur: 1.5,
            poids_approx: 18,
            materiau: "PVC",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "verre double clair",
            type_ouverture: "haut (à projection)",
            code_produit: "FA001"
        }
        , "fenetre-guillotine": {
            nom: "Fenêtre guillotine",
            description: "Fenêtre verticale composée de deux volets superposés, le bas coulisse vers le haut. Couramment utilisée dans les maisons traditionnelles.",
            image: `${process.env.PUBLIC_URL}/images/fenetre_exterieur_guillotine_regulier_canada.png`,
            prix: 250,
            couleurs: ["blanc", "gris clair", "beige"],
            largeur: 32,
            hauteur: 48,
            epaisseur: 1.5,
            poids_approx: 22,
            materiau: "PVC",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "verre double clair",
            type_ouverture: "verticale (coulissante)",
            code_produit: "FG002"
        }
        , "fenetre-battante": {
            nom: "Fenêtre battante",
            description: "Fenêtre qui s’ouvre vers l’extérieur à l’aide d’une poignée latérale. Pratique pour un accès complet à l’extérieur.",
            image: `${process.env.PUBLIC_URL}/images/fenetre_exterieur_battant_regulier_canada.png`,
            prix: 245,
            couleurs: ["blanc", "noir", "gris clair"],
            largeur: 30,
            hauteur: 36,
            epaisseur: 1.5,
            poids_approx: 20,
            materiau: "PVC",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "verre double clair",
            type_ouverture: "droite",
            code_produit: "FB003"
        }
        ,
        "fenetre-coulissante": {
            nom: "Fenêtre coulissante",
            description: "Fenêtre à ouverture latérale glissant sur un rail. Gain de place et bonne aération. Parfaite pour les espaces restreints.",
            image: `${process.env.PUBLIC_URL}/images/fenetre_exterieur_coulissante_regulier_canada.png`,
            prix: 230,
            couleurs: ["blanc", "noir", "aluminium"],
            largeur: 48,
            hauteur: 36,
            epaisseur: 1.5,
            poids_approx: 25,
            materiau: "PVC",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "verre double clair",
            type_ouverture: "latérale (coulissante)",
            code_produit: "FC004"
        }
        , "fenetre-architecturale": {
            nom: "Fenêtre architecturale",
            description: "Fenêtre au design arrondi, apportant lumière et style unique. Souvent utilisée en complément ou pour un effet décoratif.",
            image: `${process.env.PUBLIC_URL}/images/fenetre_exterieur_architecturale_regulier_canada.png`,
            prix: 280,
            couleurs: ["blanc", "gris clair", "noir"],
            largeur: 36,
            hauteur: 48,
            epaisseur: 1.5,
            poids_approx: 24,
            materiau: "PVC ou hybride",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "verre double clair",
            type_ouverture: "fixe (non ouvrante)",
            code_produit: "FA005"
        }
        , "fenetre-basculante": {
            nom: "Fenêtre basculante",
            description: "Fenêtre s’ouvrant par basculement vers l’intérieur, souvent utilisée dans les sous-sols ou salles de bain. Compacte et sécuritaire.",
            image: `${process.env.PUBLIC_URL}/images/fenetre_exterieur_basculante_regulier_canada.png`,
            prix: 220,
            couleurs: ["blanc", "noir", "gris clair"],
            largeur: 28,
            hauteur: 20,
            epaisseur: 1.5,
            poids_approx: 17,
            materiau: "PVC renforcé",
            usage: "extérieur",
            isolee: true,
            anti_effraction: false,
            type_verre: "verre double clair",
            type_ouverture: "basculante (intérieure)",
            code_produit: "FB006"
        }

    }


    const { slug } = useParams();

    const produit = produits[slug];

    const [couleurSelectionnee, setCouleurSelectionnee] = useState(produit.couleurs[0]);

    const { ajouterAuPanier } = usePanier();
    


   function ajouterPanierProduit() {
    const produitAvecCouleur = {
        ...produit,
        couleurChoisie: couleurSelectionnee
    };
    ajouterAuPanier(produitAvecCouleur);
}

    if (!produit) {
        return <h1>Page introuvable</h1>
    }

    return (
        <div>
            <h1>{produit.nom}</h1>
            <img src={produit.image} />
            <p>{produit.description}</p>
            <p>Prix : {produit.prix} $</p>
            <h3>Choisisez une couleur: </h3>
            <div className="radio-couleurs">
                {produit.couleurs.map((couleur, index) => (
                    <label key={index}>
                        <input type="radio"
                            checked={couleurSelectionnee == couleur}
                            onChange={() => setCouleurSelectionnee(couleur)}></input>
                        {couleur}
                    </label>
                ))}
            </div>
            <input type="button" onClick={ajouterPanierProduit} value="Ajouter au panier"></input>
        </div>

    );
}

export default ProduitPage;
