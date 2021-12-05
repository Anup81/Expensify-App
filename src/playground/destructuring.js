//Object Destructuing

console.log('Destructuring running')
// const person = {
//     name: 'Anup',
//     age: 22,
//     location: {
//         city: 'Kathmandu',
//         temp: 33
//     }
// }

// const { name, age } = person;
// const { city = 'Pokhara', temp: temperature } = person.location;

// console.log(`${name} is ${age}`)

// if (city && temperature){
//     console.log(`${city} and ${temperature}`)
// }


const book = {
    title: 'Ego is the Enemey',
    author: 'Ryan Holiday', 
    publisher: {
        // name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName)


// Array Destructuring

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75' ]

const [ coffee,  , price,  ] = item;

console.log(`A Medium ${coffee} costs ${price}`)
