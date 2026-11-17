import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAjouterEtudiant, etudiantAModifier, onModifierEtudiant }) {
  const [formData, setFormData] = useState({
    nom: etudiantAModifier?.nom || "",
    prenom: etudiantAModifier?.prenom || "",
    email: etudiantAModifier?.email || "",
    telephone: etudiantAModifier?.telephone || "",
    filiere: etudiantAModifier?.filiere || "",
    anneeEtude: etudiantAModifier?.anneeEtude || "",
    groupe: etudiantAModifier?.groupe || "",
    ville: etudiantAModifier?.ville || "",
    image: etudiantAModifier?.image || "",
  });

  const [erreurs, setErreurs] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleImage(e) {
    const fichier = e.target.files[0];
    if (fichier) {
      setFormData({ ...formData, image: URL.createObjectURL(fichier) });
    }
  }

  function validerFormulaire() {
    const nouvellesErreurs = {};

    if (!formData.nom.trim()) {
      nouvellesErreurs.nom = "Le nom est obligatoire";
    }
    if (!formData.prenom.trim()) {
      nouvellesErreurs.prenom = "Le prénom est obligatoire";
    }

    if (!formData.email.trim()) {
      nouvellesErreurs.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nouvellesErreurs.email = "L'email n'est pas valide";
    }

    if (!formData.telephone.trim()) {
      nouvellesErreurs.telephone = "Le téléphone est obligatoire";
    } else if (!/^[0-9]{8}$/.test(formData.telephone)) {
      nouvellesErreurs.telephone = "Le téléphone doit contenir 8 chiffres";
    }

    if (!formData.filiere) {
      nouvellesErreurs.filiere = "Choisir une filière";
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validerFormulaire()) {
      return;
    }

    const nouvelEtudiant = { ...formData };

    if (etudiantAModifier) {
      onModifierEtudiant({ ...etudiantAModifier, ...nouvelEtudiant });
    } else {
      onAjouterEtudiant(nouvelEtudiant);
      setFormData({
        nom: "", prenom: "", email: "", telephone: "",
        filiere: "", anneeEtude: "", groupe: "", ville: "", image: "",
      });
      setErreurs({});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="student-form" noValidate>
      <h2>{etudiantAModifier ? "Modifier l'étudiant" : "Ajouter un étudiant"}</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text" id="nom" name="nom"
          value={formData.nom} onChange={handleChange}
          placeholder="Saisir le nom"
        />
        {erreurs.nom && <p className="error-msg">{erreurs.nom}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text" id="prenom" name="prenom"
          value={formData.prenom} onChange={handleChange}
          placeholder="Saisir le prénom"
        />
        {erreurs.prenom && <p className="error-msg">{erreurs.prenom}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email" id="email" name="email"
          value={formData.email} onChange={handleChange}
          placeholder="exemple@mail.com"
        />
        {erreurs.email && <p className="error-msg">{erreurs.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel" id="telephone" name="telephone"
          value={formData.telephone} onChange={handleChange}
          placeholder="12345678" maxLength={8}
        />
        {erreurs.telephone && <p className="error-msg">{erreurs.telephone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere" name="filiere"
          value={formData.filiere} onChange={handleChange}
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
        {erreurs.filiere && <p className="error-msg">{erreurs.filiere}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Année d'étude :</label>
        <input
          type="number" id="anneeEtude" name="anneeEtude" min="1" max="5"
          value={formData.anneeEtude} onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text" id="groupe" name="groupe"
          value={formData.groupe} onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text" id="ville" name="ville"
          value={formData.ville} onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input type="file" id="image" accept="image/*" onChange={handleImage} />
        {formData.image && (
          <img src={formData.image} alt="Aperçu" className="preview" />
        )}
      </div>

      <button type="submit" className="btn-submit">
        {etudiantAModifier ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
}

export default StudentForm;