// Write your solution in this file!
var customerName = "bob" ;
function findCustomerName() {
    return customerName;
}
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  
function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  
const leastFavoriteCustomer = 'Epic';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Dull';
  }
  changeLeastFavoriteCustomer();