function puzzle(number) { //declearing the function puzzle 


for (i=1; i<= number; i++) { // for i is an variable that is iterated in the loop starting at 1 and stoping at the variable number passed in. Iterates each time it runs through the functoin.

  if(i % 3 == 0 && i % 5 == 0) { // if the remainder of the number 0 after being divided by 3 and 5 then output Fizz Buzz
        console.log('Fizz Buzz') //Prints Fizz Buzz to the screen if both Parameters are met 
    }

  else if(i % 5 == 0){ // if the remainder of the number 0 after being divided by 5 then output Buzz
    console.log('Buzz')
}
  else if(i % 3 == 0) { // if the remainder of the number 0 after being divided by 3 then output Fizz 
    console.log('Fizz')
}

  else{
    console.log(i) //prints any of the numbers that don't fit the parameter above 
}

}
}

puzzle(200) //passes in 200 for the variable number 

//Final output should only print numbers that arean't divisble my 3 or 5 and print Fizz, Buzz or Fizz Buzz for those that are. 


//This the code me and my entire team came up with, however, the comments are solely mine. 
