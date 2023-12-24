//🔴alternative for doing module.exports
// is to add properties to the exports object itself
// using the calculator example as before we can do it like this

exports.add = (a, b) => a + b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;

//🔸so here we created three anonymous functions here and assigned them to three properties of exports
// so now when we imports this module on the other side so in 04.RequireWorking.js we will get
// basically access to this exports objects
