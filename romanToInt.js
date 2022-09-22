/**
 * @param {string} str
 * @return {number}
 */
 var romanToInt = function(str) {


    const sym = {
         I: 1,
         V: 5,
         X: 10,
         L: 50,
         C: 100,
         D: 500,
         M: 1000
    } 
    
    let ret =0
    console.log(str)
    Array.from(str).forEach( (c, i) =>{

        if(sym[c] < sym[str[i+1]]){
            ret -= sym[c]
        } else {
            ret += sym[c]
        }
    })
    return ret

};

document.getElementById('iii').innerText = romanToInt('III')
document.getElementById('xvi').innerText = romanToInt('XVI')
document.getElementById('iicl').innerText = romanToInt('IICL')
