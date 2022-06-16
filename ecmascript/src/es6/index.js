function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let name = 'oscar';
let age = 32;

//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);


let team1 = ['Oscar', 'Julian', 'Valeria'];
let team2 = ['Ricardo', 'Julian', 'Valeria'];

let education = ['David', ...team1, ...team2];
console.log(education);
/*[
    'David',   'Oscar',
    'Julian',  'Valeria',
    'Ricardo', 'Julian',
    'Valeria'
  ]*/



const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    example
}

const listOfNames4 = name => {
    example
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));