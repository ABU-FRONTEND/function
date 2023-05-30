// let calcAverage = (numbers) => {
//     let res = 0
//     let total = 0
//     for(let i = 0; i < numbers.length; i++){
//         res += numbers[i]
//         total = (res / numbers.length)
//     }
//     return total
// }
// console.log(calcAverage([1, 2, 3, 4]));




// function getCount(str) {
//     let res = 0;
//     let arr = str.split("")
//     arr.forEach(item => {
//         if(item === 'a'){
//             res++
//         }else if(item === 'u'){
//             res++
//         }else if(item === 'o'){
//             res++
//         }else if(item === 'i'){
//             res++
//         }else if(item === 'e'){
//             res++
//         }else if(item === 'A'){
//             res++
//         }else if(item === "o'"){
//             res++
//         }else if(item === "O'"){
//             res++
//         }else if(item === 'U'){
//             res++
//         }else if(item === 'O'){
//             res++
//         } else if(item === 'I'){
//             res++
//         }else if(item === 'E'){
//             res++
//         }
//     });
//     return res
    
//   }
//  console.log( getCount("Abdusamad"));

function isPalindrom(x){
        let res = ''
    for(let i = 0; i < x.length; i++){
        res = x[i] + res
    }
    if(res === x){
        return true
    }
    else{
        return false
    }
}
console.log(isPalindrom("abba"));
