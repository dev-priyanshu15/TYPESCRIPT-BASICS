"use strict";
const gigi = {
    height: 3434,
    weight: 3434,
    scolar: true,
    func: (n, m) => {
        console.log(n * m);
    },
};
const kendal = {
    height: 43434,
    scolar: true,
    weight: 545,
    func: (n, m) => {
        console.log(n * m);
    },
};
kendal.func(20, 10);
const obj = {
    gender: true,
    height: 3434,
    weight: 34,
};
const obj2 = {
    gender: false,
    height: 4434,
    weight: 94,
};
const obj3 = {
    height: 4434,
    weight: 94,
};
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--type;
FuncType = (n, m, l) => number;
// Optional Parameter
const func = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
func(25, 23);
const func = (n, m, l = 20) => {
    return n * m * l;
};
func(25, 23);
const func = (...m) => {
    return m;
};
func(25, 23, 34, 6, 67, 8, 9);
function lol(n) {
    return 45;
}
function () { }
with (Obj)
    ;
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "Macbook",
    stock: 46,
    price: 999999,
    photo: "samplephotourl",
    id: "asdnasjdasjkdas",
};
getData(productOne);
Never;
Type;
const errorHandler = () => {
    throw new Error();
};
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--classes;
class Player {
    height;
    weight;
    power;
    id;
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    get getMyHeight() {
        return this.height;
    }
    set changeHeight(val) {
        this.height = val;
    }
}
const abhi = new Player(100, 150, 23);
console.log("Heigfht", abhi.getMyHeight);
abhi.changeHeight = 500;
console.log("Heigfht", abhi.getMyHeight);
class Player2 extends Player {
    special;
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
    }
    getMyPower = () => this.power;
}
const abhi = new Player2(100, 150, 23, true);
console.log("Weight", abhi.weight);
console.log("Height", abhi.getMyHeight());
console.log("Power", abhi.getMyPower());
class Product {
    name;
    price;
    stock;
    id = String(Math.random() * 1000);
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    getId = () => this.id;
}
const product1 = new Product("Macbook", 2000, 20);
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
-- -
    Type;
Assertion;
const btn = document.getElementById("btn");
const btn = document.getElementById("btn");
const btn = document.getElementById("btn");
btn.onclick;
const img = document.getElementById("myimg");
const img = document.querySelector("img");
img.src;
const form = document.getElementById("myform");
const myinput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const h2 = document.createElement("h2");
    const body = document.querySelector("body");
    const value = Number(myinput.value);
    h2.textContent = String(value + 20);
    body.append(h2);
};
Keyof & Index;
Signature;
const myobj = {
    name: "Abhi",
    email: "abhI@gmail.com",
};
let key = "name";
myobj[key];
const getName = () => {
    return myobj["name"];
};
const getEmail = () => {
    return myobj["email"];
};
const getData = (key) => {
    return myobj[key];
};
getData("name");
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--Type;
Utility;
Partial;
Required;
Readonly;
Record;
Pick;
Omit;
Exclude;
Extract;
NonNullable;
Parameters;
ConstructorParameters;
ReturnType;
InstanceType;
Partial;
Required < Type > -opposite;
of;
partial;
const user = {
    name: "abhi",
    email: "abhi@gmail.vom"
};
Readonly < Type > -makes;
every;
property;
readonly;
const user = {
    name: "abhi",
    email: "abhi@gmail.vom"
};
Record;
Example;
const users = {
    john: { age: 34 },
    levi: { age: 34 },
    elon: { age: 34 },
    jack: { age: 34 },
};
Pick;
Omit;
Exclude;
Extract;
NonNullable;
Parameters;
const myfunc = (a, b) => {
    console.log(a + b);
};
ConstructorParameters;
class SampleClass {
    s;
    t;
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
ReturnType;
const myfunc = (a, b) => {
    return a + b;
};
InstanceType;
class SampleClass {
    s;
    t;
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const user = {
    s: "44",
    t: "ssds"
};
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
--;
-- -
    Generics;
const func = (n) => {
    return n;
};
const ans = func(20);
const ans2 = func("20");
const ans3 = func(true);
const func = (n) => {
    return n;
};
const person1 = {
    name: "Abhi",
    age: 109,
};
const ans = func(person1);
const func = (n, o) => {
    return { n, o };
};
const ans = func(20, "Lol");
const user = {
    name: "abhi",
    age: 109,
};
const user2 = {
    name: "abhi",
    age: 109,
    email: "asd@gmail.com",
};
const func = (n, o) => {
    return { n, o };
};
const ans = func(user, user2);
const users = [
    {
        name: "abhi",
        age: 109,
    },
    {
        name: "Nahar",
        age: 109,
    },
    {
        name: "Levi",
        age: 52,
    },
    {
        name: "Random",
        age: 2,
    },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(users, "name", "Nahar");
const filteredPeopleByAge = filterByPeoples(users, "age", 109);
console.log(filteredPeopleByAge);
