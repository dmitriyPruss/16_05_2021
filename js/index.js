// prototypes
'use strict'

// function Car (brand) {
//     if (!new.target) {
//         return new Car(brand);
//     };
//     console.log('new.target :>> ', new.target);
//     this.brand = brand;
// };

// const car1 = Car('Tesla');

// const o = new Object();

// console.log('this :>> ', this);

// arrays
function MyArray() {
    if (!new.target) {
        return new MyArray();
    }
    this.length = 0;
};


const myArrayProto = new MyArray();

myArrayProto.pop = function() {
    if (this.length === 0) {
        return; // return undefined; 
    };
    const lastItem = this[this.length - 1];
    delete this[--this.legth];
    return lastItem;
};

myArrayProto.push = function(item) {
    this[this.length] = item;
    return ++this.length;
}; 

myArrayProto.shift = function() {
    if (this.length === 0) {
        return;
    }
    const firstItem = this[0];
    for(let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    };
    delete this[--this.length];
    return firstItem;
};

MyArray.prototype = myArrayProto;

const myArr1 = new MyArray();
const myArr2 = new MyArray();


// Car
// function Car(model, brand) {
//     if (!new.target) {
//         return new Car(model, brand);
//     };
//     this.model = model;
//     this.brand = brand;
// };

// const actionCar = new Car();
// actionCar.showInfo = function() {
//     return `${this.model} ${this.brand}`;
// };
// actionCar.showMaxSpeed = function() {
//     return `${this.model} ${this.brand}. Max speed is 350km/h`;
// };

// Car.prototype = actionCar;

// const ferrariModel = Car('Ferrari', '488 GTB');
// console.log('ferrariModel :>> ', ferrariModel);
// console.log('ferrariModel.showInfo() :>> ', ferrariModel.showInfo());
// console.log('ferrariModel.showMaxSpeed() :>> ', ferrariModel.showMaxSpeed());

// Object.create()

const parrot = {
    name: 'Kesha',
    color: 'multicolor',
    places: 200,
    speak(phrase) {
        console.log(`${this.name} says ${phrase}`);
    },
};

const parrotChild = Object.create(parrot);
parrotChild.name = 'Kesha Junior';
parrotChild.wavy = true;

// transport
const transport = {
    name: 'transport',
    color: 'purple',
    places: 300,
    showSpeed(speed) {
        return `${this.color} ${this.name} with ${this.places} places goes ${speed} km/h`;
    },
};

const train = Object.create(transport);
train.name = 'train';
train.color = 'pink';
console.log('train.name :>> ', train.name);
console.log('train.showSpeed(99) :>> ', train.showSpeed(99));


// callback
function sayHello(callback, phrase) {
    if (typeof callback === 'function') {
        callback(phrase);
    };
};

sayHello(console.log, 'Hello, Jack!');
// sayHello(alert, 'Hello, Jack!');
sayHello("alert", 'Hello, Jack!');


// arrays 
const arr4 = [1, 2, 3, 4, 5];

arr4.forEach(showItem);

function showItem(currentItem, index, array){
    console.log('currentItem :>> ', `${currentItem} - index ${index} ${array}`);
};

const arr5 = [{}, {}, {}, {}];
arr5.forEach(f);

function f(currentItem, index, array) {
    currentItem.property = 'qwerty';
    currentItem.property1 = 'qwerty1';
};


const arr6 = [1, 2, 11, 8, 7];
console.log('arr6.some(isEven) :>> ', arr6.some(isEven));
console.log('arr6.every(isEven) :>> ', arr6.every(isEven));

function isEven(item, index, arr) {
    console.log('index :>> ', index);
    return item % 2 === 0;
};
function isOdd(item, index, arr) {
    console.log('index :>> ', index);
    return item % 2 != 0;
};
const arrEvenItem = arr6.filter(isEven);
const arrOddItem = arr6.filter(isOdd);
console.log('arrEvenItem :>> ', arrEvenItem);
console.log('arrOddItem :>> ', arrOddItem);


function User(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.is = isSubscribed;
}

const users = [];

for(let i = 0; i < 100; i++) {
    const user = new User(
        `Username ${i}`,
        `Usersurname ${i}`,
        Math.floor(Math.random() * 90),
        Math.random() > 0.5,
        `useremail${i}@gmail.com`,
        Math.random() > 0.5,
    );
    users.push(user);
};

// console.table(users);

// Take only women
const womanUsers = users.filter(isWoman);
function isWoman(user) {
    return !user.isMale;
};
// console.table(womanUsers);

const unsubscribedAdultManUsers = users.filter(isUnsubscribed)
function isUnsubscribed(user) {
    return user.isMale && user.age >= 18 && !user.is;
};
console.table(unsubscribedAdultManUsers);

// map

const userEmails = users.map(getEmail);

function getEmail(user) {
    return user.email;
};
console.table(userEmails);

// only women emails
const womanEmails = users.filter(isWoman).map(getEmail);

console.table(womanEmails);