let myPromise=new Promise((resolve,reject) => {
    reject("order not placed");
});
myPromise.catch((error)=>{
    console.log(error);
});
/*
.catch()--handles the rejected promise.
error--is a parameter that receives the rejected reason passed to reject().
console.log(error)--prints that reason.
*/


