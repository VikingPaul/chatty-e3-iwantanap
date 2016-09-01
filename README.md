# NSS Group Exercise: Chatty

### Specs:
> Create a Single Page Application that mirrors a "chat room" and features the following:

1. Sticky Navigation:
  * Input field that accepts return key as submit 
      - Can also be done through the User Input
  * Button to clear message board (last 20 messages) 
  * Themes button that brings up modal   

1. Options and Themes:
  * Accessibility: Dark theme applies to whole body, large text applies to message field. These should be controlled by checkboxes. 
  * Themes: User has optional theme selection by toggling different selections. These should be controlled by radiobuttons. 

1. Message Module:
  * Default Messages: Load 5 base messages from JSON files. 
  * Option to delete individual button: when the delete button next to a message is clicked, only that message should be removed from the DOM.
  * Only show the last 20 messages.
  * Timestamp: Put a timestamp on each message.

1. Multiple Users:
  * Users should be imported to DOM through private array. 
  * Next to the message input box, there should be an option to select user posting message.


### Technologies Used:
> 1. CSS: Themes, Boostrap Overrides, Basic Styling
> 2. [Bootstrap](https://github.com/twbs/bootstrap): Nav, Modals, Buttons 
> 3. [JQuery](https://github.com/jquery/jquery): Modals for Bootsrap
> 4. JavaScript: IIFE and augmentation, XHR, JSON, Event Listeners, DOM Manipulation

### Final Result:
> "Chat Room" where users are able to send messages from their specific username, edit their messages, receive replies from an AI and customize their themes.  
> PS. Try entering swear word just for fun.

##### Description: Base Messages Loaded on Pageload
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/1.baseMessages.jpg" width="600">
##### Description: Select User Menu
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/2.selectUsers.jpg" width="600">
##### Description: User Inputs New Message
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/3.userMessage.jpg" width="600">
##### Description: AI Response
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/4.AIResponse.jpg" width="600">
##### Description: Theme Selection
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/5.themeSelection.jpg" width="600">
##### Description: Theme Applied 
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/6.themeApplied.jpg" width="600">
##### Description: Emoji Usage
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/7.emoji.jpg" width="600">
##### Description: Clear Entire Message Board
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/8.clearMessageBoard.jpg" width="600">
##### Description: Edit Mode
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/9.editMode.jpg" width="600">
##### Description: Edited Text
<img src="https://raw.githubusercontent.com/nss-evening-cohort-3/chatty-e3-iwantanap/master/screenshots/10.editTextStamp.jpg" width="600">

### How to run:
```
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.  
```


### Specs By:
[Nashville Software School](https://github.com/nashville-software-school)  
[Steve Brownlee](https://github.com/chortlehoort)  
[Joe Shepherd](https://github.com/JoeShep)  
[Zoe Ames](https://github.com/zoeames)  


### Contributors:
[Bernard Anderson](https://github.com/bernardanderson)  
[Callan Morrison](https://github.com/morecallan)  
[Paul Williams](https://github.com/VikingPaul)  



