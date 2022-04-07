import './Tache.scss';
import * as tacheContenu from '../code/tache-contenu-modele';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Tache({texte, date}) {
  return (
    <div className="Tache">
      <CheckCircleIcon style={{color: 'green'}} />
      <span className="texte">{texte}</span>
      <span className="date">{tacheContenu.formatterTimestamp(date.seconds)}</span>
      <RemoveCircleIcon style={{color: 'red'}} />
    </div>
  );
}
