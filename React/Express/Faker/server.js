const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 8000;



class User {
  constructor() {
    this.password = faker.internet.password(9);
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email(this.firstName, this.lastName);
    this.phoneNumber = faker.phone.phoneNumber();
    this._id = faker.random.numeric(6);
  }
}

app.get("/api/users/new", (req, res) => {
  var newUser = new User();
  res.json(newUser);
});

class Company {
  constructor() {
    this._id = faker.random.numeric(9);
    this.companyName = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

app.get("/api/companies/new", (req, res) => {
    var newComp = new Company();
    res.json(newComp);
  });
  



app.get("/api/user/company", (req, res) => {
  let newUser = new User();
  let newComp = new Company();
  res.json({ newUser, newComp });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
