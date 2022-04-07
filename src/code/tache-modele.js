import { getDocs, collection } from '@firebase/firestore';
import { addDoc, Timestamp, getDoc } from 'firebase/firestore';
import {bdFirestore} from './init';

/**
 * Obtenir toutes les taches d'un utilisateur
 * @param {string} idUtilisateur Identifiant Firebase de l'utilisateur connecter
 * @returns {Promise<any[]>} Promesse avec le tableau des taches lorsque la promesse est completee
 */

export async function lireTout(idUtilisateur){
    return getDocs(collection(bdFirestore, 'memo', idUtilisateur, "taches")).then(
        res => res.docs.map(doc => ({id: doc.id, ...doc.data()}))
    );
}

export async function creer(idUtilisateur, tache){
    //  On ajoute dateModif a l'objet tache
    tache.dateModif =  Timestamp.now();
    let coll = collection(bdFirestore, 'memo', idUtilisateur, "taches");
    let refDoc = await addDoc(coll, tache);
    return await getDoc(refDoc);
}