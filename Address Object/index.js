const address = {
  street: "Catmon",
  city: "Malabomn City",
  zipCode: "1479",
};

function showAddress(address) {
  for (let key in address) {
    console.log(`${key}: ${address[key]}`);
  }
}

showAddress(address);
