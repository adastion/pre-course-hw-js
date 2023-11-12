let passport = {
  name: "Petr",
  surname: "Petrov",
};

let copyPasport;

for (let key in passport) {
  copyPasport = passport[key]
}


console.log(passport.name)
console.log(copyPasport.name = 'Ivan')