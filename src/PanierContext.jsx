
import { createContext, useContext, useState } from 'react';



const PanierContext = createContext();


export function PanierProvider({ children }) {

    const [panier, setPanier] = useState([]);

    function ajouterAuPanier(produit) {
        setPanier((prev) => [...prev, produit]);
    }

    return (
        <PanierContext.Provider value={{ panier, ajouterAuPanier }}>
            {children}
        </PanierContext.Provider>
    );
}

export function usePanier(){
    return useContext(PanierContext);
}