//Linked Lists - Length & Count

//Implement Length() to count the number of nodes in a linked list.
//Implement Count() to count the occurrences of an integer in a linked list.

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