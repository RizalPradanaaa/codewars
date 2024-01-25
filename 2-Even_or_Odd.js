// function evenOrOdd(number) {
//   let message = "";
//   if (number % 2 == 0) {
//     return (message = "Even");
//   } else {
//     return (message = "Odd");
//   }
// }

// function evenOrOdd(number) {
//   const message = number % 2 == 0 ? "Even" : "Odd";
//   return message;
// }

const evenOrOdd = (number) => (number % 2 == 0 ? "Even" : "Odd");

console.log(evenOrOdd(2));
