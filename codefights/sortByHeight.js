function sortByHeight(a) {
    //array para guardas os elementos -1 e suas posições
    let arrayMenos1 = [];
    let arrayHeights = [];
    let arrayHeightsSorted = [];
    let i = 0;
    let count = 0;

    a.forEach(function (element, index) {
        if (element === -1) {
            arrayMenos1[index] = element;
            count = 1;
        } else {
            arrayMenos1[index] = 0;
        }

    });

    if(count === 0) {
        return a.sort();
    }

    a.forEach((element, index) => {
        if (element != -1) {
            arrayHeights.push(element);
        }
    });

    arrayHeightsSorted = arrayHeights.sort();


    arrayMenos1.forEach(function (element, index) {
        if (arrayMenos1[index] === 0) {
            arrayMenos1[index] = arrayHeightsSorted[i];
            i = i + 1;
        }

    });

    return a = arrayMenos1;
}


console.log([4, 2, 9, 11, 2, 16].sort());








