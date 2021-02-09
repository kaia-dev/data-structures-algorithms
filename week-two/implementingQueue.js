/* 
In this problem, we are going to be implementing our own enqueue, dequeue, 
and size methods for the queue constructor we 
are creating, so we should be able to create new instances of the Queue.
*/

//solution in <30 min

var Queue = function() {
    this.data = []
  };
  
  Queue.prototype.enqueue = function(item) {
   this.data.push(item)
  };
  
  Queue.prototype.dequeue = function() {
    return this.data.shift()
  };
  
  Queue.prototype.size = function() {
    return this.data.length
  };

  //extended to fulfill Task 1 

 Queue.prototype.getFirst = function() {
    return this.data[0]
  };

  Queue.prototype.getLast = function() {
    return this.data[this.data.length - 1]
  };