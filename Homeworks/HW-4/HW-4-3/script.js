function calcCylinderArea(r, h) {
    return 2 * Math.PI * r * (r + h);
}

let area = calcCylinderArea(3, 10);
console.log(area);

