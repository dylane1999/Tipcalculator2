document.addEventListener('DOMContentLoaded', help)


function help(){
console.log("plzworkk")
}




function main() {
let bill = document.getElementById("bill").value;
let tipAsPercent = document.getElementById("tip").value;
let tipAsDollar = (bill * tipAsPercent) *.01;
let total = String(Number(bill) + Number(tipAsDollar));
let party = document.getElementById("party").value;
let perPerson = total/party
  console.log(document.getElementById("party").value);
  console.log(document.getElementById("bill").value);
  alert(`Total: ${total} \n
   Total per Person: ${perPerson} \n 
   Bill: ${bill} \n 
   Tip: ${tipAsDollar}`)
  


}
