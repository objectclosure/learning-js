// A js object is a collection of properties, and a property is an association 
// btwn a key-value pair

// create an object named myCar and give it properties named make, model and year:
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 2013;
// You can even nest objects:
myCar.body = new Object();
myCar.body.wheels = 4;
myCar.body.mirrors = 2;
// console.log(myCar);

// To access elements of myCar:
// console.log(myCar.model);
// console.log(myCar.year);
// console.log(myCar.body);
// console.log(myCar.body.mirrors);

// We could also use an object initializer to create the previous object as follows:
const myCar2 = {
    make: "Ford", 
    model: "Mustang", 
    year: 2013, 
    body: {
        wheels: 4, 
        mirrors: 2
    }
};

// console.log(myCar)
// console.log(myCar2)

// ---object properties----
// get object keys:
console.log(Object.keys(myCar));

// define a function to check if the 2 objects are the same:
function equals(a, b) {
    // first get the objects' keys:
    aKeys = Object.keys(a);
    bKeys = Object.keys(b);

    // if those keys aren't of the same length return false:
    if (aKeys.length != bKeys.length) {
        return false;
    }

    // check if the keys are the same:
    for (let i = 0; i < aKeys.length; i++) {
        if (aKeys[i] != bKeys[i]) {
            return false;
        }
    }

    // finally check the values of the keys:
    for (let i = 0; i < aKeys.length; i++) {
        // if (!equals(a[aKeys[i]], b[bKeys[i]])) {
        //     return false;
        // }
        if (a[aKeys[i]] != b[bKeys[i]]) {
            return false;
        }
    }

    // if all those checks have passed return true;
    return true;
}

// console.log(myCar === myCar2)
// console.log(equals(myCar, myCar2))
// returns false coz of 'body' key

// remove 'body' key from both objects and try again:
delete myCar.body;
delete myCar2.body;
// console.log(equals(myCar, myCar2));
// it now returns true

// can I remove multiple keys from an object at the same time?
// delete myCar.make myCar.model;
// that won't work

// but object desturing will:
const {make, model, ...myCar3} = myCar;
console.log(myCar3);
