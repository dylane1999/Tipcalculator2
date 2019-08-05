document.addEventListener("DOMContentLoaded");

}

function main() {
  let bill = document.getElementById("bill").value;
  let tipAsPercent = document.getElementById("tip").value;
  let tipAsDollar = bill * tipAsPercent * 0.01;
  let total = String(Number(bill) + Number(tipAsDollar));
  let party = document.getElementById("party").value;
  let perPerson = total / party;
  document.getElementById("tipOutput").value = tipAsDollar;
  document.getElementById("totalOutput").value = total;
  document.getElementById("partyOutput").value = perPerson;

  console.log(document.getElementById("party").value);
  console.log(document.getElementById("bill").value);
  console.log(document.getElementById("tip").value);
}