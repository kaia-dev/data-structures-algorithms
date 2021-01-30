class LinkedList {
     constructor() {
         this.head = this.tail = null 
     }

     append(value) {
         //if the list is empty 
         //Q: if we checked !this.head would that also indicate that the list is empty?
        if(!this.tail) {
             this.head = this.tail = new Node(value)
        }else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.previous = oldTail
        }
     }
     //add a node to the beginning of the list 
     prepend() {
        if(!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head 
            this.head = new Node(value)
            oldHead.prev = this.head 
            this.head.next = oldHead 
        }
     }

     deleteHead() {
        if(!this.head) {
            return null 
        } else {
            let removedHead = this.head 
            if(this.head === this.tail) {
                this.head = this.tail = null 
            } else {
                this.head = this.head.next 
                this.head.prev = null 
            }
        }
        return removedHead.value
        //why are we returning this when we have already reassigned the head?
     }

     deleteTail() {
        if(!this.tail) {
            return null 
        } else {
            let removedTail = this.tail 
            if(this.head === this.tail) {
                this.head = this.tail = null 
            } else {
                this.tail = this.tail.prev
                this.tail.next = null 
            }
        }
        return removedTail.value
        //why are we returning this when we have already reassigned the head?
     }

     search() {
        let currentNode = this.search 
        while(currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
     }
}

class Node {
    constructor(value, prev, next) {
        this.value = value 
        this.prev = prev
        this.next =  next 
    }
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)