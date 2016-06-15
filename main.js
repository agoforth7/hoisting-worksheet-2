// Exercise 1

var myObj = { class: [] };
// var className = 'animating';

function animateLeft(obj) {
	var className = 'animating'; // 2. move this here to fix the problem.
    obj.class.push(className); // 1. className is undefined, because var ClassName has been hoisted up without its assignment.
    var className = 'left';
    obj.class.push(className);
}

animateLeft(myObj);
console.log(myObj);



// Exercise 2

function formatTemp(temp, celcius) {
	var unit = 'F';
    
    if (celcius) {
        unit = 'C'; // 1. remove 'var' so as not to hoist var unit up and re-assign it as undefined.
    }

    return temp + '\260' + unit; // corrected the special character code.
}

var temp = formatTemp(99, true);
temp = formatTemp(100);

console.log(temp);



// Exercise 3

var upd = true; // variable name changed to avoid conflicting with the function called update.
var a = 0;

function increment() {
    if (upd === false) {
        return;
    }

    function update() {
        a++;

        if (a >= 10) {
            upd = false;
        }
    }

    update();
}

for (var i = 0; i < 50; i++) {
    increment();
}

console.log(a);



// Exercise 4

function outer() {
    function inner() { return 'Hello'; }
    return inner(); // moved this return underneath the inner function to make it more readable and intuitive.
}

console.log(outer());



// Exercise 5

logTime();

/*var logTime = */function logTime () { // remove var logTime to avoid the variable declaration being hoisted above the call.
    var date = new Date();
    console.log('The time is ' + date.getHours() + ':' + date.getMinutes());
}