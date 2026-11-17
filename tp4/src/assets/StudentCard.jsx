function StudentCard({ etudiant, onModifier, onSupprimer }) {
  return (
    <div className="student-card">
      {etudiant.image && (
        <img src={etudiant.image} alt={etudiant.nom} width="80" />
      )}
      <h3>{etudiant.prenom} {etudiant.nom}</h3>
      <p>{etudiant.email} — {etudiant.telephone}</p>
      <p>{etudiant.filiere} • Année {etudiant.anneeEtude} • Groupe {etudiant.groupe} • {etudiant.ville}</p>

      <button type="button" onClick={() => onModifier(etudiant)}>Modifier</button>
      <button type="button" onClick={() => onSupprimer(etudiant.id)}>Supprimer</button>
    </div>
  );
}

export default StudentCard;