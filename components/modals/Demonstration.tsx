import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CounterComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleCreate = () => {
    dispatch({ type: 'CREATE', payload: inputValue });
    setInputValue('');
  };

  const handleUpdate = () => {
    dispatch({ type: 'UPDATE', payload: inputValue });
    setInputValue('');
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE' });
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      <p>Current Counter Value: {counter}</p>
    </div>
  );
};

export default CounterComponent;
