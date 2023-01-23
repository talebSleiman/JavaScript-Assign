// Edit The Class
// class User {
//     constructor(username, card) {
//         this.u = username;
//         this.c = card;
//     }
// }

// After Edit
class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
        this.showData = `Hello ${this.u} Your Credit Card Number Is ${this.getCard()}`;
    }
    getCard() {
        this.#c = this.#c.toString();
        let re = /(\d{4}-){3}(\d{4})/g;
        return re.test(this.#c) === true ? this.#c : `${this.#c.substr(0, 4)}-${this.#c.substr(4, 4)}-${this.#c.substr(8, 4)}-${this.#c.substr(12, 4)}`;
    }
}

// Do Not Edit Anything Below
let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined