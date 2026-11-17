import { useState } from "react";
import StudentForm from "./assets/StudentForm";
import StudentCard from "./assets/StudentCard";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1, nom: "Ben Ali", prenom: "Sara", email: "sara@mail.com",
      telephone: "22334455", filiere: "GLSI", anneeEtude: "2",
      groupe: "G1", ville: "Tunis", image: "",
    },
  ]);

  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = { ...nouvelEtudiant, id: Date.now() };
    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
  }

  function supprimerEtudiant(id) {
    setEtudiants((anciens) => anciens.filter((e) => e.id !== id));
  }

  function modifierEtudiant(etudiant) {
    setEtudiantAModifier(etudiant);
  }

  function enregistrerModification(etudiantModifie) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((etudiant) =>
        etudiant.id === etudiantAModifier.id
          ? { ...etudiantModifie, id: etudiant.id }
          : etudiant
      )
    );
    setEtudiantAModifier(null);
  }

  return (
    <div>
      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={enregistrerModification}
      />

      <div className="liste">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            etudiant={etudiant}
            onModifier={modifierEtudiant}
            onSupprimer={supprimerEtudiant}
          />
        ))}
      </div>
    </div>
  );
}

export default App;