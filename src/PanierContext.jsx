
import { createContext, useContext, useState } from 'react';



const PanierContext = createContext();


export function PanierProvider({ children }) {

    const [panier, setPanier] = useState([]);

    function ajouterAuPanier(produit) {
        setPanier((prev) => [...prev, produit]);
    }
    function supprimerDuPanier(produit_a_supprimer){
        setPanier(panier.filter(autreproduit=>autreproduit !== produit_a_supprimer))
    }
    return (
        <PanierContext.Provider value={{ panier, ajouterAuPanier, supprimerDuPanier, setPanier }}>
            {children}
        </PanierContext.Provider>
    );
}

export function usePanier(){
    return useContext(PanierContext);
}