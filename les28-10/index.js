class Order {
  constructor(price, city, type) {
    // this.id = toString.Math.floor(Math.random() * 10000);
    this.price = price;
    // this.dateCreated = Date();
    // this.isConfirmed = false;
    // this.dateConfirmed = 0;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return price > 1000;
  }

  //   confirmOrder() {
  //     if (isConfirmed == false) {
  //       isConfirmed = true;
  //       dateConfirmed = Date();
  //     }
  //   }

  //   isValideType() {
  //     return type === "Buy" || type === "Sell";
  //   }
}
console.log(price);
console.log(id);
console.log(type);
console.log(dateCreated);

const order1 = new Order(100, "Lviv", "Buy");
order1.checkPrice();
