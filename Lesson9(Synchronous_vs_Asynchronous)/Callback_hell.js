/* Callback Hell occurs when multiple callbacks are nested inside one another to handle asynchronous tasks. 
This makes the code difficult to read, understand, and maintain. */
setTimeout(()=>{
    console.log('1');
    setTimeout(()=>{
        console.log('2');
    }, 1000);
}, 1000);
console.log('3');