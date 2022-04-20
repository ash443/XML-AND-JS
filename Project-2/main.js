const { getAllCars, getCarById } = require("./api/car");
    
const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  
  const rows = data.reduce(
    (acc, { id,first_name,email,gender,ip_address,car_company,car_model,car_color,year}) =>
      acc +
      `<tr>
        <td>${id}</td>
        <td>${first_name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${ip_address}</td>
        <td>${car_company}</td>
        <td>${car_model}</td>
        <td>${car_color}</td>
        <td>${year}</td>
    </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};



getAllCars().then(({ data }) => renderTable(data));  

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.filters.value;
  const cars_brand = event.target.cars_brand.value;
  const valueTerm = event.target.input.value;
  

  if(term === `id`) {
    getCarById(valueTerm).then(({ data }) => renderTable(data));
  } else {
    getAllCars(term,cars_brand.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
  }
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAllCars().then(({ data }) => renderTable(data));
};

document.getElementById("myForm").addEventListener("submit", onSubmit);
document.getElementById("myForm").addEventListener("reset", onReset);