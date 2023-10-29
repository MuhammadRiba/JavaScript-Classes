
var eng = 80;
var chem = 95;
var maths = 65;
var phy = 98;
var comp = 65;


var obtno = eng + chem + maths + phy + comp;

console.log("Your Obtained Marks are : " + obtno);

var per = obtno * 100  / 500;

console.log("Your Percentage is : " + per);

if (per >= 80)
{
    console.log("You Grade is : A+");
}
else if (per >= 70)
{
    console.log("You Grade is : A");
}
else if (per >= 60)
{
    console.log("You Grade is : B");
}
else if (per >= 50)
{
    console.log("You Grade is : C");
}
else if (per >= 40)
{
    console.log("You Grade is : D");
}
else
{
    console.log("You Grade is : F");
}