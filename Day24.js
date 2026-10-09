function runCallback(callback)
{
    setTimeout(() =>{
        callback("this is 2 seconds...");
    },2000);
}

runCallback((message) => {
    console.log(message);
});

function runPromise(success = false)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(success)
            {
                resolve("Promise successful.");
            }
            else
            {
                reject("Promise unsuccessful.");
            }
        },2000);
    });
}

runPromise(true)
    .then((result) =>{
        console.log(result);
    })
    .catch((error) =>{
        console.log(error);
    });

runPromise(false)
    .then((result) =>{
        console.log(result);
    })
    .catch((error) =>{
        console.log(error);
    });
