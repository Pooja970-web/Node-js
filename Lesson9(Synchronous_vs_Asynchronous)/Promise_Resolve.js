let newPromise=new Promise((resolve,reject)=>{
    resolve("order successfully placed");
})
newPromise.then((message)=>{
    console.log(message);
})
/*
new Promise() --creates a Promise object.
resolve-- is a function used to fulfill the Promise with a value.
reject-- is a function used to reject the Promise with a reason.
resolve("order successfully placed") --fulfills the Promise with the value "Hello Pooja"
myPromise.then()-- registers a function to run when the Promise is fulfilled.
(message) => { ... } --is an arrow function.
message-- is a parameter that receives the value passed to resolve().
console.log(message)-- prints that value.
*/