
module.exports = (temp, product) => {
    let output = temp.replace(/{%ProductName%}/g, product.productName); // here using regular expression also called regex because we want to replace %productName% which is available globally
    output = output.replace(/{%Image%}/g, product.image);
    output = output.replace(/{%Price%}/g, product.price);
    output = output.replace(/{%From%}/g, product.from);
    output = output.replace(/{%Nutrients%}/g, product.nutrients);
    output = output.replace(/{%Quantity%}/g, product.quantity);
    output = output.replace(/{%Description%}/g, product.description);
    output = output.replace(/{%Id%}/g, product.id);
  
    if (!product.organic)
      output = output.replace(/{%Not_Organic%}/g, "not-organic");
  
    return output;
  };

// to export a function we use module.exports propery
// then assign a anonymous function to it, why anonymous because it has no name
//