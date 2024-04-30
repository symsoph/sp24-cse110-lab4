let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
// for loop - print if property starts with 'r' or if value
// of property is odd
for (key in statistics) {
    if (statistics[key] % 2 == 1 || key.substring(0, 1) == 'r') {
        console.log(statistics[key]);
    }
}