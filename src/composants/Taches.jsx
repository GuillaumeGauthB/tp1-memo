import Tache from './Tache';
import './Taches.scss';
import * as tacheModele from '../code/tache-modele';
import { useEffect, useState } from 'react';

export default function Taches({taches, setTaches, utilisateur, gererAjoutTache}) {
  const [texte, setTexte] = useState('')
  // Lire les donnees de la base de donnee pour afficher les taches
  useEffect(
    () => tacheModele.lireTout(utilisateur.uid).then(
      lesTaches => setTaches(lesTaches)
    ),
    [utilisateur, setTaches]
  );

  // Soumettre formulaire
  function gererSoumettre(event){
    gererAjoutTache(texte);
    // setTexte('');
    event.preventDefault();
    event.target[0].value = '';
  }

  return (
    <section className="Taches">
      <form onSubmit={e => gererSoumettre(e)}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off" 
          onChange={evt => setTexte(evt.target.value)}
        />
      </form>
      <div className="liste-taches">
        {
          taches.map(
            tache => <div key={tache.id}><Tache {...tache} /> </div>
          )
        }
      </div>
    </section>
  );
}