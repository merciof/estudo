function getMean(array) {
    var sum = 0;
    array.forEach(function(num){
        sum = sum + num;
    });

    var mean = sum / array.length;

    return mean;
}

function getMedian(array) {
    var func = function(a,b) {return a - b};
    var median;
    array.sort(func);

    if(array.length % 2 !== 0) {
        median = array[Math.floor(array.length/2)];    
    } else {
        var mid1 = array[(array.length / 2) - 1];
        var mid2 = array[array.length / 2];
        medium = (mid1 + mid2) / 2;
    }

    return median;
}

function getMode(array) {
    var modeObj = {};

    //create modeObj
    array.forEach(function(num) {
        if(!modeObj[num]) {
            modeObj[num] = 0;
        }
        
        modeObj[num] = modeObj[num] + 1;
    });

    return modeObj;
} 

var arr = [1,2,3,4,5,1,2,2,2,3,4,10,11,1];

console.log(getMode(arr));

