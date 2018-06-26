const HashMap = require('./hashmap');

// //Write an algorithm to group a list of words into anagrams. For example, 
// if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
//  the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], 
//  ['acre', 'race']].

// input - array of strings
// output - array of arrays of strings grouped with other versions

function anagram(arr){
  let anaMap = new HashMap();
  let answerArr = [];  

  for (let i = 0; i < arr.length; i++) { // loop through input arr
    let currentElement = arr[i];
    let sortedElement = arr[i].split('').sort().join(''); // example-> 'east' turns into 'aest'
    // we will use sorted Element as the key so we put the words in alphabetical order
    // then set them onto our hashmap with the value being an array containing the original version of the word
    try{
      if(anaMap.get(sortedElement)){ // if key already exists
        let storedValue = anaMap.get(sortedElement); // set storedValue to the value of the current iteration sorted alphabetically 
        anaMap.set(sortedElement, [...storedValue, currentElement]) //add currentElement to existing array via the spread operator
      }
    } catch(err){ // if anaMap doesn't have current key the get function will error
      anaMap.set(sortedElement, [currentElement]); // put the currentElement into an array so add to later.
    }   
  }

  for (const keys of anaMap._slots){ // loop over keys in _slots
    if(keys !== undefined){ // if key has something there
      answerArr.push(keys.value) // push that value onto the answerArray
    }
  }
  return answerArr; 
}

let example = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

console.log(anagram(example));
