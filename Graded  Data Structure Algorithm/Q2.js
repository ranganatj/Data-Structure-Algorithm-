

class Node{
    constructor(key){
        this.key = key;
        this.next = null;
    }
}
 
function newNode(key){
    let outPut = new Node(key);
    return outPut;
}

 
let list1 = newNode(2);
list1.next = newNode(1);
list1.next.next = newNode(3);
 
let list2 = newNode(4);
list2.next = newNode(5);
list2.next.next = newNode(6);
 
let input = [];
while(list1 != null){
    input.push(list1.key);
    list1 = list1.next;
}
 
while(list2 != null){
    input.push(list2.key);
    list2 = list2.next;
}
 
input.sort(function(list1, list2){return list1 - list2});
let result = newNode(-1);
let outPut = result;
for(let i = 0; i<input.length; i++){
    result.next = newNode(input[i]);
    result = result.next;
}
outPut = outPut.next;
console.log("Output : sortedlist");
while(outPut != null){
    console.log(outPut.key + " ");
    outPut = outPut.next;
}