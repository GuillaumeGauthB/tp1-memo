import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import Taches from './Taches';
import Accueil from './Accueil';
import Utilisateur from './Utilisateur';
import { useState, useEffect } from 'react';
import { observerEtatConnexion } from '../code/utilisateur-modele';
import * as tacheModele from '../code/tache-modele';

export default function Appli() {

  // État utilisateur
  const [utilisateur, setUtilisateur] = useState(null);

  // Etat des 'taches' de l'utilisateur
  const [taches, setTaches] = useState([]);

  console.log(new Date().getHours())

  // Fonction qui ajoute un document sur Firebase
  function gererAjoutTache(texte){
    // Code Firestore
    tacheModele.creer(utilisateur.uid, {
      texte: texte,
      date: new Date(),
      fini: false
    }).then(
      doc => setTaches([{id: doc.id, ...doc.data()}, ...taches])
    )
  }

  // Surveiller l'état de la connexion Firebase Auth
  useEffect(() => observerEtatConnexion(setUtilisateur),[]);

  return (
    // 1)  Si un utilisateur est connecté : 
    utilisateur ?
      <div className="Appli">
        <header className="appli-entete">
          <img src={logo} className="appli-logo" alt="Memo" />
          <Utilisateur utilisateur={utilisateur}/>
        </header>
        <Taches taches={taches} setTaches={setTaches} utilisateur={utilisateur} gererAjoutTache={gererAjoutTache} />
        <Controle />
      </div>
      :
      <div className="Appli">
        <Accueil />
      </div>

    // 2) Par contre si aucun utilisateur n'est connecté, on affiche plutôt le composant suivant : 
      // <Accueil />
  );
}
