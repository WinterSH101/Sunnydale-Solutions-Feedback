#  Journal

## Phase 1
In this phase, I created the feedback form and used JavaScript to get the information entered by the user. I also used event.preventDefault() to stop the page from refreshing when the submit button is clicked. Without it, the browser would try to submit the form normally and refresh the page. SInce there is no backend server for this project, preventing the default action lets JavaScript handle everything on the page.
<br>
## Phase 2
In this phase, I added validation to check the name, rating, and comments. I stored the errors in an array and displayed them all at once. I think showing all the errors together is better because the user can see everything they need to fix instead of fixing one problem at a time.
<br>
## Phase 3
In this phase, I added a success message and used localStorage to save the user's name. When the page is refreshed, the saved name is used to welcome the user back and fil the name box. localStorage is simple because the information stays within the browser. Cookies are more useful when information needs to be sent to a server.
<br>

