import Accueil from './Accueil';
import PageUtilisateur from './PageUtilisateur';
import './Appli.scss';
import { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, bd } from '../code/init';
import { doc, setDoc } from 'firebase/firestore';
import { observerEtatConnexion } from '../code/utilisateur-modele';

// On créé une variable "globale" qui pourra être partagée avec 
// toute une hirérarchie de composants d'un seul coup
export const UtilisateurContext = createContext(null);

export default function Appli() {
    // État de connexion d'un utilisateur
    const [utilisateur, setUtilisateur] = useState(null);

    useEffect(
        () => observerEtatConnexion(setUtilisateur),
        []
    );

    return (
        utilisateur 
            ? 
            // On partage la variable de contexte avec le composant
            // PageUtilisateur et TOUS ses descendants
            <UtilisateurContext.Provider value={utilisateur}>
                <PageUtilisateur /> 
            </UtilisateurContext.Provider>
            : 
            <Accueil/> 
    );
}