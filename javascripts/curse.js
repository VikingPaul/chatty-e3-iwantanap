"use strict"
var Chatty = (function(oldChatty) {
  //Array to store curses from JSON into
  var curses = [];
  //Begin XHR
  $.ajax({
    url: "curse.json",
  }).done(function(data) {
    curses = data.bannedNameList.word;
  });
  //End XHR

  oldChatty.checkCurse = function() {
    var messageChecker = Chatty.getMessages();
    //Runs through message array takes into strings checks each agains the curse words. If it finds any, it adds styling.
    //After puts them back into the message array.
    for (var i in messageChecker) {
      let tempMessage = messageChecker[i].message;
      for (var k in curses) {
        let regWithCurse = new RegExp ("\\b" + curses[k] + "\\b", "ig");
        if (tempMessage.search(regWithCurse) != -1) {
          tempMessage = tempMessage.replace(regWithCurse, `<span class='curse'>${curses[k].toUpperCase()}</span>`);
        };
      };
      messageChecker[i].message = tempMessage;
    };
    Chatty.replaceMessages(messageChecker);
  }

  //Reverses the previous process, but only for 1 message. Takes Styling out of the string.
  oldChatty.revertCurse = function(msgText, msgID) {
  msgID = $(`#${msgID}`)
  let spanOpen = new RegExp (/\<span class="curse"\>/, "ig");
  let spanClose = new RegExp (/\<\/span\>/, "ig");

  msgText = msgText.replace(spanOpen, "");
  msgText = msgText.replace(spanClose, "");

  return msgText;
  }

  return Chatty
}(Chatty));