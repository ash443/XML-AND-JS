
    const cars = require("../data/MOCK_DATA.json");
    
    const getAllCars = (term, cars_brand, valueTerm) =>
      new Promise((resolve) => {
        let data = cars;
    
        if(term) {
    
            switch(term) {
                
                case "first_name":
                    data = data.filter((car) => car.first_name.toLowerCase().includes(valueTerm));
                    break;
                
                case "gender":
                    data = data.filter((car) => car.gender.toLowerCase() === valueTerm.toLowerCase());
                    break;
                case "email":
                    data = data.filter((car) => car.email.toLowerCase().includes(valueTerm));
                    break;
                case "car_company":
                    data = data.filter((car) => car.car_company.toLowerCase().includes(valueTerm));
                    break;
                case "car_year":
                    data = data.filter((car) => car.car_year.toLowerCase().includes(valueTerm));
                    break;
                case "car_color":
                     data = data.filter((car) => car.car_color.toLowerCase().includes(valueTerm));
                     break;
                case "ip_address":
                    data = data.filter((car) => car.ip_address.includes(valueTerm));
                    break;    
                default:
                    // do nothing
                    break;
            }
        }
          
         
        if(cars_brand && cars_brand != "all") {
            data = data.filter((car) => car.company.toLowerCase() === cars_brand);
        }
        
        resolve({ code: 200, data: data });
      });
    
    const getCarById = (id) =>
      new Promise((resolve) => {
        const car = cars.find((car) => car.id === Number(id.trim()));
    
        if (car) {
            resolve({ code: 200, data: Array(car) });
        } else {
            resolve({
                code: 404,
                data: { message: `No Car found for id ${id}` },
            });
        }
      });
    
    module.exports = {
      getAllCars,
      getCarById,
    };
