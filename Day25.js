function runPromise(success = false)
{
    return new Promise((resolve, reject) =>
        {
        setTimeout(() =>
            {
                if(success)
                {
                    resolve("Promise Successful.");
                }
                else
                {
                    reject("Promise Unsuccessful.");
                }
            },2000);
    });
}

async function execute()
{
    try
    {
        const result1 = await runPromise(True);
        console.log(result1);
    }
    catch(error)
    {
        console.log(error);
    }
 
    try
    {
        const result2 = await runPromise(false);
        console.log(result2);
    }
    catch(error)
    {
        console.log(error);
    }
}

execute();
