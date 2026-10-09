let num = -3;
if(num > 0)
{
    console.log("The number is positive: " + num);
}
else if(num < 0)
{
    console.log("The number is negative: " + num);
}
else
{
    console.log("The number is: 0" )
}

var day = 4;
switch(day)
{
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day");
}

for(let i=1; i<11; i++)
{
    console.log(i);
}

let i = 1;
while(i<=5)
{
    console.log(i);
    i++;
}

let j = 1;
do
{
    console.log(j);
    j++;
}
while(j<4);

for(let k = 1; k<=10; k++)
{
    if(k == 5)
    {
        continue;
    }
    else if(k == 8)
    {
        break;
    }
    console.log(k);
}
