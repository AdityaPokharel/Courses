function average(scores) {
    var sum = 0;
    for(var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return Math.round(sum/scores.length);
}

console.log(average([11, 12, 13, 14, 15]));