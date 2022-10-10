const Yuhennas = {
    name: "Yuhennas", 
    surname: "Melikov",    
    salary: 500,
};


const Asim = {
    name: "Asim",
    surname: "Memmedov",
    salary: 800,
    
}
const ZaminEli = {
    name: "Zamin",
    surname: "Rustemov",
    salary: 2500,
};

const Ismayil = {
    name: "Ismayil",
    surname: "Zeynalov",
    salary: 3000,
};
const Rovsen = {
    name: "Rovsen",
    surname: "Khalilov",
    salary: 3500,
}

const Tunar = {
    name: "Tunar",
    surname: "Eliyev",
    salary: 1500,
}

const Ferid = {
    name: "Ferid",
    surname: "Hacizade",
    salary: 1200,
}
const Leman = {
    name: "Leman",
    surname: "Elizade",
    salary: 700,
}

const Togrul = {
    name: "Togrul",
    surname: "Haciyev",
    salary: 1200,
}


const Workers = [Yuhennas, ZaminEli, Ismayil, Rovsen, Tunar, Asim, Ferid, Leman, Togrul]

Workers.sort((a, b) => a.name.localeCompare(b.name))
console.log(Workers);

 function Some(arr, callback) {
     let check=0;
     for (let i = 0; i < arr.length; i++) {
        if (true == callback(arr[i])) {
             check++;
         }      
     }
     if (check > 0) {
         return true;
     }
     else
         return false;
 }
//  console.log(Some(Workers, function (item) {
//      return item.salary > 1000;
//  }));




function Find(arr, callback) {
     for (let i = 0; i < arr.length; i++) {
          if ( true == callback(arr[i])) {
       return arr[i];
     }
         
     }
}
//  console.log(Find(Workers, function (item,index) {
//     return item.salary==700;
// }));

 function Filter(arr, callback) {
     for (let i = 0; i < arr.length; i++) {
         if (true == callback(arr[i])) {
              console.log(arr[i]);
        }
     }
 }
//  console.log(Filter(Workers, function (item) {
//      return item.salary > 1000;
//  }));



   
        function Every(arr, callback) {
     for (let i = 0; i < arr.length; i++) {
         if (true == callback(arr[i])) {
             return true;
             break;
         }
         else
             return false;
     }
 }
//  console.log(Every(Workers, function (item) {
//      return item.salary>100;
//  }));

