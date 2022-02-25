/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const rev = parseInt(x.toString().split('').reverse().join('')) 
    if ( x > 2147483647 || rev > 2147483647 ) { 
        return 0; 
    } else { 
        return x > 0 ? rev : -rev 
    }
};