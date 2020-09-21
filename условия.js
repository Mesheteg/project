/* jshint -W097 */
'use strict';

if (49) {
    console.log(true);
} else {
    console.log(false);
}


if (num < 49 ) {
    console.log('Error');
} else if (num > 100) {
    console.log("too much");
} else {
    console.log('ok');
}

(num === 510) ?  console.log('ok') :  console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('No');
        break;
    case 100:
        console.log('No') ;
        break;
    case 51:
        console.log("Yes");
        break;
    default:
        console.log(" NOT this time");
        break;
           
}