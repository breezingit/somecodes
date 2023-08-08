const data = {
  "io_1": [{'a': 1, 'b': 2, 'L': "abc1"}, {'a': 3, 'b': 4, 'L': "abc2"}, {'a': 5, 'b': 6, 'L': "abc3"}],
  "io_2": [{'a': 1, 'b': 2, 'L': "abc4"}, {'a': 3, 'b': 4, 'L': "abc5"}, {'a': 5, 'b': 6, 'L': "abc6"}],
  "io_3": [{'a': 3, 'b': 4, 'L': "abc7"}, {'a': 1, 'b': 2, 'L': "abc8"}, {'a': 5, 'b': 6, 'L': "abc9"}],
};

const output = {};

for (const key in data) {
  data[key].forEach(item => {
    const { a, b, L } = item;
    const row = `${L} : ${key}`;
    
    if (!output[a]) {
      output[a] = {};
    }
    
    if (!output[a][b]) {
      output[a][b] = [];
    }
    
    output[a][b].push(row);
  });
}



const result = [];

for (const a in output) {
  for (const b in output[a]) {
    result.push(Object.fromEntries(output[a][b].map(row => [row.split(' : ')[0], row.split(' : ')[1]])));
  }
}
console.log(result)

