// Node constructor
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    };
}

// Linkedlist constructor with methods
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    };

    //append - adds new node to end of the linked list.
    append(value) {
        let node = new Node(value);
        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    //prepend - adds new node to start of the linked list.
    prepend(value) {
        this.head = new Node(value, this.head);
        this.length++;
    }

    //size - returns the total number of nodes in the linked list i.e length
    size() {
        console.log(this.length);
    }

    //head - returns the first node in the linked list
    head() {
        console.log(this.head.value);
    }

    //tail - return the last node in the linked list
    tail() {
        console.log(this.tail.value);
    }

    //atIndex - returns the node at a given index
    atIndex(index) {
        if (index < 0 || index > this.length) return;
        if (index === 0) return this.head;

        let current = this.head;
        let count = 0;
        while (count < index) {
            count++; //i.e start at head or 0 and progress through list until at node corresponding to index provided
            current = current.next;
        }
        if (!current) return console.log('node/index not found');
        return console.log(current.value);
    }

    //pop - removes the last element from the linked list
    pop() {
        let current = this.head;
        let previous;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.length--;
    }

    //containsValue - return true if the passed in value is contained in the linked lise, else false
    containsValue(value) {
        let current = this.head;
        let count = 0;
        while (count <= this.length) {
            count++;
            if (current.value === value) {
                return console.log(true);
            }
            if (current.next == null) { //this represents reaching the end of the linked list i.e pointer is set to null
                return console.log(false);
            }
            current = current.next //essentially tells it to move onto next node if the two IF conditions are false i.e value not found and not yet end of linked list
        }
    }
    //findValue - returns index of the node corresponding to passed in value, else null
    findValue(value) {
        let current = this.head;
        let count = 0;
        while (count <= this.length) {
            count++;
            if (current.value === value) {
                return console.log(count - 1);
            }
            if (current.next == null) {
                return console.log(null);
            }
            current = current.next;
        }
    }

    //toString - prints the Linkedlist object as a string in console
    toString() {
        let current = this.head;
        let string = '';
        while (current) {
            string += `( ${current.value}) ->`;
            if (current.next === null) {
                string += 'null';
            }
            current = current.next;
        }
        console.log(string);
    }

    //InsertAt - inserts node of passed value at a given index in the linked list
    insertAt(value, index) {
        if (index < 0 || index > this.length) return;
        if (index === 0) return this.preappend(value);
    
        const node = new Node(value);
        let current;
        let previous;
    
        current = this.head;
        let count = 0;
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
    
        node.next = current;
        previous.next = node;
        this.length++;
    }

    //removeAt - removes the node at the given index of the linked list
    removeAt(index) {
        if (index < 0 || index > this.length) return;
        if (index === 0) {
          return (this.head = this.head.next);
        }
    
        let current = this.head;
        let previous;
        let count = 0;
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
    
        previous.next = current.next;
        this.length--;
    }
}

export { LinkedList };