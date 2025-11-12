// Import your HashMap class
import { HashMap } from './hashmap.js';

const test = new HashMap();

// Populate with test data
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log('Initial load (should be 0.75 full):');
console.log('Length:', test.length());
console.log('Capacity:', test.capacity);
console.log('Entries:', test.entries());

// Overwrite test
test.set('banana', 'bright yellow');
test.set('lion', 'yellow-gold');
console.log('\nAfter overwriting banana and lion:');
console.log('banana:', test.get('banana'));
console.log('lion:', test.get('lion'));
console.log('Length (should be same):', test.length());

// Trigger resize
test.set('moon', 'silver');
console.log('\nAfter adding moon (resize triggered):');
console.log('Length:', test.length());
console.log('New Capacity:', test.capacity);
console.log('Entries:', test.entries());

// Test removal
test.remove('frog');
console.log('\nAfter removing frog:');
console.log('Has frog?', test.has('frog'));
console.log('Length:', test.length());

// Test keys, values, entries
console.log('\nKeys:', test.keys());
console.log('Values:', test.values());
console.log('Entries:', test.entries());

// Test clear
test.clear();
console.log('\nAfter clearing map:');
console.log('Length:', test.length());
console.log('Entries:', test.entries());