

let head;
class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

function reverse(head){
    if(head == null || head.next == null)
    return head;
    let rest = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return rest
}

function pointer(){
    let input = head;
    while(input != null){
        console.log(input.data + " ");
        input = input.next
    }
    console.log();
}

function push(data){
    let input = new Node(data);
    input.next = head;
    head = input;
}

push(1);
push(2);
push(3);
push(4);
console.log("linked list");
pointer();
head = reverse(head);
console.log("reverse linked list");
pointer();

