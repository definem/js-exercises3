// < ---- Bismillah ---- >

// let books = [
//   { name: "Love for God", author: "One Person", price: "98.000" },
//   { name: "Çalıkuşu", author: "Reşat Nurı Güntekin", price: "50.000" },
//   { name: "Hedefimiz Cennet", author: "Hanife", price: "48.000" },
//   { name: "Nasıl dayandın Ya Resülüllah", author: "Mehmet Yıldız", price: "70.000",},
//   { name: "İslamiın kızına", author: "Hoca Mehmet", price: "86.000" },
// ];

// for (let i = 0; i < books.length; i++) {
//   if (books[i].price <= 70) {
//     console.log(`İstediğiniz kitab ${books[i].name}`);
//   }
//   console.log(
//     `İstediğiniz kitab'ın sahibi: ${books[i].author}, fıyatı:${books[i].price}.`
//   );
// }

// // CodeWars exercise-1

// function sumTwoSmallestNumbers(numbers) {  
//   var variable = numbers.sort(function(a, b){return a - b;});
//   var result = 0;

//   for(i = 0; i < variable.length; i++){
//     if(i == 0){
//       result+=variable[0];
//     }
//     if(i == 1){
//       result += variable[1];
//     }
//   }
//   return result;
// //Code here
// };

// Exercise from CodeWars, named "Powers of 2"

function powersOfTwo(n) {
  const powers = [];

  for (let i = 0; i <= n; i++) {
    let power = Math.pow(2, i);

    powers.push(power);
  }

  return powers;
}

let powers = powersOfTwo(5);
console.log(powers);



for(i = 0; i < ){

}
