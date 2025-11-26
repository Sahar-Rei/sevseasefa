// Oddiy ma'lumot turlari:
// 1 - number (Son)
// 2 - string ('' yoki "" ichida yoziladigan matn/son)
//                 1      0
// 3 - boollean (True / False)
// 4 - undefined (Bor deb belgilangan, lekin topilmagan ma'lumot)
// 5 - null (xato)


person = {
    name: 'Omon',
    age: 15,
    hobbies : {
        game: "mlbb",
        music: 'rap'
    }
}

console.log(person);


// Array - massive

//                  0        1       2        3
const colour = ['green', 'yellow', 'red', 'white']

// console.log(colour);
console.log(colour[4]);


// Element qo'shish va o'chirish

colour.push(8) // End
console.log(colour);

colour.unshift('blue') // Start
console.log(colour);

colour.pop() // End delete
console.log(colour);

colour.shift() // Start delete
console.log(colour);


const fruits = ['banan', 'strawberry', 'apple']

// console.log(fruits);
console.log(fruits[2]);


fruits.push('nok')
console.log(fruits);

fruits.unshift('bexi')
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.shift()
console.log(fruits);


const number = [2,3,5,7,10]

const A = fruits.concat(number)
console.log(A);