class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) { 
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	set(key, value) {
		
		const address = this._hash(key) // the location of the object will be at
		if(!this.data[address]){
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
	}
	get(key){
		const address = this._hash(key);
		let bucket = this.data[address];
		// console.log(this.data[address]);
		for (let index = 0; index < bucket.length; index++) {
			// console.log(this.data[address][index]);
			if (bucket[index][0] === key) {
				return bucket[index][1];
			}
		}
		return undefined;
	}
	
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
// console.log(myHashTable._hash("grapes"));
// myHashTable.get("grapes");
myHashTable.set("apples", 9);
// myHashTable.get("apples");
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
