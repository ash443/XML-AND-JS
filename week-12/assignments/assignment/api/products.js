const products = require("../data/cars");

const getAll = ({ id, first_name, Car_name, Car_year } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(products);

    if (id) {
      result = result.filter((item) => item.id === Number(id));
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (Car_name) {
      result = result.filter((item) => item.Car_name === Car_name);
    }

    if (Car_year) {
      result = result.filter((item) => item.Car_year === Number(Car_year));
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      resolve({ code: 200, data: product });
    } else {
      resolve({
        code: 404,
        data: { message: `No product found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
