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
    </div>
  );
}

export default App;
