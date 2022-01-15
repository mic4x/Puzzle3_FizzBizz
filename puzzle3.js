function puzzle(number) {


for (i=1; i<= number; i++) { // for i is an variable that is iterated in the loop starting at 1 and stoping at the variable number passed in

  if(i % 3 == 0 && i % 5 == 0) { // if the remainder of the number 0 after being divided by 3 and 5 then output Fizz Buzz
        console.log('Fizz Buzz')
    }

  else if(i % 5 == 0){ // if the remainder of the number 0 after being divided by 5 then output Buzz
    console.log('Buzz')
}
  else if(i % 3 == 0) { // if the remainder of the number 0 after being divided by 3 then output Fizz 
    console.log('Fizz')
}

  else{
    console.log(i)
}

}
}

puzzle(200) //passes in 200 for the variable number 