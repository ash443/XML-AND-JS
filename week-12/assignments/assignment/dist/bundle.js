(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../data/cars":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"first_name":"Gordon","Car_name":"GMC","Car_year":2008,"Car_color":"Violet"},
  {"id":2,"first_name":"Elmo","Car_name":"Hyundai","Car_year":2003,"Car_color":"Crimson"},
  {"id":3,"first_name":"Jasen","Car_name":"Land Rover","Car_year":1995,"Car_color":"Maroon"},
  {"id":4,"first_name":"Gilly","Car_name":"Hummer","Car_year":2001,"Car_color":"Mauv"},
  {"id":5,"first_name":"Gualterio","Car_name":"Subaru","Car_year":2010,"Car_color":"Red"},
  {"id":6,"first_name":"Anabal","Car_name":"Volkswagen","Car_year":2001,"Car_color":"Goldenrod"},
  {"id":7,"first_name":"Zacherie","Car_name":"Volvo","Car_year":1997,"Car_color":"Green"},
  {"id":8,"first_name":"Karyl","Car_name":"GMC","Car_year":2011,"Car_color":"Purple"},
  {"id":9,"first_name":"Stavro","Car_name":"Mercedes-Benz","Car_year":2006,"Car_color":"Indigo"},
  {"id":10,"first_name":"Nonnah","Car_name":"Volvo","Car_year":2012,"Car_color":"Puce"},
  {"id":11,"first_name":"Willa","Car_name":"Toyota","Car_year":2012,"Car_color":"Fuscia"},
  {"id":12,"first_name":"Gianina","Car_name":"Volvo","Car_year":2008,"Car_color":"Pink"},
  {"id":13,"first_name":"Thorny","Car_name":"Mercury","Car_year":1967,"Car_color":"Orange"},
  {"id":14,"first_name":"Sholom","Car_name":"Dodge","Car_year":2009,"Car_color":"Crimson"},
  {"id":15,"first_name":"Ingra","Car_name":"Ford","Car_year":2006,"Car_color":"Puce"},
  {"id":16,"first_name":"Penelopa","Car_name":"Porsche","Car_year":2005,"Car_color":"Puce"},
  {"id":17,"first_name":"Corabel","Car_name":"Porsche","Car_year":1988,"Car_color":"Khaki"},
  {"id":18,"first_name":"Glad","Car_name":"Mitsubishi","Car_year":1997,"Car_color":"Puce"},
  {"id":19,"first_name":"Andreana","Car_name":"Buick","Car_year":1984,"Car_color":"Blue"},
  {"id":20,"first_name":"Garrot","Car_name":"GMC","Car_year":1992,"Car_color":"Teal"},
  {"id":21,"first_name":"Charita","Car_name":"GMC","Car_year":1995,"Car_color":"Aquamarine"},
  {"id":22,"first_name":"Thibaud","Car_name":"Ford","Car_year":1997,"Car_color":"Goldenrod"},
  {"id":23,"first_name":"Rosella","Car_name":"Pontiac","Car_year":2006,"Car_color":"Puce"},
  {"id":24,"first_name":"Inigo","Car_name":"Lamborghini","Car_year":1990,"Car_color":"Mauv"},
  {"id":25,"first_name":"Brynn","Car_name":"Suzuki","Car_year":2002,"Car_color":"Orange"},
  {"id":26,"first_name":"Rahal","Car_name":"Chrysler","Car_year":2005,"Car_color":"Crimson"},
  {"id":27,"first_name":"Julianna","Car_name":"Buick","Car_year":1989,"Car_color":"Turquoise"},
  {"id":28,"first_name":"Vita","Car_name":"Infiniti","Car_year":1997,"Car_color":"Turquoise"},
  {"id":29,"first_name":"Emogene","Car_name":"Dodge","Car_year":1993,"Car_color":"Orange"},
  {"id":30,"first_name":"Justina","Car_name":"Dodge","Car_year":1995,"Car_color":"Khaki"},
  {"id":31,"first_name":"Cairistiona","Car_name":"Chevrolet","Car_year":2001,"Car_color":"Turquoise"},
  {"id":32,"first_name":"Normy","Car_name":"Mercedes-Benz","Car_year":1998,"Car_color":"Purple"},
  {"id":33,"first_name":"Sully","Car_name":"Ford","Car_year":2009,"Car_color":"Pink"},
  {"id":34,"first_name":"Forester","Car_name":"Porsche","Car_year":1988,"Car_color":"Turquoise"},
  {"id":35,"first_name":"Zenia","Car_name":"Lotus","Car_year":1987,"Car_color":"Yellow"},
  {"id":36,"first_name":"Rasia","Car_name":"Honda","Car_year":1988,"Car_color":"Fuscia"},
  {"id":37,"first_name":"Marin","Car_name":"Toyota","Car_year":1992,"Car_color":"Pink"},
  {"id":38,"first_name":"Alessandro","Car_name":"Bentley","Car_year":2012,"Car_color":"Teal"},
  {"id":39,"first_name":"Angy","Car_name":"Mazda","Car_year":1992,"Car_color":"Violet"},
  {"id":40,"first_name":"Jeanie","Car_name":"Saturn","Car_year":1996,"Car_color":"Violet"},
  {"id":41,"first_name":"Thaddus","Car_name":"Pontiac","Car_year":2007,"Car_color":"Turquoise"},
  {"id":42,"first_name":"Klement","Car_name":"Buick","Car_year":1996,"Car_color":"Yellow"},
  {"id":43,"first_name":"Lorrie","Car_name":"Ford","Car_year":2003,"Car_color":"Blue"},
  {"id":44,"first_name":"Tully","Car_name":"Subaru","Car_year":2005,"Car_color":"Mauv"},
  {"id":45,"first_name":"Munmro","Car_name":"GMC","Car_year":2001,"Car_color":"Goldenrod"},
  {"id":46,"first_name":"Neddie","Car_name":"Chrysler","Car_year":2010,"Car_color":"Aquamarine"},
  {"id":47,"first_name":"Nikos","Car_name":"Audi","Car_year":1993,"Car_color":"Red"},
  {"id":48,"first_name":"Colet","Car_name":"Lincoln","Car_year":1993,"Car_color":"Goldenrod"},
  {"id":49,"first_name":"Cori","Car_name":"Mazda","Car_year":1989,"Car_color":"Maroon"},
  {"id":50,"first_name":"Upton","Car_name":"Rolls-Royce","Car_year":2006,"Car_color":"Orange"},
  {"id":51,"first_name":"Kellby","Car_name":"GMC","Car_year":2006,"Car_color":"Orange"},
  {"id":52,"first_name":"Anselm","Car_name":"Mercedes-Benz","Car_year":2004,"Car_color":"Purple"},
  {"id":53,"first_name":"Graeme","Car_name":"Nissan","Car_year":2012,"Car_color":"Puce"},
  {"id":54,"first_name":"Flinn","Car_name":"BMW","Car_year":1992,"Car_color":"Green"},
  {"id":55,"first_name":"Allene","Car_name":"Land Rover","Car_year":2003,"Car_color":"Mauv"},
  {"id":56,"first_name":"Ferdinand","Car_name":"Mazda","Car_year":2010,"Car_color":"Fuscia"},
  {"id":57,"first_name":"Claribel","Car_name":"Ford","Car_year":2003,"Car_color":"Violet"},
  {"id":58,"first_name":"Ollie","Car_name":"Subaru","Car_year":2003,"Car_color":"Maroon"},
  {"id":59,"first_name":"Fan","Car_name":"Mercury","Car_year":2000,"Car_color":"Violet"},
  {"id":60,"first_name":"Thurstan","Car_name":"Porsche","Car_year":1990,"Car_color":"Mauv"},
  {"id":61,"first_name":"Panchito","Car_name":"Mazda","Car_year":1992,"Car_color":"Goldenrod"},
  {"id":62,"first_name":"Julius","Car_name":"Land Rover","Car_year":2007,"Car_color":"Orange"},
  {"id":63,"first_name":"Shana","Car_name":"Lincoln","Car_year":1985,"Car_color":"Teal"},
  {"id":64,"first_name":"Aggi","Car_name":"Pontiac","Car_year":1991,"Car_color":"Turquoise"},
  {"id":65,"first_name":"Mikkel","Car_name":"Chevrolet","Car_year":1993,"Car_color":"Blue"},
  {"id":66,"first_name":"Rinaldo","Car_name":"Honda","Car_year":2012,"Car_color":"Violet"},
  {"id":67,"first_name":"Demetris","Car_name":"Subaru","Car_year":1992,"Car_color":"Blue"},
  {"id":68,"first_name":"Terri-jo","Car_name":"Ford","Car_year":1999,"Car_color":"Goldenrod"},
  {"id":69,"first_name":"Charline","Car_name":"Subaru","Car_year":2005,"Car_color":"Goldenrod"},
  {"id":70,"first_name":"Garold","Car_name":"GMC","Car_year":1997,"Car_color":"Aquamarine"},
  {"id":71,"first_name":"Oralle","Car_name":"BMW","Car_year":2005,"Car_color":"Mauv"},
  {"id":72,"first_name":"Ami","Car_name":"Dodge","Car_year":2003,"Car_color":"Turquoise"},
  {"id":73,"first_name":"Adina","Car_name":"Chevrolet","Car_year":2010,"Car_color":"Aquamarine"},
  {"id":74,"first_name":"Brandais","Car_name":"Chevrolet","Car_year":2000,"Car_color":"Goldenrod"},
  {"id":75,"first_name":"Georgianna","Car_name":"Cadillac","Car_year":1993,"Car_color":"Maroon"},
  {"id":76,"first_name":"Say","Car_name":"Chevrolet","Car_year":2007,"Car_color":"Indigo"},
  {"id":77,"first_name":"Rocky","Car_name":"Audi","Car_year":1992,"Car_color":"Indigo"},
  {"id":78,"first_name":"Thia","Car_name":"Buick","Car_year":1990,"Car_color":"Purple"},
  {"id":79,"first_name":"Cos","Car_name":"Porsche","Car_year":2010,"Car_color":"Turquoise"},
  {"id":80,"first_name":"Reggi","Car_name":"Mazda","Car_year":1986,"Car_color":"Purple"},
  {"id":81,"first_name":"Dorothee","Car_name":"Bentley","Car_year":2011,"Car_color":"Maroon"},
  {"id":82,"first_name":"Freeman","Car_name":"Ford","Car_year":2003,"Car_color":"Puce"},
  {"id":83,"first_name":"Collette","Car_name":"Buick","Car_year":1989,"Car_color":"Khaki"},
  {"id":84,"first_name":"Deanna","Car_name":"Volkswagen","Car_year":2004,"Car_color":"Indigo"},
  {"id":85,"first_name":"Nicoli","Car_name":"Mitsubishi","Car_year":1990,"Car_color":"Teal"},
  {"id":86,"first_name":"Shir","Car_name":"GMC","Car_year":2007,"Car_color":"Yellow"},
  {"id":87,"first_name":"Laurena","Car_name":"Mitsubishi","Car_year":1997,"Car_color":"Goldenrod"},
  {"id":88,"first_name":"Kathryn","Car_name":"Volkswagen","Car_year":2009,"Car_color":"Teal"},
  {"id":89,"first_name":"Balduin","Car_name":"Mitsubishi","Car_year":1992,"Car_color":"Red"},
  {"id":90,"first_name":"Vaughan","Car_name":"Ford","Car_year":2001,"Car_color":"Goldenrod"},
  {"id":91,"first_name":"Clementia","Car_name":"Mercedes-Benz","Car_year":1985,"Car_color":"Puce"},
  {"id":92,"first_name":"Charin","Car_name":"Land Rover","Car_year":2012,"Car_color":"Mauv"},
  {"id":93,"first_name":"Juan","Car_name":"Acura","Car_year":1996,"Car_color":"Teal"},
  {"id":94,"first_name":"Drona","Car_name":"Audi","Car_year":2009,"Car_color":"Crimson"},
  {"id":95,"first_name":"Merrielle","Car_name":"GMC","Car_year":1993,"Car_color":"Aquamarine"},
  {"id":96,"first_name":"Axel","Car_name":"GMC","Car_year":1995,"Car_color":"Orange"},
  {"id":97,"first_name":"Rosie","Car_name":"Oldsmobile","Car_year":1993,"Car_color":"Maroon"},
  {"id":98,"first_name":"Dina","Car_name":"Ford","Car_year":1995,"Car_color":"Fuscia"},
  {"id":99,"first_name":"Perri","Car_name":"Maserati","Car_year":1990,"Car_color":"Khaki"},
  {"id":100,"first_name":"Tedmund","Car_name":"Rolls-Royce","Car_year":2005,"Car_color":"Aquamarine"}]
},{}],3:[function(require,module,exports){
const { getAll } = require("./api/products.js");

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  if (nameTerm) {
    source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
  }

  const rows = source.reduce(
    (acc, { id,first_name, Car_name,Car_year, Car_color }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${Car_name}</td><td>${Car_year}</td><td>${Car_color}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAll().then(({ data }) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  getAll().then(({ data }) => renderTable(data, term));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};
},{"./api/products.js":1}]},{},[3]);
