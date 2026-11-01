/*
1. What is EventEmitter?
Definition: EventEmitter is a built-in Node.js feature that allows us to create an event and execute a function when that event occurs.

Think about a doorbell. 🔔
Step 1: Someone presses the doorbell.

An event happens.

Step 2: The bell rings.

A function responds to the event.
2. Understand these three things first
Code	Simple meaning
EventEmitter	Creates an object that can manage events.
.on()	Says what should happen when an event occurs.
.emit()	Triggers the event.

Remember this simple rule:

.on() = Listen. .emit() = Trigger.
*/
const EventEmitter=require("events");//We import Node.js's built-in events module.
const myEmitter=new EventEmitter();//We create an object that can listen for and trigger events.
myEmitter.on("doorbell",()=>{/*We tell Node.js: “When the bell event happens, print this message.”/doorbell is event name
Notice that the function is registered here; it has not been called yet./myEmitter. object*/

    console.log("Someone is at the door!");
}   );
myEmitter.emit("doorbell");//We trigger the bell event. The registered function runs, so the message appears.
const event=new EventEmitter();//We create another object that can listen for and trigger events.
event.on("Login",()=>{
    console.log("UserLoged in!");
});
event.emit("Login");//We trigger the Login event. The registered function runs, so the message appears.