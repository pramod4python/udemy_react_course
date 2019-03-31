//argument object is no longer bound with arrow function

const add =  (a,b)  => {
    //console.log(arguments);
return a+b;
};
console.log(add(5,6));

//this keyword - no longer bound to arrow fucntion
const user = {
name: 'Pramod',
cities:['Loc1','Loc2','Loc3'],
printPlacesLived(){
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach((city) =>{
        console.log(this.name + ' has lived in '+city);
    });
}
};
user.printPlacesLived();

const user1 = {
    name: 'Pramod',
    cities:['London','New York','Bear'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in '+city);
    }
    };
console.log(user1.printPlacesLived());

const multiplier ={
numbers: [3,4,5],
multiplier:3,
multiply(){
    return this.numbers.map((number) => number * this.multiplier); 
}
};
console.log(multiplier.multiply());