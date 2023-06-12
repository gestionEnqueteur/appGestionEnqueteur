import { configureStore, createSlice } from '@reduxjs/toolkit';

// Étape 1: Création du slice avec Redux Toolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// Étape 2: Création du store avec Redux Toolkit
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Étape 3: Lecture d'une variable du store
console.log('Initial state:', store.getState()); // Affiche: 0

// Étape 4: Mise à jour d'une variable du store
store.dispatch(counterSlice.actions.increment());

// Étape 5: Lecture de la variable mise à jour
console.log('Updated state:', store.getState()); // Affiche: 1

// Étape 6: Effacement d'une variable du store
store.dispatch(counterSlice.actions.decrement());

// Étape 7: Lecture de la variable mise à jour
console.log('Final state:', store.getState()); // Affiche: 0



export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;

export default store;