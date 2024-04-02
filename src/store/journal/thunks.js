import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./"
import { loadNotes } from "../../helpers"

export const startNewNote = () => {
    return async(dispatch, getState) => {
        dispatch(savingNewNote())
        //obtengo el uid del usuario autenticado
        const {uid} = getState().auth
        //defina ruta donde se alamacena la info
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        //obtengo el uid del usuario autenticado
        const {uid} = getState().auth

        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}
