import { useState } from 'react'
import StudentForm from './StudentForm'
import './App.css'

function App() {
  // La liste des étudiants, vide au départ
  const [etudiants, setEtudiants] = useState([])

  // Cette fonction reçoit un étudiant du formulaire et l'ajoute à la liste
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
    }

    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId])
  }

  return (
    <div>
      {/* On envoie la fonction au formulaire avec les props */}
      <StudentForm onAjouterEtudiant={ajouterEtudiant} />

      <div className="liste">
        <h2>Liste des étudiants ({etudiants.length})</h2>

        {etudiants.map((etudiant) => (
          <div className="carte" key={etudiant.id}>
            {etudiant.image && <img src={etudiant.image} alt={etudiant.nom} />}
            <div>
              <p><strong>{etudiant.prenom} {etudiant.nom}</strong></p>
              <p>{etudiant.email} - {etudiant.telephone}</p>
              <p>{etudiant.filiere} - Année {etudiant.anneeEtude} - Groupe {etudiant.groupe}</p>
              <p>{etudiant.ville}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App