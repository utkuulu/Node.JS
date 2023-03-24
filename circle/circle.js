
function circleArea (r) {
    let pi = 3.1415;
    let alan = pi * ( r * r);
    console.log(`Daire Alanı : ${alan}`);
}

function circleCircumference (r) {
    let pi = 3.1415;
    let cevre = 2 * pi * r;
    console.log(`Daire Çevresi : ${cevre}`);
}

module.exports = { circleArea, circleCircumference};