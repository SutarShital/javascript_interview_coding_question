let nameBrand = "Apple";

let splitNameBrand;
let reverseArray;

splitNameBrand = nameBrand.split('');
console.log("splitNameBrand",splitNameBrand);

reverseArray = splitNameBrand.reverse();
console.log("reverseArray",reverseArray);

joinArray = reverseArray.join('');
console.log("joinArray",joinArray);
