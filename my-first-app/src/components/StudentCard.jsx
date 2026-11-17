import './StudentCard.css'

function StudentCard(props) {
  // Props par défaut : si la ville n'est pas fournie
  const ville = props.ville || 'Non renseignée'

  return (
    <div className="card">
      {/* Si on a une image on l'affiche, sinon on affiche l'initiale du prénom */}
      {props.image ? (
        <img src={props.image} alt={props.prenom} />
      ) : (
        <div className="avatar">{props.prenom[0]}</div>
      )}

      <h2>Fiche étudiant</h2>

      <p><strong>Nom & Prénom :</strong> {props.prenom} {props.nom}</p>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {ville}</p>
    </div>
  )
}

export default StudentCard