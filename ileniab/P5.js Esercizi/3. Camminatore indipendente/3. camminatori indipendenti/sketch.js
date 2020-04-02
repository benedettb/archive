let position;
let velocity;
let cornice= 20;

let camminatore = [];

function setup() {
createCanvas(400, 400);
for (let i=0; i<10; i++) {
camminatore[i] = new Walker();
}
}

function draw() {
background(230,230,250);

for (let i=0; i<camminatore.length; i++) {

camminatore[i].step();
camminatore[i].display();
}
}

class Walker {
constructor() { //funzione setup che definisce la posizione iniziale
this.position = createVector(random(10),random(10));
this.velocity = createVector(random(1), random(2.3));
}

display() {
noStroke();
fill (75,0,130,50);
ellipse (this.position.x, this.position.y, 30, 30);
}

step() {
this.position.add(this.velocity);

if ((this.position.x > width) || (this.position.x < 0)) {
this.velocity.x = this.velocity.x * -1;
}

if ((this.position.y > height) || (this.position.y <0)) {
this.velocity.y = this.velocity.y * -1;

}
}
}