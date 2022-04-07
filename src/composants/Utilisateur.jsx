import './Utilisateur.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { deconnexion } from '../code/utilisateur-modele';

export default function Utilisateur({utilisateur}) {
  return (
    <div className="Utilisateur">
      <span className="nom">{utilisateur.displayName}</span>
      <Avatar src={utilisateur.photoURL} className="avatar" alt="Le même Monsieur Untel" title="Email de l'utilisateur ici" />
      
      <Button 
        variant="outlined"
        size="small"
        className="btn-deconnexion"
        onClick={deconnexion}
      >
        Déconnexion
      </Button>
    </div>
  );
}