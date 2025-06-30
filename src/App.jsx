import Accueil from './Accueil';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li>
                    <a className="lien_header">
                    Accueil
                    </a>
                </li>
                <li>
                    <a className="lien_header">
                    Panier
                    </a>
                </li>
                 <li>
                    <a className="lien_header">
                    Promotion
                    </a>
                </li>
                <li>
                    <a className="lien_header">
                    Contact
                    </a>
                </li>
                <li>
                    <a className="lien_header">
                    À propos
                    </a>
                </li>
            </ul>
        </nav>
      </header>
      <Accueil></Accueil>
      <footer>
        <p className="paragraph_droits_auteurs_footer">© 2025 Rayane B. & Yasmine B. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
