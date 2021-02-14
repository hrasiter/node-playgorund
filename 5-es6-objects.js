//Shorthand assignmet

// const name = 'Rasit'
// const age = 34

// const user = {
//     name,
//     userage: age,
//     location: 'gebze'
// }

// console.log(name)


//Object destructuring


const product = {
    label : 'Iphone pro max 12',
    price: 3,
    stock: 21,
    saleprice: undefined,
    rating:4.2
}

// const {label, price, saleprice=20, sold=1} = product

// console.log(label)
// console.log(price)
// console.log(saleprice)
// console.log(sold)

const transaction = (type, {label='product', price=0} = {}) =>{
    console.log(label)
    console.log(price)
}

transaction('order',product)
