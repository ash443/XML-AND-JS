const a = new Promise((resolve,reject) => {



    resolve('Success'); 
    
    
    
    reject(new Error("Error"));
    
    });
    
    
    
    a.value(value => {
    
    console.log(value); 
    
    },reason=> {
    
    console.error("Error ") 
    
    });

    a();