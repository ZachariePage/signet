import './Entete.scss';
import Avatar from '@mui/material/Avatar';
import { deconnexion } from '../code/utilisateur-modele';
import { UtilisateurContext } from './Appli';
import { useContext } from 'react';

export default function Entete() {
  const utilisateur = useContext(UtilisateurContext);
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="utilisateur">
        {utilisateur.displayName}
        <Avatar className="avatar" alt={utilisateur.displayName} src={utilisateur.photoURL} />
        <button onClick={deconnexion}>Déconnexion</button>
      </div>
    </header>
  );
}