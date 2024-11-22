let canvas = document.querySelector('canvas');
let wid = window.innerWidth;
let hei = window.innerHeight;
canvas.width = wid;
canvas.height = hei;
canvas.style.background = "gray";
var ctx = canvas.getContext('2d');
window.addEventListener('keydown', change);
let button = document.querySelector("button");
// console.log(button)

button.addEventListener("click", click);


let dx = 0;
let dy = 0;

function change(event) {
    // console.log(event.keyCode);

    switch (event.keyCode) {
        case 37:
            console.log('trai');
            dx = -15
            dy = 0
            break;
        case 38:
            dy = -15;
            dx = 0
            break;
        case 39:
            console.log('phai');
            dx = 15;
            dy = 0
            break;
        case 40:
            console.log('duoi');
            dy = 15;
            dx = 0;
            break;
        case 32:
            dx = 0;
            dy = 0;
            break;

    }
}
// ctx.fillStyle = "red";
// ctx.fillRect(100, 100, 200, 200);
// ctx.beginPath();
// ctx.moveTo(300, 300);
// ctx.lineTo(400, 400);
// ctx.strokeStyle = "blue";
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(300, 200);
// ctx.lineTo(500, 500);
// ctx.strokeStyle = "brown";
// ctx.stroke();

// //arc / circle
// var color = ['blue', 'red', 'black'];
// console.log(Math.PI * 2)

function Circle(x, y, r, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dy = dy;
    this.dx = dx;
    this.i = 0;

    this.draw = function(char) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)

        ctx.font = '15px Arial';
        ctx.textAlign = "center"

        // ctx.fillStyle = 'white';
        // ctx.fill();
        ctx.fillText(char, this.x, this.y);

        ctx.stroke();
    }

    this.direction = function() {

        if (this.x + this.r >= wid || this.x - this.r <= 0) {
            this.dx = -this.dx;
            this.i += 1;
            // console.log(i)
        } else if (this.y + this.r >= hei || this.y - this.r <= 0) {
            this.dy = -this.dy;
            this.i += 1;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw(this.i);

    }
}




// var x = 100;
// var y = 100;
// var r = 70;
// var cc = new Circle(100, 200, 70, 5, 5);
var array = new Array;
// var bu = new Circle(200, 200, 100)
for (let i = 0; i < 100; i++) {
    let dx = Math.round(Math.random() * 10 - 5);
    let dy = Math.round(Math.random() * 10 - 5);
    let x = Math.round(Math.random() * (wid / 2) + 100) + 100;
    let y = Math.round(Math.random() * (hei / 2) + 100) + 100;

    array.push(new Circle(x, y, 20, dx, dy));
}
// console.log(array);

function animate() {
    ctx.clearRect(0, 0, wid, hei);
    requestAnimationFrame(animate);
    for (let i = 0; i < 100; i++) {
        array[i].direction();
    }
    // cc.direction();
    // bu.direction();


}
let i = 0
    // animate();
    // animate()

function click() {
    // console.log("ok");

    if (i % 2 == 0) {
        animate()
        i += 1;
        console.log(i);
    } else {
        ctx.clearRect(0, 0, wid, hei);
        i += 1;
        console.log(i);
    }
}



// // for (var i = 0; i < 3; i++) {
// //     c.beginPath();
// //     c.arc(i * 10, 400, 60, 0, Math.PI * 2, false);
// //     c.strockStyle = 'blue';
// //     c.stroke();
// // }
// function Circle(x, y) {
//     this.x = x;
//     this.y = y;

//     this.draw = function() {

//     }


// }

// var circle = new Circle(200, 300);


// var x = Math.random();
// // console.log(x);
// var dx = 10;
// var y = 200;
// var dy = 10;
// var radius = 50;

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerHeight, innerWidth)
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strockStyle = 'blue';
//     c.stroke();
//     if (x > innerWidth || x < 0) {
//         dx = -dx;
//     }
//     if (y > innerHeight || y < 0) {
//         dy = -dy;
//     }
//     x += dx;
//     y += dy;
// }

// animate();