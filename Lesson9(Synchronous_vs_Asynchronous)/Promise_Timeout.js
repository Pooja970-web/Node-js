const orderPromise = new Promise((resolve, reject) => {
    console.log("Placing your order...");

    setTimeout(() => {
        resolve("Your food is ready!");
    }, 2000);
});

orderPromise.then((message) => {
    console.log(message);
});