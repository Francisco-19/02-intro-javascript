import { async } from "@firebase/util"
import { doc } from "firebase/firestore/lite";


export const statNewNote = () => {
    return async( dispatch , getState)=>{
        
        const { uid } = getState().auth;

        //id

        // const newNote={
        //     title:'',
        //     body:'',
        //     date:new Date().gatTime()
        // }

        const newDoc =doc(c)
        //! dispatch

        // dispatch(newNote)
        // dispatch( active Note)

    }
}