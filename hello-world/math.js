// function add(a,b){
//   return a+b;
// }

// function sub(a,b){
//   return a-b;
// }

//THIS IS THE METHOD WE ARE GONNA USE TO EXPORT OUR FUNCTION
// module.exports = {      //to export the functions "module.exports" is used for exporting the object which contains these functions
//     add,
//     sub
//  } 

// module.exports = {      //to export the functions "module.exports" is used for exporting the object which contains these functions
//  addFn:  add,
//   subFn: sub
// } 


exports.add = (a,b) => a+b;

exports.sub = (a,b) => a-b;