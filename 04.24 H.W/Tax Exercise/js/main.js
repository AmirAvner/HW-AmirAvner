var salary = prompt("please enter your salary");
var tax = Number;
if (salary < 25000) {
  tax = salary * 0.1;
  alert(tax);
} else if (salary < 50000) {
  tax = (salary - 25000) * 0.2 + 2500;
  alert(tax);
} else if (salary < 100000) {
  tax = (salary - 50000) * 0.3 + 7500;
  alert(tax);
} else if (salary < 150000) {
  tax = (salary - 100000) * 0.4 + 22500;
  alert(tax);
} else {
  tax = (salary - 150000) * 0.5 + 42500;
  alert(tax);
}
