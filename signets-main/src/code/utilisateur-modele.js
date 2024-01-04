import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, bd, googleAuth } from "./init";

export function deconnexion() {
    auth.signOut();
}

export function connexion() {
    signInWithPopup(auth, googleAuth);
}

export function observerEtatConnexion(mutateurUtilisateur) {
    onAuthStateChanged(auth, u => {
        if(u) {
            //créer le document correspondant à cet utilisateur dans Firestore
            setDoc(doc(bd, 'utilisateurs-signets', u.uid), {
                nom: u.displayName,
                courriel: u.email,
                avatar: u.photoURL
            }, {merge: true});
        }
        mutateurUtilisateur(u);
    })
}