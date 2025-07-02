import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <div>
            <h1>404</h1>
            <p>Oups, cette page n'existe pas !</p>
             <Link to="/Ecommerce_siteweb_projet_seg3525">Retour à l'accueil</Link>
        </div>

    );
}

export default ErrorPage;
