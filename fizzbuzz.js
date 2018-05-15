/*
TITLE: FiZZBUZZ PROGRAM
AUTHOR: NDIFE U.S
DATE: 2nd May 2018
FOR: NODE JS CLASS
PURPOSE: THE PROGRAM WILL CHECK FOR VALUES FROM 1 TO 100, AND PRINT BUZZ, 
         IF NUMBER IS DIVISIBLE BY 5 OR PRINT FIZZ, 
         IF NUMBER IS DIVISIBLE BY 3, ELSE PRINT THE VALUE.
*/

function fizzBuzz(){

    for(let a=0; a<=100; a++){

        let five = a%5;              //check whether the number is divisible by 5
        let three = a%3;             //test if number is divisible by 3

        if(five==0 && three==0){
            console.log("FIZZBUZZ");
        }
        else if(five==0){
            console.log("BUZZ");

            }else if(three==0){
                console.log("FIZZ");

            }else{
                console.log(a);
        }
    }
}

fizzBuzz();