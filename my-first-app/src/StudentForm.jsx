import { useState } from 'react'
import './StudentForm.css'

function StudentForm({ onAjouterEtudiant }) {
  // Une "boîte" (state) pour chaque champ, vide au départ
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [filiere, setFiliere] = useState('')
  const [anneeEtude, setAnneeEtude] = useState('')
  const [groupe, setGroupe] = useState('')
  const [ville, setVille] = useState('')
  const [image, setImage] = useState('')

  // S'exécute quand on clique sur "Ajouter"
  function handleSubmit(e) {
    e.preventDefault() // empêche la page de se recharger

    // On met toutes les valeurs dans un seul objet
    const nouvelEtudiant = {
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: telephone,
      filiere: filiere,
      anneeEtude: anneeEtude,
      groupe: groupe,
      ville: ville,
      image: image,
    }

    // On envoie l'étudiant à App.jsx
    onAjouterEtudiant(nouvelEtudiant)

    // On vide le formulaire
    setNom('')
    setPrenom('')
    setEmail('')
    setTelephone('')
    setFiliere('')
    setAnneeEtude('')
    setGroupe('')
    setVille('')
    setImage('')
    e.target.reset()
  }

  // S'exécute quand on choisit une image
  function handleImage(e) {
    const fichier = e.target.files[0] // le premier fichier choisi
    if (fichier) {
      setImage(URL.createObjectURL(fichier))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Ajouter un étudiant</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
          required
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Année d'étude :</label>
        <input
          type="number"
          id="anneeEtude"
          min="1"
          max="5"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImage}
        />
      </div>

      <button type="submit" className="btn-submit">Ajouter</button>
    </form>
  )
}

export default StudentForm