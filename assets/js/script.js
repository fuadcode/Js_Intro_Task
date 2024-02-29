
//Task-1

// function countNum(num1, num2) {
//     let counter = 0;
//     for (let i = num1; i <= num2; i++) {
//       if (i % 2 !== 0) {
//         counter++;
//       }
//     }
//     return counter;
//   }
//   let num1 = 7;
//   let num2 = 18;
//   console.log(countNum(num1, num2)); 
  






//Task-2

//   function SimpleAndCompound(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   let numbers1 = 21;
//   if (SimpleAndCompound(numbers1)) {
//     console.log(`${numbers1} Sadə ədəddir...`);
//   } else {
//     console.log(`${numbers1} Mürəkkəb ədəddir...`);
//   }







//Task-3

//   function strength(n) {
//     return (n !== 0) && ((n & (n - 1)) == 0);
//   }
//   let numbers = 16;
//   if (strength(numbers)) {
//     console.log(`${numbers} 2-nin qüvvətidir..`);
//   } else {
//     console.log(`${numbers} 2-nin qüvvəti deyil..`);
//   }






//Task-4

// function CountRank(n) {
//   return Math.abs(n).toString().length;
// }
// let numbers = 856245;
// console.log(CountRank(numbers));

  




//Task-5

// function TotalArray(arr) {
//     let totalarr = 0;
//     for (let number of arr) {
//       totalarr += number;
//     }

//     console.log("Ümumi Arr:", totalarr);
//   }
  
//   let arr = [10, 20, 30, 40, 50];
//   TotalArray(arr);









//Task-6

// function MaxArr(arr) {
//     let maxarr = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > maxarr) {
//         maxarr = arr[i];
//       }
//     }
//     return maxarr;
//   }
  
//   let Arr = [25, 14, 45, 58, 16, 8];
//   console.log("Böyük Array:", MaxArr(Arr));









//Task-7

  // function ArrFirstAndLast(arr) {
  //   let calculation = arr[0] + arr[arr.length - 1];

  //   console.log("İlk və son ədələrin cəmi:", calculation);
  // }
  
  // let Arr = [25, 12, 72, 13, 18];
  // ArrFirstAndLast(Arr);

   






//Task-8

  // function CheckNumber(n) {
  //   if (n % 2 === 0) {
  //     console.log(`${n} Cüt ədəddir..`);
  //   } else {
  //     console.log(`${n} Tək ədəddir..`);
  //   }
  // }
  
  // let numbers = 18;
  // CheckNumber(numbers);







//Task-9

// function CheckDivideNumbers(n) {
//   if (n % 3 === 0 && n % 7 === 0) {
//     console.log(`${n} 3 və 7-ə bölünür.`);
//   } else {
//     console.log(`${n} 3 və 7-ə bölünmür.`);
//   }
// }

// let numbers = 56;
// CheckDivideNumbers(numbers);







  
//Task-10

// function CalculationNumbers(n, m) {
//   if (n % 2 === 0 && m % 2 === 0) {
//     let calc = n + m;
//     console.log(`n və m hər ikisi cütdür.. Cəmi: ${calc}`);
//   } else {
//     console.log("n və m cüt ədəd deyil..");
//   }
// }

// let n = 18;
// let m = 42;
// CalculationNumbers(n, m);







//Task-11  //Tək ədədlərin sayı...

// function NumbersCount(n, m) {
//   let stage = 0;
//   for (let i = n; i <= m; i++) {
//     if (i % 2 !== 0) {
//       stage++;
//     }
//   }
//   return stage;
// }

// let n = 11;
// let m = 29;
// console.log(NumbersCount(n, m));







//Task-12   //Tək ədədlərin Cəmi...

// function CalculationOddNumbers(n, m) {
//   let calc = 0;
//   for (let i = n; i <= n; i++) {
//     if (i % 2 !== 0) {
//       calc += i;
//     }
//   }
//   return calc;
// }

// let n = 17;
// let m = 33;
// console.log(CalculationOddNumbers(n, m));






//Task-13

// function NumberGivenM(m) {
//   let number = 1;
//   for (let i = 2; i <= m; i += 2) {
//     number*= i;
//   }
//   return number;
// }

// let m = 12;
// console.log(NumberGivenM(m));





 
//Task-14  //CheckingWeatherTemprature

// function CheckingWeatherTemprature(temp) {
//   if (temp < 15) {
//     console.log(`${temp} dərəcə olduğu üçün hava soyuqdur..`);
//   } else {
//     console.log(`${temp} dərəcə olduğu üçün hava istidir..`);
//   }
// }

// let temprature = -1;
// CheckingWeatherTemprature(temprature);




