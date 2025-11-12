class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.sizeCount = 0;
  }

  // 🔢 Hash function — keeps values within integer range using modulo inside loop
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  // 🧩 Resize / Rehash function when load factor is exceeded
  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.sizeCount = 0;

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }

  // 🪄 Add or update a key-value pair
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key already exists — overwrite value
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    // Add new key-value pair
    bucket.push([key, value]);
    this.sizeCount++;

    // Check load factor — resize if exceeded
    if (this.sizeCount / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  // 🔍 Get value by key
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null;
  }

  // ✅ Check if key exists
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return bucket.some(([k]) => k === key);
  }

  // ❌ Remove key-value pair
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const pairIndex = bucket.findIndex(([k]) => k === key);
    if (pairIndex !== -1) {
      bucket.splice(pairIndex, 1);
      this.sizeCount--;
      return true;
    }

    return false;
  }


}