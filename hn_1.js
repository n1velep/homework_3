var simple = [2],
    num = 2;
while (num <= 100) {
    var numcheck = 1;
    for (var i = 0; i < simple.length; i++) {
        if (num % simple[i] === 0) {
            numcheck = 0;
        }
    }
    if (numcheck === 1) {
        simple.push(num);
    }
    num++;
}
console.log(simple);