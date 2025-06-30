import Accueil from './Accueil';
import './App.css';
import {  Routes, Route, Link } from 'react-router-dom';
import ProduitPage from './ProduitPage'; 
import PanierPage from './PanierPage';
function App() {
  return (
    <div className="app_div">
      <header>
        <nav>
            <ul>
                <li>
                    <Link className="lien_header" to="/Ecommerce_siteweb_projet_seg3525/">
                    Accueil
                    </Link>
                </li>
                <li>
                    <Link className="lien_header" to="/Ecommerce_siteweb_projet_seg3525/panier">
                    Panier 
                    </Link>
                </li>
                 <li>
                    <Link className="lien_header" to="/Ecommerce_siteweb_projet_seg3525/promotion">
                    Promotion
                    </Link>
                </li>
                <li>
                    <Link className="lien_header" to="/Ecommerce_siteweb_projet_seg3525/contact">
                    Contact
                    </Link>
                </li>
                <li>
                    <Link className="lien_header" to="/Ecommerce_siteweb_projet_seg3525/apropos">
                    À propos
                    </Link>
                </li>
            </ul>
        </nav>
      </header>
      <main>
      <Routes>
        <Route path="/Ecommerce_siteweb_projet_seg3525" element={<Accueil/>}/>
        <Route path="/Ecommerce_siteweb_projet_seg3525/produit/:slug" element={<ProduitPage/>}/>
        <Route path="/Ecommerce_siteweb_projet_seg3525/panier" element={<PanierPage/>}/>
      </Routes>
      </main>
      <footer>
        <p className="paragraph_droits_auteurs_footer">© 2025 Rayane B. & Yasmine B. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
