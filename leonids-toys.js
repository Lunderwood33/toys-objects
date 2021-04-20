const toys = [
    {
        id: 1,
        name: "robokill",
        maker: "Fancy Kid Toys",
        price: 900,
        weight: 3,
        inStock: true,
    },
    {
        id: 2,
        name: "Kitchenette",
        maker: "Fischer-Price",
        price: 450,
        weight: 17,
        inStock: true,
    },
    {
        id: 3,
        name: "Miata",
        maker: "Hot Wheels",
        price: 1,
        weight: .25,
        inStock: true,
    },



]

const rcCar = {
    id: 4,
    name: "Remote Control Car",
    maker: "RC Car Bro's",
    price: 250,
    weight: 7,
    inStock: true,

}

const stuffedBear = {
    id: 5,
    name: "Teddy Bear",
    maker: "Build-a-Bear",
    price: 75,
    weight: 2.25,
    inStock: true,
}

const rattle = {
    id: 6,
    name: "Baby Rattle",
    maker: "Babys-R-Us",
    price: 5.79,
    weight: .83,
    inStock: true,
}

    toys.push(rcCar)

    toys.push(stuffedBear)

    toys.push(rattle)

    // console.log(toys)

for (const toy of toys) {
    console.log(`The Price of the ${toy.maker} ${toy.name} is $${toy.price}`)
}