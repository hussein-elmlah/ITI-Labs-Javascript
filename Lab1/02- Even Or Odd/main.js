console.log(`script is working`);

var x = Number(prompt("Enter integer Number"));

if ( x%2 == 0 )
{
    console.log(`number ${x} is even`);
}
else if ( x%2 == 1 )
{
    console.log(`number ${x} is odd`);
}
else 
{
    console.log(`invalid input`)
}
