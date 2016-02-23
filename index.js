#! /usr/bin/env node
"use strict";

const login = require("facebook-chat-api");
const request = require("request");

login({email: "Enter your e-mail here", password: "Enter your Password here"}, function callback(err, api) {
  if (err) return console.error(err);
  
  var listen = api.listen(function callback(err, message) {
    if (err) return console.error(err);
    let msg = message.body.toLowerCase();
    
    //When message received
    if (msg) {
      //Return out of office message.
      api.sendMessage("Enter your out of office message here", message.threadID);
    }
  });
});
