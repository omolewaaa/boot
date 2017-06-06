
'use strict';

module.exports = {
function getPrimes(num) {
    var prim = [], i, j, arr = [];
    for (i = 2; i <= num; i++) {
        if (!prim[i]) {
            
            arr.push(i);
             for (j = i << 1; j <= num; j += i) {
                prim[j] = true;
            }
        }
    }
    return arr;
}
}