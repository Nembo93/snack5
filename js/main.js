const numeri = [
    1,
    2,
    3,
    4,
    5
]

let somDisp= 0;
console.log(numeri.length)
let i = 0;
while (i < numeri.length) {
    console.log(numeri[i]);
    if (i % 2 !== 0){
        let disp = numeri[i];
        let somDisp = somDisp + disp;
    }
    i++;
}
console.log(somDisp);