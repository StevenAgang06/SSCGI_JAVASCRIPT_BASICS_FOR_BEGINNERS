const street = "Catmon";
const city = "Malabon";
const zipCode = "1234";

// Factory Function
function showAddress(street, city, zipCode) {
  return {
    street: street,
    city: city,
    zipCode: zipCode,
  };
}

console.log(showAddress);

// Constructor Functiomn

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const newAddress = new Address(street, city, zipCode);

console.log(newAddress);
