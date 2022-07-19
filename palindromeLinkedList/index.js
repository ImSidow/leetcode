"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList"); // from => https://github.com/ImSidow/data-structure-typescript/blob/master/linkedList/LinkedList.ts
var linkedList = new LinkedList_1["default"]();
linkedList.addLast(1);
linkedList.addLast(2);
// linkedList.addLast(2);
// linkedList.addLast(1)
// let forward = linkedList.toArray().join('')
// linkedList.reverse()
// let backward = linkedList.toArray().join('')
// console.log(forward)
// console.log(backward)
// console.log(`${linkedList}`)
function isPalindrome(head) {
    var array = [];
    var currentNode = head;
    while (currentNode) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
    }
    while (head) {
        if (head.value !== array.pop())
            return false;
        head = head.next;
    }
    return true;
}
console.log(isPalindrome(linkedList.getHead()));
