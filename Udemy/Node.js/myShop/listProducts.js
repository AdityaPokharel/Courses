var faker = require("faker");

for(var _ = 0; _ < 10; _++){
    console.log(faker.commerce.productName() + " $" + faker.commerce.price());
    
}