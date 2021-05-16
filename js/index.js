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


// arrays 




