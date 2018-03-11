/*Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].*/

function alternatingSums(a) {
    let team1 = [];
    let team2 = [];
    let sum1;
    let sum2;
    let divTimesFunc;
    let somaElementosFunc;
    let resultArray = [];

    divTimesFunc = function (element, index) {
        if (index % 2) {
            team2.push(element);
        } else {
            team1.push(element);
        }
    };

    a.forEach(divTimesFunc);

    somaElementosFunc = function (acc, element) {
        return acc + element;
    };

    if(team1.length === 0) {
        team1.push(0);
    };
    
    if(team2.length === 0) {
        team2.push(0);
    };
    
    sum2 = team2.reduce(somaElementosFunc);
    sum1 = team1.reduce(somaElementosFunc);

    resultArray.push(sum1);
    resultArray.push(sum2);

    return resultArray;
}










