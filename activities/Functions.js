//activity_01
// function factorial (n) {
//  if ((n=== 0)||(n === 1)) {
//     return 1;
// } else {
// return (n *factorial(n-1));
//  }
// }
// console.log (n*factorial(33));
// make this an arrow function 

// const factorial = (n) => {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// };

// // Calculate n * factorial(n) for n = 33
// let n = 33;
// let result = n * factorial(n);
// console.log(result);



//activity_02
// let orderCount = (1)
// const takeOrder = (topping_1, topping_2) => {
//    console.log (`order:${orderCount}, will have a pizza with ${topping_1} and ${topping_2}.`)
//    orderCount++
// };
// takeOrder ("cheese", "ham")
// takeOrder ("ham", "mushroom")
// takeOrder ("sweetcorn", "pepperoni")

// activity_03
// let balance = 300;
// const pin = 4177;
// let account_number = 8594730275;
// const account =(pinNum,action,amount) => {
//     if (pin !== pinNum){
//         console.log("Incorrect PIN");
//         return;
//     }
    
//     switch (action) {
//         case 'withdraw':
//             if (balance >= amount && amount > 0){
//                 balance-= amount;
//                 console.log(`withdrawing €${amount}, your new balance is €${balance}`);
//             } else {
//                 console.log("Issufficient funds");
//             }
//             break;
//             case 'balance':
//                 console.log(`your current balance is €${balance}`);
//                 break;
//                 default:
//                     console.log("Invalid");
//     }
// };
// // account(4177, 'balance');
// account (4177,'withdraw', 30);


