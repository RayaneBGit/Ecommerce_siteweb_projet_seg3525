function Contact() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contactez-nous</h1>
      <p>Des questions? Besoin d'aide pour vos portes et fenêtres? Écrivez-nous!</p>
      <form>
        <label>Nom :</label>
        <input type="text" required /><br /><br />

        <label>Courriel :</label>
        <input type="email" required /><br /><br />

        <label>Sujet :</label>
        <select required>
          <option>Question</option>
          <option>Demande de devis</option>
          <option>Problème</option>
          <option>Autre</option>
        </select><br /><br />

        <label>Message :</label>
        <textarea rows="4" required></textarea><br /><br />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
export default Contact;
