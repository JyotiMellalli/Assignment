const car = {
    vehicleid: 1234,
    brand: 'ford',
    model: '2023',
    varient: '2years',

specification: {

    firstGear: function () {
        console.log('vehicle is the first gear');

    },
    secondGear: function() {
        console.log('vehicle is the second gear');
    },
    maximumSpeed: 60,
        changeGear: function() {
            return (this.firstGear(), this.secondGear());

        },
}
}

console.log('vehicle details');
console.log(`brand:${car.brand}`);
console.log(`model:${car.model}`);
console.log(`varient:${car.varient}`);
car.specification.changeGear();
console.log(car.specification.maximumSpeed);
