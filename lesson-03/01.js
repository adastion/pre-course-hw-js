// code
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter((item)=> {
      if (item === "черный") {
        return item
      }
      if (item === "красный") {
        return item
      }
      if (item === "желтый") {
        return item
      }
    }).join('-')
  }

console.log(createColorString());
