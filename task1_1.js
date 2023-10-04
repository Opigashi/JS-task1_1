//3の倍数の時　→ 「”Fizz “ + その数字」
//5の倍数の時　→ 「”Buzz “ + その数字」
//それ以外の時　→ 何も処理しない
//上記を99まで繰り返す

'use strict';

for (let int = 1; int <= 99; int++) {
    if ((int % 3 === 0) && (int % 5 === 0)) {
        console.log('FizzBuzz ' + int);
    } else if (int % 3 === 0) {
        console.log('Fizz ' + int);
    } else if (int % 5 === 0) {
        console.log('Buzz ' + int);
    } else {
        ;
    }
}
