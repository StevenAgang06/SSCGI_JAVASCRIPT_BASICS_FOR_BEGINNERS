function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const newAddress1 = new Address("Catmon", "Malabon", "1234");
const newAddress2 = new Address("Catmon", "Malabon", "1234");

// console.log(newAddress1);

function areEqual(Address1, Address2) {
  for (let key in Address1) {
    if (Address1[key] != Address2[key]) {
      return false;
    }
  }
  return true;
}

function areSame(Address1, Address2) {
  return Address1 === Address2;
}

console.log(areEqual(newAddress1, newAddress2));
console.log(areSame(newAddress1, newAddress2));
