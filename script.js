class Car {
    constructor(brand, model, modelYear) {
        this.brand = brand;
        this.model = model;
        this.modelYear = modelYear;
    }
}
const inputBrand = document.getElementById("brand")
const inputModel = document.getElementById("model")
const inputYear = document.getElementById("year")

const carData = [];

const addBtn = document.getElementById("add")

addBtn.onclick = () => {
    const newObj = new Car(inputBrand.value, inputModel.value, inputYear.value);
    carData.push(newObj);
    if (carData.length > 0) {
        let table = document.getElementById("table")
        let row;
        for (let i = 0; i < carData.length; i++) {
            row = `
          <tr class="bg-warning fw-bold text-dark">
          <td>${carData[i].brand}</td>
          <td>${carData[i].model}</td>
          <td>${carData[i].modelYear}</td>
            </tr>`

        }
        table.innerHTML += row;

        inputBrand.value = "";
        inputModel.value = "";
        inputYear.value = "";
    }


}