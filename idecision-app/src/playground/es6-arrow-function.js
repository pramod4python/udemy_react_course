const square = function(x){
    return x * x;
};

console.log(square(5));

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(4));

const squareArrow2 = (x) => x * x;
console.log(squareArrow2(2));

const getFirstName  = (fullName) =>{
return fullName.split(' ')[0];
};
console.log(getFirstName('Pramod Maller'));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameArrow('Priyanka Kamath'));
