
import './Accueil.css';
function Accueil() {
  return (
    <main>
        <section className="hero_presentation">
           <div className="banniere_page_accueil"   style={
            
            {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${process.env.PUBLIC_URL}/images/maison_accueil_page_variation2.png)`
            }
  
            }>
            <div className="div_titre_page_accueil_banniere">
            <h1 className="titre_page_accueil_banniere">Des portes et des fenètres pour un intérieur chaud et sécurisant</h1>
            
            </div>
           </div>
        </section>
    </main>
  );
}

export default Accueil;
