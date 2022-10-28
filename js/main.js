const numeri = [
    1,
    2,
    3,
    4,
    5
]

let somDisp= 0;

let i = 0;
while (i < numeri.length) {
    
    if (i % 2 !== 0){
        let disp = numeri[i];
        somDisp = somDisp + disp;
    }
    i++;
}
console.log(somDisp);