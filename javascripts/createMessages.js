"use strict"

var Chatty = ( (oldChatty) => {

  //Keeps track of the current new message ID
  let id = 5;

  //This creates a new message when the enter key is pressed
  oldChatty.createNewMessage = () => {

    //Initializes the object for holding the information for any newly created message
    let newMessage = {};

    //Takes the value of the input box and runs it through the addEmoji function and the
    // returned value gets added to the newMessage object
    newMessage.message = Chatty.addEmoji($("#message-input").val());

    //Gets the current time of the message input and adds it to the newMessage object
    newMessage.timestamp = new Date();

    //Adds the current user name selected and adds it to the newMessage object
    newMessage.user = Chatty.selectUsers();

    //Assigns the current new message ID
    newMessage.id = id;

    //Since this is a new message, there is no edited message text so this is just a blank
    // string.
    newMessage.editted = "";

    //If the new message user is known, then makes a new user name (capitalizes it)
    // increments the new message id, adds the message object to the messages array,
    // and then refreshes the DOM message list
    if (newMessage.user !== undefined) {
      newMessage.user = newMessage.user.charAt(0).toUpperCase() + newMessage.user.slice(1);
      id++
      Chatty.addMessages(newMessage);
      Chatty.onToDom();
    };
  }

  return oldChatty;

})(Chatty);