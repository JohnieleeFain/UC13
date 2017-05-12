function Pet(name, type) {
this.type = type;
this.name = name;
this.sleepy = 0;
this.hunger = 0;
this.awake = true;
this.speak = function () {
this.sleepy++;
this.hunger++;
if (this.type === "Dog") {
return "Woof! That means I love you!";
}
else if (this.type === "Cat") {
return "Ugh. meow.";
}
}
this.eat = function () {
this.sleepy++;
this.hunger = 0;
if (this.type === "Dog") {
return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
}
else if (this.type === "Cat") {
return "Ugh, I guess I'll eat this."
}
}
this.nap = function () {
this.sleepy = 0;
this.awake = false;
return "Zzzz...";
}
this.wakeUp = function () {
this.awake = true;
this.sleepy = 0;
this.hunger = 4;
if (this.type === "Dog") {
return "I'm awake! Let's eat and then play! I love you!";
}
else if (this.type === "Cat") {
return "Ugh, I'm awake now. Is there anything to eat around here?";
}
}
this.rollOver = function () {
this.hunger++;
this.sleepy++;
if (this.hunger <= 4 && this.sleepy <= 5) {
if (this.type === "Dog") {
return "Rolling! Now what? I love you!";
}
else if (this.type === "Cat") {
return "Ugh. I'm a cat. I only roll over if I want to.";
}
}
else if (this.hunger >= 5) {
if (this.type === "Dog") {
return "I'm hungry! Let's eat first. I love you!";
}
else if (this.type === "Cat") {
return "Ugh. Feed me before I'll even think about it."
}
}
else if (this.sleepy >= 5) {
if (this.type === "Dog") {
return "Yawn. Let's play after a nap. I love you!";
}
else if (this.type === "Cat") {
return "Ugh. I need a 12 hour nap first."
}
}
}
this.fetch = function () {
this.hunger++;
this.sleepy++;
if (this.awake == true && this.hunger < 4 && this.sleepy < 5) {
if (this.type === "Dog") {
return "Must get the stick! I love you!";
}
else if (this.type === "Cat") {
return "Ugh. I'm a cat. I don't fetch."
}
}
else if (this.hunger >= 5) {
if (this.type === "Dog") {
return "I'm hungry! Let's eat first. I love you!";
}
else if (this.type === "Cat") {
return "Ugh. Feed me before I'll even think about it."
}
}
else if (this.sleepy >= 5) {
if (this.type === "Dog") {
return "Yawn. Let's play after a nap. I love you!";
}
else if (this.type === "Cat") {
return "Ugh. I need a 12 hour nap first."
}
}
return "Zzzz...";
}
this.shake = function () {
this.hunger++;
this.sleepy++;
if (this.awake == true && this.hunger < 4 && this.sleepy < 5) {
if (this.type === "Cat") {
return "Ugh. I'm a cat. I never shake";
}
else if (this.type === "Dog") {
return "Nice to meet you! I love you!";
}
}
else if (this.hunger >= 5) {
if (this.type === "Dog") {
return "I'm hungry! Let's eat first. I love you!";
}
else if (this.type === "Cat") {
return "Ugh. Feed me before I'll even think about it."
}
}
else if (this.sleepy >= 5) {
if (this.type === "Dog") {
return "Yawn. Let's play after a nap. I love you!";
}
else if (this.type === "Cat") {
return "Ugh. I need a 12 hour nap first."
}
}
return "Zzzz...";
}
}

//function Cube(length, mass) {
//this.length = length;
//this.mass = mass;
//this.volume = function () {
//var volume = (this.length this.length this.length)
//}
//this.density = function () {
//var density = this.mass / this.volume
//return density;
//}
//this.surfaceArea = function () {
//var surfaceArea = (Math.square(this.length)) * 6
//return surfaceArea;
//}
//}
