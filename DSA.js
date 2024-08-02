/*
console.log(4<7<4);
//                          ------------------FIND MAX-----------------------

//let arr = [3,5,67,8,4,34,56,57,100,1,200]
let arr = [-3,-5,-67,-8,4,-34,-56,-57,-100]
//let arr = [-34,-3,-4,-6]


function maxnum(arr){
    let max = arr[0] ;
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxnum(arr));


let arr = [3,5,67,8,4,34,56,57,100,1];

console.log(Math.max(...arr));
console.log(Math.min(...arr));




                

// console.log(typeof (null));
// console.log(typeof (undefined));
// console.log(null === undefined);
// console.log(null == undefined);
// let q;
// console.log(q);
//                     --------------------FIND MIN---------------------                  


//let arr = [3,5,67,8,4,34,56,57,100,1,200]
let arr = [-200,-3,-5,-67,-8,4,-34,-56,-57,-100,-500]
//let arr = [-34,-3,-4,-6]


function minNum(arr){
    let min = arr[0] ;
    for(let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
console.log(minNum(arr));

//                       -------------------Math.random--------------------

function creatRandom(length){
    return Math.floor(Math.random()* length);
}

console.log(creatRandom(10));



function creatRandom(length){
    return Math.floor(Math.random()* length);
}

console.log(creatRandom(256));
*/

let hex = ['E','R']

    let hexColor = '#';
        hexColor += hex;

        console.log(hexColor);
    console.log(['u'] + ['y']);


