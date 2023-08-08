function areElementsSame(data) {
    const sortedData = {};
    
    for (const key in data) {
      const sortedSubElements = data[key].sort((obj1, obj2) => {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  for (let i = 0; i < Math.min(keys1.length, keys2.length); i++) {
    const key1 = keys1[i];
    const key2 = keys2[i];

    if (key1 !== key2) {
      return key1.localeCompare(key2);
    }

    const value1 = obj1[key1];
    const value2 = obj2[key2];

    if (value1 !== value2) {
      return value1 - value2;
    }
  }

  return keys1.length - keys2.length;
});
    
      sortedData[key] = sortedSubElements;
    }
    
  const sortedDataValues = Object.values(sortedData);
  console.log(sortedDataValues)
  const firstElement = sortedDataValues[0];

  for (let i = 1; i < sortedDataValues.length; i++) {
    if (JSON.stringify(firstElement) !== JSON.stringify(sortedDataValues[i])) {
      return false;
    }
  }

  return true;
}

const data1 = {
  1: [{'a': 1, 'b': 2}, {'c': 1, 'd': 2}, {'e': 1, 'f': 2}],
  2: [{'a': 1, 'b': 2}, {'c': 1, 'd': 2}, {'e': 1, 'f': 2}],
  3: [{'c': 1, 'b': 2}, {'c': 1, 'd': 2}, {'e': 1, 'f': 2}],
};

const data2 = {
  1: [{'a': 1, 'b': 2}, {'a': 3, 'b': 4}, {'e': 1, 'f': 2}],
  2: [{'a': 1, 'b': 2}, {'a': 3, 'b': 4}, {'e': 1, 'f': 2}],
  3: [{'a': 3, 'b': 4}, {'a': 1, 'b': 2}, {'e': 1, 'f': 2}],
};


  const data = {
    1: [{'a': 1, 'b': 2}, {'c': 1, 'd': 2}, {'e': 1, 'f': 2}],
    2: [{'a': 1, 'b': 2}, {'c': 1, 'd': 2}, {'e': 1, 'f': 2}],
    3: [{'a': 1, 'b': 2}, {'c': 1, 'd': 2}, {'e': 1, 'f': 2}],
  };

  const result = areElementsSame(data2);
console.log(result)
