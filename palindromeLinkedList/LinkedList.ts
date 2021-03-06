export interface INode<T> {
    value: T;
    next: INode<T> | null;
}

class Node<T> implements INode<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export default class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private count: number = 0;

    getHead(): Node<T> | null {
        return this.head;
    }

    addLast(value: T) {
        let node = new Node(value);
        if (this.isEmpty()) this.head = this.tail = node;
        else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }

        this.count++;
    }

    addFirst(value: T) {
        let node = new Node(value);
        if (this.isEmpty()) this.head = this.tail = node;
        else {
            node.next = this.head;
            this.head = node;
        }

        this.count++;
    }

    indexOf(value: T): number {
        let index = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (value === currentNode.value) return index;
            currentNode = currentNode.next;
            index++;
        }

        return -1;
    }

    contains(value: T): boolean {
        return this.indexOf(value) !== -1;
    }

    removeFirst() {
        if (this.isEmpty()) throw new Error("NoSuchElementException");

        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }

        let next = this.head?.next;
        this.head!.next = null;
        this.head = next!;

        this.count--;
    }

    removeLast() {
        if (this.isEmpty()) throw new Error("NoSuchElementException");

        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }

        let previousNode = this.getPreviousNode(this.tail!);
        this.tail = previousNode;
        this.tail!.next = null;

        this.count--;
    }

    size(): number {
        return this.count;
    }

    reverse() {
        if (this.isEmpty()) return;

        let previousNode = this.head;
        let currentNode = this.head?.next;
        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        this.tail = this.head;
        if (this.head) this.head.next = null;
        this.head = previousNode;
    }

    toArray(): T[] {
        let items: T[] = [];

        let currentNode = this.head;
        while (currentNode) {
            items.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return items;
    }

    toString(): string {
        return `[${this.toArray().join(", ")}]`;
    }

    private isEmpty() {
        return this.head === null;
    }

    private getPreviousNode(node: Node<T>): Node<T> | null {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.next === node) return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }
}
