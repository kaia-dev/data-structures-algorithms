// Linked Lists - Push & BuildOneTwoThree
// Link: https://www.codewars.com/kata/55be95786abade3c71000079/train/javascript

//INSTRUCTIONS: 
//Write push() and buildOneTwoThree() functions to easily 
// update and initialize linked lists. Try to use the push() 
// function within your buildOneTwoThree() function.

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function push(head, data) {
    if(head === null) {
      head = new Node()
      head.data = data
      return head
    }
    head.next = data
    return head 
  }
  
  function buildOneTwoThree() {
    let head = null 
    while(head.data != 3) {
      for(i = 0; i <= 3 ; i++) {
          let currentNode = push(head, i)
          head = currentNode
      }
    } 
    return head
  }

  
  buildOneTwoThree()