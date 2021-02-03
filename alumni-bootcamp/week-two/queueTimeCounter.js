
// Queue Time Counter: https://www.codewars.com/kata/5b538734beb8654d6b00016d/train/javascript

//My solution after 30 minutes

function queue(queuers, pos){
//pseudo code:
    //pop person from front of q 
    //subtract 1 from their total number 
      //IF the q-er's element reaches zero I should 
      //shift them from the fron of the list 
      //but not push them to the end of the list.
    
    //push person to the back of the q
    
    //what does the friend position number have to do with anything? How can I 
    //continuue to track them through out the list?
    // everytime i move the friend I can subtract anothet number to their position
    //when their position becomes zero, then their position is set to be q.length
    let stepsFromInitialPosition = 0
    let buddyCurrentPosition = pos - stepsFromInitialPosition
    let waitTime = 0 
    
    while(queuers[buddyCurrentPosition] > 0) {
      
      //calc buddy's current position
        if(stepsFromInitialPosition == 0){
           stepsFromInitialPosition = len
        }
      
      //serve first in line
      if(queuers[0] > 0) {
        //deduct 1 ticket from q's total when they are served, 
        //move them to back of q
        let currentTicketValue = queuers[0]
        let newTicketValue = currentTicketValue - 1
         queuers.shift()
         queuers.push(newTicketValue)
         waitTime++
      }
      queuers.shift()
      
      return waitTime
    }
  }

  //revised solution after researching

  



  