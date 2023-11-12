let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

let copyPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress));

console.log(passportWithAddress.address.city);
console.log((copyPassportWithAddress.address.city = "Bobryisk"));
