const numeri = [
    1,
    2,
    3,
    4,
    5
]
somDisp= 0;

while (let i = 0; i < numeri.length) {
    console.log(numeri[i]);
    if (i % 2 !== 0){
        let somDisp = somDisp + numeri[i];
    }
}