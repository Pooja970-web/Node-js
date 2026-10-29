//Asynchronous programming is a programming paradigm that allows for non-blocking operations, enabling tasks to run concurrently without waiting for each other to complete. This is particularly useful in scenarios where tasks may take an unpredictable amount of time, such as network requests or file I/O operations.
console.log("1.I woke up");
setTimeout(() => {
  console.log("2. I brushed my teeth");
}, 2000);

console.log("3. I ate breakfast");

console.log("start");
setTimeout(() => {
  console.log("Timer");
},0);
console.log("end");