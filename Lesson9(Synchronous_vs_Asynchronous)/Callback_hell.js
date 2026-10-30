// Callback hell is a situation where callbacks are nested within other callbacks several levels deep, making the code hard to read and maintain.
setTimeout(()=>{
    console.log('1');
    setTimeout(()=>{
        console.log('2');
    }, 1000);
}, 1000);
console.log('3');