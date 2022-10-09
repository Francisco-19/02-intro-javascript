import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        note: [],
        active: null,
        // active:{
        //     id:'ABC123',
        //     title:'',
        //     body:'',
        //     date:'',
        //     imageUrl:[],//hola.jpg,hola.png
        // }
    },
    reducers: {
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNote: (state) => {

        },
        setSaving: (state, action) => {

        },
        updateNote: (state, action) => {

        },
        delateNodeById: (state, action) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    setActiveNote,
    setNote,
    setSaving,
    updateNote,
    delateNodeById
} = journalSlice.actions;