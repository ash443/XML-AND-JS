const data=require("../src/controllers/products.json");

const getAll=()=>
    new Promise((resolve)=>{
        resolve({code:200,data});
    });

const getById=() => {}


module.exports = {
    getAll,
    getById
}