// TASK => Switch Vs IF Question

// let grade = prompt("enter your grade from 1 to 10");

// if (grade <= 4) {

//     alert("your grad is very bad");

// } else if (grade == 5) {

//     alert("your grade is bad");

// } else if (grade == 6 || grade <= 8) {

//     alert("your grade is good");

// } else if (grade <= 10) {

//     alert("your grade is very good");

// } else {

//     alert("enter a valid grade");
// }



// let grade = prompt("enter your grade from 1 to 10");

// switch (grade) {
//     case "0":
//     case "1":
//     case "2":
//     case "3":
//     case "4":
//         alert("your grade is very bad");
//     break;

//     case "5":
//         alert("your grade is bad");
//     break;

//     case "6":
//     case "7":
//     case "8":
//         alert("your grade is good");
//     break;

//     case "9":
//     case "10":
//         alert("your grade is very good");
//     break;

//     default: 
//         alert("enter a valid grade")
// }

// --------------------------------------------------------------------------------------

// Complex Tasks

let monthlyIncome = parseFloat(prompt("enter monthly income expenses")),
    savingGoal = parseFloat(prompt("enter your saving goal")),
    rent = parseFloat(prompt("enter rent expenses")),
    utilities = parseFloat(prompt("enter utilities expenses")),
    groceries = parseFloat(prompt("enter groceries expenses")),
    transportation = parseFloat(prompt("enter transportation expenses")),
    entertainment = parseFloat(prompt("enter entertainment expenses")),
    totalExpenses = rent + utilities + groceries + transportation + entertainment,
    remainingBalance = monthlyIncome - totalExpenses;


console.log(`your monthely income is ${monthlyIncome}`);
console.log(`your total expenses income is ${totalExpenses}`);
console.log(`your total remaining balance is ${remainingBalance}`);
alert(`your monthely income is ${monthlyIncome}`);
alert(`your total expenses income is ${totalExpenses}`);
alert(`your total remaining balance is ${remainingBalance}`);
alert(`your saving goal is ${savingGoal}`);


if (remainingBalance === 0) {
    alert("you have broke");

} else if (remainingBalance < 0) {
    alert("you have overspent");

} else if (remainingBalance >= savingGoal) {
    alert("congratulations for achieving your goal");

} else {
    alert("you have saved money this month");
}



