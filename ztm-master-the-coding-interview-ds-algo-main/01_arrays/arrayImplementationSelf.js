class myArray{
    constructor(){
        this.length = 0
        this.data = {} //object
    }
    get(index){
        return this.data[index] //refer to data created in constructor of index position
    }
    push(item){
        this.data[this.length] = item //add item to data at the current length index
        this.length++ //increment length by 1
        return this.length //return the new length
    }
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length - 1]; //delete last item
        this.length--
        return lastItem; 
    }
    delete(index){
        const item = this.data[index]
        this.shiftItems(index)
    }
    shiftItems(index){
        for(let i = index; i < this.length; i++ ){
            this.data[i] = this.data[i+1] 
        }
        // this.pop()
        delete this.data[this.length - 1]
    }

}
const newArray = new myArray();
newArray.push('hello')
newArray.push('world')
newArray.push('!')
newArray.push('$##$')
newArray.pop()
newArray.delete(2)
console.log(newArray);
