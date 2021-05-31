import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';

function App() {
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native',
    'Node.js',
  ])
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([ ...tech, newTech])
  }

  return (
    <>
    <ul>
      {tech.map(t => ( <li key={t}>{t}</li>) )}
    </ul>
    <input value={newTech} onChange={e => setNewTech(e.target.value )}/>
    <button type='button' onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
