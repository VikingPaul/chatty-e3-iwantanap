"use strict"

// Listen for the event on the <body> element, and then inspect what the target of the event is
let chattyBody = $("body");



// ******************************** ALL KEYPRESS EVENTS ********************************>
// NAV: When return key is detected, you'll create a new message.
chattyBody.keypress(function(e) {
  if (event.target.id === "message-input" && event.code === "Enter" || event.target.id === "user-dropdown" && event.code === "Enter" && document.getElementById('message-input').value !== "") { 
    let selectedUser = $("#user-dropdown").val();  //grabs user who is "posting" 
      if (selectedUser === "defaultVal") {  //checks to make sure a user is selected. does not default to a specific value for UX, don't want to accidentally have all messages posted from first item in the array
            alert("Select a user, bozo.")
      } else {
        Chatty.createNewMessage();  //creates a new message object by sending it a function that builds the object, another function that pushes it to the array and then another function that outputs it to dom
        setTimeout(Chatty.chooseAI, Math.floor(Math.random()* 5000))  //creates unique and random response time for AI to respond to user's message entry
        $("#message-input").val("")  //resets the main input field
    }
  }
});



// ********************************* ALL CLICK EVENTS *********************************>
// MESSAGE BOARD: Clears most recent 20 messages in message board
chattyBody.click(function(e) {
  // NAV: When the user clicks the clear messages button, all current chat messages should be removed from the application.
  if (event.target.id === "clear-board") {
    let boardLeftovers = Chatty.getMessages().length - 21;  //sets up a variable that will access all but the last 20 messages
    for (let i = Chatty.getMessages().length - 1; i > boardLeftovers && i > -1; i--) {  //cycles (backward) through the array and selects the 20 most recent items
      Chatty.deleteMessage(i);  //deletes each of the 20 last messages on the board from the private messages array (see chatty.js for further info)
      Chatty.onToDom();  //cycles through current array (any remaining messages beyond 20) and the next >= 20 messages and outputs them to DOM (see chatty.js for further info)
    }
  }

  // INDIVIDAL MESSAGE: When the user clicks the delete messages beside a message, that message is removed from private array
  if (event.target.className.includes("deleteThisMessage") === true) {  //each delete button has a class of deleteThisMessage. this detects to see if clicked item contains that class
    let thisMessage = e.target.parentElement.parentElement.parentElement.id;  //selects clicked button, goes to it's parent (bootstrap button group), then goes up one more parent level to access full message and grab it's unique id
    Chatty.deleteSingleMessage(thisMessage);  //sends message ID into delete message that removes it from the array before it cycles through and outputs items to DOM again (see chatty.js for further info)
  }

  // INDIVIDAL MESSAGE: When the user clicks the delete messages beside a message, that message is removed from private array
  if (event.target.className.includes("editThisMessage") === true) {  //each select button has a class of editThisMessage. this detects to see if clicked item contains that class
    let thisMessage = e.target.parentElement.parentElement.parentElement;  //selects clicked button, goes to it's parent (bootstrap button group), then goes up one more parent level to access full message
    Chatty.editModeFunc(thisMessage);  //sends full message to editMode (see edit.js for further info)
  }

  // ACCESSIBILITY FEATURE: Turns background gray and color white by adding a CSS class
  if (event.target.id === "dark-theme" && event.target.checked === true) {  //modal: the dark-theme checkbox has an ID of "dark-theme". if value is checked, it returns true and procedes to classList.add function
    chattyBody.addClass("dark-theme");  //applies dark theme (regardless of any other themes applied)
  }

  // ACCESSIBILITY FEATURE: Removes background gray and color white by removing a CSS class
  if (event.target.id === "dark-theme" && event.target.checked === false) {  //modal: the dark-theme checkbox has an ID of "dark-theme". if value is unchecked by user, it returns false and procedes to classList.remove function
    chattyBody.removeClass("dark-theme");  //removes dark theme (even if it doesn't already have the class)
  }

  // ACCESSIBILITY FEATURE: Enlarges all text within the message area by adding a specific class to the container
  if (event.target.id === "large-text" && event.target.checked === true) {  //modal: the large-text checkbox has an ID of "large-text". if value is checked, it returns true and procedes to classList.add function
    $("#message-area").addClass("larger-text");  //applies large text (regardless of any other themes applied)
  }

  // ACCESSIBILITY FEATURE: Turns background gray and color white by adding a CSS class
  if (event.target.id === "large-text" && event.target.checked === false) {  //the large-text checkbox has an ID of "large-text". if value is unchecked, it returns false and procedes to classList.add function
    $("#message-area").removeClass("larger-text");  //removes large text (even if it doesn't already have the class)
  }


  // FUN THEMES: User is able to select from 4 themes via model 
  if (event.target.id === "theme1" && event.target.checked === true) {  //checks to see if user clicked on first theme
    chattyBody.removeClass("theme2", "theme3", "theme4");  //removes all the old themes so only new one is applied
    chattyBody.addClass("theme1");  //adds user's selected theme to the body
  }

  if (event.target.id === "theme2" && event.target.checked === true) {  //checks to see if user clicked on second theme
    chattyBody.removeClass("theme1", "theme3", "theme4")  //removes all the old themes so only new one is applied
    chattyBody.addClass("theme2");  //adds user's selected theme to the body
  }

  if (event.target.id === "theme3" && event.target.checked === true) {  //checks to see if user clicked on third theme
    chattyBody.removeClass("theme1", "theme2", "theme4");  //removes all the old themes so only new one is applied
    chattyBody.addClass("theme3");  //adds user's selected theme to the body
  }

  if (event.target.id === "theme4" && event.target.checked === true) {  //checks to see if user clicked on fourth theme
    chattyBody.removeClass("theme1", "theme2", "theme3");  //removes all the old themes so only new one is applied
    chattyBody.addClass("theme4");  //adds user's selected theme to the body
  }


  // NOT FUN THEMES: User is able to reset their theme to basic moqup styling
  if (event.target.id === "themeNone" && event.target.checked === true) {  //checks to see if user clicked on themeNone
    chattyBody.removeClass("theme1 theme2 theme3 theme4");  //removes all the old themes
  }

});



// ********************************* ALL CHANGE EVENTS *********************************>
// USER OPTIONS MENU: Applies user to each message, allows system admin to add users to private array before they are output to DOM
chattyBody.change(function() {
  if (event.target.tagName === "SELECT" && event.target.value === "addUser") {  //checks to ensure the click event is for both the dropdown menu and that the "addUser" value is selected
    let newUser = prompt("Name of new user");  //creates a new variable with the string output by user's input into the prompt
    if (newUser !== "") {  //checks to make sure user didn't simply hit "okay" on prompt box - resulting in an empty string
      Chatty.addUsers(newUser); //sends user's prompt input as a string into users array (see chatty.js for further info)
      let newestUser = Chatty.getUsers()[Chatty.getUsers().length - 1] //when the user adds a new user, the dropdown defaults to that value
      $("#user-dropdown").val(newUser);
    } else {
      newUser = prompt("Name of new user"); //prompts user again in case they exited the user prompt accidentally with a blank string for a value
    }
  }
});