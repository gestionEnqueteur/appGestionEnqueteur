import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement }  from "./components/modals/Store"

interface RootState {
  counter: number;
  }

const CounterDisplay = () => {
const dispatch = useDispatch();
const counter = useSelector((state: RootState) => state.counter);

const handleCreate = () => {
// Dispatch de l'action d'incrémentation
dispatch(increment());
};

const handleRead = () => {
// Lecture de l'état actuel du store
console.log('Current state:', counter);
};

const handleUpdate = () => {
// Dispatch de l'action de décrémentation
dispatch(decrement());
};

const handleDelete = () => {
// Dispatch de l'action de réinitialisation
// Remarque : vous devrez définir l'action de réinitialisation dans votre slice
// et l'appeler ici.
};

return (
<div>
<h1>Counter: {counter}</h1>
<button onClick={handleCreate}>Create</button>
<button onClick={handleRead}>Read</button>
<button onClick={handleUpdate}>Update</button>
<button onClick={handleDelete}>Delete</button>
</div>
);
};

export default CounterDisplay;

