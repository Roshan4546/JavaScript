// let marks = [35, 45, 85, 90, 99, 100, 100, 100, 100, 100];

// marks.filter((value) => value >= 90).forEach((value) => console.log(value));


// let n = prompt("Enter your name: ");

// let arr = [];

// for (let i = 0; i < n; i++){
//     arr[i] = i+1;
// }

// console.log(arr);


// let arr2 = arr.reduce((acc, curr) => {
//     return acc + curr;
// });

// console.log(arr2);

// let arr3 = arr.reduce((res, curr) => {
//     return res * curr;
// });

// console.log(arr3);


// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     for (const char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     console.log(`Number of vowels: ${count}`);
//     return count;
// }

// countVowels("hello world!");


function countVowels(str2) {
    let count = 0;
    for (const char of str2) {
        if(char ==='a'|| char ==='e'|| char ==='i'|| char ==='o'|| char ==='u'){
            count++;
        }
    }
    console.log(`Number of vowels: ${count}`);
    return count;
}

countVowels("hello world!");