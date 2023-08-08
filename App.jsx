import './App.css'

import React from 'react';

function areElementsSame(data) {
  const keys = Object.keys(data);
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key1 = keys[i];
    const key2 = keys[i + 1];
    
    if (data[key1].length !== data[key2].length) {
      return false;
    }
    
    for (let j = 0; j < data[key1].length; j++) {
      const element1 = data[key1][j];
      const element2 = data[key2][j];
      
      if (!isObjectEqual(element1, element2)) {
        return false;
      }
    }
  }
  
  return true;
}

function isObjectEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
}

function App() {
  const data = {
    1: [{'a': 1, 'b': 2}, {'c': 1, 'd': 2}, {'e': 1, 'f': 2}],
    2: [{'a': 1, 'b': 2}, {'c': 1, 'd': 2}, {'e': 1, 'f': 2}],
    3: [{'a': 1, 'b': 2}, {'c': 1, 'd': 2}, {'e': 1, 'f': 2}],
  };

  const result = areElementsSame(data);
  
  return (
    <div>
      <h1>Are Elements Same? {result ? 'Yes' : 'No'}</h1>
    </div>
  );
}

export default App;

