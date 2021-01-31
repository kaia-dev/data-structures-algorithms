// Task 1: Please Implement a Linked List 
// Including it's helper methods:
// size, clear, getLast, getFirst
// you should be able to do this from memory


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
            this.tail.prev = oldTail
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

    getSize() {
        let count = 0 
        let current = this.head
        while ( current != null) {
            count ++
            current = current.next
        }
        return count 
    }

    clear() {
        let head = this.head
        while ( head != null ) {
            head = head.next
            head.prev = null
            this.head = head
            if(this.tail === this.head) {
                this.head = null
                this.tail = null
                return "Successfully cleared list"
            }
        }
    }

    //note: I think that this solution does work, but the value of this.tail and this.head is literally null and those nodes still seem to exist inside of the linked list in memmory. 
    //what is weird though, is that when I call getSize() on the list it returns 0 
    //what does this say about my linked list's position in memory? Is it still there in some form?
    //is it a GHOOOOOOSSSSSTTTTT??!?!??!?!?!? ~ ~ ( > ")>  < BOO MITCH!!! I'm back!) ผ(•̀_•́ผ) < You little!!!!)
    //Here is what I called to clear the list and confirm it was dead and burried. 
        //list.clear()
        //return list.getSize()

    getFirst() {
        return this.head.value
    }

    getLast() {
        return this.tail.value
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
list.append("Monkey")

