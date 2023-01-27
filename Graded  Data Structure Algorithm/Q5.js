

class Stack {
    constructor() {
        this.que1 = [];
        this.que2 = [];
    }
 
    push(data) {
        this.que2.push(data);
        while (this.que1.length != 0) {
            this.que2.push(this.que1[0]);
            this.que1.shift();
 
        }

        this.que3 = this.que1;
        this.que1 = this.que2;
        this.que2 = this.que3;
    }
 
    pop() {
        if (this.deep1.length == 0)
            return;
        this.que1.shift();
    }
 
    top() {
        if (this.que1.length == 0)
            return -1;
        return this.que1[0];
    }
 
    size() {
        console.log(this.que1.length);
    }
 
    isEmpty() {
        return this.que1.length == 0;
    }
 
    front() {
        return this.que1[0];
    }
}
 
let number = new Stack();
number.push(1);
number.push(2);
number.push(3);
 
console.log("current size: ");
number.size();
console.log(number.top());
number.pop();
console.log(number.top());
number.pop();
console.log(number.top());
 
console.log("current size: ");
number.size();