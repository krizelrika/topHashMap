# 🧭 The Odin Project — HashMap Assignment (JavaScript)

This project is am implementation of a HashMap in JavaScript, following the Data Structures section of The Odin Project. 
It demonstrates how hash maps work internally — using hashing, bucket arrays, collision handling, load factor control, and resizing.

## 🧠 Learning Goals
- Understand how a hash map (hash table) stores key-value pairs efficiently.
- Learn about hash functions, collisions, and load factors.
- Implement set, get, has, remove, and resize logic from scratch.
- Practice clean, object-oriented JavaScript ES6+ code structure.

## 🧩 Core HashMap Methods
| Method            | Description                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| `hash(key)`       | Produces a hash code for the given string key using modulo inside the loop to prevent overflow.          |
| `set(key, value)` | Adds or updates a key-value pair. Handles collisions and triggers resizing when load factor is exceeded. |
| `get(key)`        | Returns the value for the given key or `null` if not found.                                              |
| `has(key)`        | Returns `true` or `false` depending on whether the key exists.                                           |
| `remove(key)`     | Deletes the entry with the given key and returns `true` if successful.                                   |
| `length()`        | Returns the total number of stored keys.                                                                 |
| `clear()`         | Removes all entries.                                                                                     |
| `keys()`          | Returns an array of all keys.                                                                            |
| `values()`        | Returns an array of all values.                                                                          |
| `entries()`       | Returns an array of all `[key, value]` pairs.                                                            |

## ⭐ Extra Credit
- Automatic resizing when the load factor exceeds 0.75.
- HashSet class — built using the same logic, but stores only keys (no values).