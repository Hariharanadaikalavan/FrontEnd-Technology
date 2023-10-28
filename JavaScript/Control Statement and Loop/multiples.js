var sum=0;
var endvalue=10;

for (var startvalue=0;startvalue<endvalue;startvalue++)
{
    if(startvalue%3 ===0 || startvalue%5 ===0)
    {
        sum=sum+startvalue;
    }
}
console.log(sum);