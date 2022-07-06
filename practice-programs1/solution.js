// 1. using if-else, write a program to accept two numbers and calculate greater number between them.

function greater(a, b) {
    if (a > b) {
        return a;
    }

    return b;
}

// Test that:
// console.log(greater(5, 2))
// console.log(greater(10, 50))

// ---

// 2. using if-else, write a program to  accept three numbers and calculate smaller number among them. 
function smallest(a, b, c) {
    if (a < b && a < c) {
        return a;
    }

    if (b < a && b < c) {
        return b;
    }

    // otherwise return c:
    return c;
}

// Let's test that:
console.log(smallest(1, 2, 3))
console.log(smallest(50, 10, 30))
// the above solution assumes all 3 numbers are different, so this would fail:
console.log(smallest(10, 10, 20))

// ---

// 3. Accept height and width of a rectangle and calculate perimeter and area of the rectangle.

function perimeterArea(height, width) {
    perimeter = (height + width) * 2
    area = height * width
}