let myPromise=new Promise((resolve,reject)=>{
    const paymentSuccessful=true;
    if(paymentSuccessful) {
        resolve("order successfully placed");   
    } else {
        reject("order not placed");
    }
});
myPromise.then((message)=>{
    console.log(message);
});
myPromise.catch((error)=>{ 
    console.log(error);
}
);