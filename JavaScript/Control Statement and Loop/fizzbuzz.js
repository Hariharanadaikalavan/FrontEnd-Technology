var startingvalue=5;  
var valueupto=100;
for(startingvalue;startingvalue<=valueupto;startingvalue++)
{
if(startingvalue%3===0 && startingvalue%5===0)
{
    console.log(startingvalue+" "+"which is both remainder is zero"+" "+"FizzBuzz");
}
else if(startingvalue%3===0)
{
    console.log(startingvalue+" "+"Fizz");
}
else if(startingvalue%5===0)
{
    console.log(startingvalue+" "+"Buzz");
}
else{
    console.log(startingvalue);
}
}
