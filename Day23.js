console.log("synchronous execution starts...");

const start = Date.now();
while(Date.now()-start <2000){};
console.log("message after 2 second.");

for(let i=0; i<=5; i++)
{
    const tick = Date.now();
    while(Date.now()-tick <1000){};
    console.log(`counter: ${i}`);
}

console.log("synchronous execution ends...");

console.log("asynchronous execution starts...");
function delay()
{
    setTimeout(() => {
        console.log("message after 2 seconds.");
    },2000);    
}
function counter()
{
    let i = 1;
    const interval = setInterval(() => {
        console.log(`counter: ${i}`);
        i++;
        if(i>5)
        {
            clearInterval(interval);
            console.log("asynchronous execution ends...");
        }
    },1000);
}

delay();
counter();
