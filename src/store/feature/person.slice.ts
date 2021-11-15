import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
    name: 'person',
    initialState: {
        persons: [],
        initialId: 0
    },
    reducers:{
        addPerson: (state, {payload}) => {
            state.persons.push({
                id: state.initialId++,
                nom: payload.nom,
                prenom: payload.prenom
            })
        }
    }
})

export const { addPerson } = personSlice.actions
export default personSlice.reducer