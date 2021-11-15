import { configureStore } from "@reduxjs/toolkit";
import Person from './feature/person.slice'

const store = configureStore({
    reducer:{ Person }
})

export { store }