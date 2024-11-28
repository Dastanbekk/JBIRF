// 1-mashq
// let str = "Hello";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//     result += str[i]; 
//     if (i < str.length - 1) {
//         result += ", ";
//     }
// }
// console.log(result);


// 2-mashq

// let text = "abc123";
// let sum = 0;

// for (let i = 0; i < text.length; i++) {
//     let char = text[i];
//     if (!isNaN(char) && char !== " ") {
//         sum += parseInt(char); 
//     }
// }
// console.log("Yig'indisi:", sum);

// 3-mashq

// let text = "hi";
// let result = " ";

// for(let i = 0; i < text.length; i++){
//     let count = text[i];
//     result += count+count;
// }
// console.log(result)




function isReverse(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let reversed = "";
    for (let i = str2.length - 1; i >= 0; i--) {
        reversed += str2[i];
    }

    return str1 === reversed;
}

let text1 = "abc";
let text2 = "cba";

console.log(isReverse(text1, text2)); 