// 🔴🔴 here we will create a calculator class and export it
// class Calculator {
//   add(a, b) {
//     return a + b;
//   }

//   multiply(a, b) {
//     return a * b;
//   }

//   divide(a, b) {
//     return a / b;
//   }
// }

// module.exports = Calculator;
//🔴 We use module.exports when we want to export one single value
// in this case it it calculator class
//🔸 The above is one way to export a module
// we can do this as well

module.exports = class {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
};
