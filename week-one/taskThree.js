//Linked Lists - Length & Count

//Implement Length() to count the number of nodes in a linked list.
//Implement Count() to count the occurrences of an integer in a linked list.

//solution after 30+ min

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
       let count = 0 
          let current = head
          while ( current != null) {
              count ++
              current = current.next
          }
          return count 
  }
  
  function count(head, data) {
    if(head.data === data){
      count += 1
      head = head.next
    }else {
      head = head.next
    }
    return count 
  }

  //Solution after researching the correct answer

function Node(data) {
  this.data = data;
  this.next = null;
}
function length(head) {
  let node = head
  let counter = 0
  while(node) {
    node = node.next
    counter++
  }
  return counter
}
function count(head, data) {
  let node = head
  let counter = 0
  while(node) {
    if(node.data === data) counter++
    node = node.next
  }
  return counter
}