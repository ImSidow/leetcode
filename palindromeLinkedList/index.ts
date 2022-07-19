import LinkedList from "./LinkedList"; // from => https://github.com/ImSidow/data-structure-typescript/blob/master/linkedList/LinkedList.ts
import { INode } from "./LinkedList"; // from => https://github.com/ImSidow/data-structure-typescript/blob/master/linkedList/LinkedList.ts

const linkedList = new LinkedList<number>();

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

function isPalindrome(head: INode<number> | null): boolean {
    let array = [];

    let currentNode = head;
    while (currentNode) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
    }

    while (head) {
        if (head.value !== array.pop()) return false;
        head = head.next;
    }

    return true;
}

console.log(isPalindrome(linkedList.getHead()));
