import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import StudentCard from './components/StudentCard.jsx'
import Footer from './components/Footer.jsx'
import islem from './assets/islem.jpg'

const etudiants = [
  {
    prenom: 'islem',
    nom: 'ben salem',
    email: 'azea01906@gmail.com',
    telephone: '+216 20 823936',
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: '2ème année',
    groupe: 'GLSI 2',
    ville: 'Mahdia',
  },
  {
    prenom: 'Sarra',
    nom: 'Trabelsi',
    email: 'sarra.trabelsi@gmail.com',
    telephone: '+216 22 345 678',
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: '2ème année',
    groupe: 'GLSI 1',
    ville: 'Sousse',
  },
  {
    prenom: 'Mariem',
    nom: 'Khalfallah',
    email: 'mariem.khalfallah@gmail.com',
    telephone: '+216 27 567 890',
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: '2ème année',
    groupe: 'GLSI 2',
  
  },
]

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.prenom === 'islem' ? islem : null}
          />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default App