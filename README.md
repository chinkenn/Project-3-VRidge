Project-3-VRidge

Case Western Reserve University Coding Bootcamp Project 3 
October 11, 2018

Ken Chin, Johnson Hampson, Stacie Knisley, Brian Macauley


The creators of VRidge wanted a app to easily write a grocery shopping list and track refrigerator contents. The concept of VRidge was to create a responsive app for use with a mobile device to make an easy to use grocery shopping list and keep inventory of the user’s refrigerator. Also, the creators wanted the option to quickly find a recipe for any food.

The user must "Create an account". After an account is created, the user signs into the app with a "username" and "password", this validates the user and allows the user to enter the app. After signing into VRidge the app takes the user to the “Create Your Grocery List” page. At this page the user enters the name, quantity and an expiration date for each item they need to purchase. The Grocery List uses validation when an item is added to the Grocery List the quantity must be selected, and it must be a numeric value. Otherwise the item will not be added to the Grocery List. After an item is purchased the user clicks the “SEND TO FRIDGE” button, and this moves the item into the “My Fridge” page. This page contains the name, quantity and expiration date of each item. This page also allows the user to send the item to the “Trash” or delete the item.  

The navigation bar at the top of each page allows the user to toggle between the “Home”, “About”, “Grocery List”, “My Fridge” and “Recipe” pages. The “Recipe” page provides the user quick access to search recipes utilizing an API call to EDAMAM.com. This gives the user an easy link to search recipes for a particular food item from their “Grocery List” or “My Fridge” pages.

An example of a user of VRidge would be a busy parent, Chris, writing a shopping list. Chris adds items to VRidge, such as bread, milk, chicken, etc. throughout the week between work, school, sports and activities. At the end of the week Chris is shopping and easily refers the grocery list in VRidge. When Chris is home and moves the groceries into the refrigerator, Chris will simply click the “SEND TO FRIDGE” button for each item and this will populate the “My Fridge” and creates an inventory of the family refrigerator.

The design process of VRidge originated by creating a wireframe of the web page layout through the use of a chalkboard and the program Balsamiq. Our group communicated through Slack and Github. The initial idea was to create a mobile responsive web page containing:
User or New User Sign in page that moves the user to a Grocery List page.
The Grocery List Page allows users to move items to a Fridge Page.
The Fridge Page would link to an API to search recipes and a Trash button to delete items from the Fridge Page.

Ken Chin and Stacie Knisley chose to work on the backend development and Johnson Hampson and Brian Macauley offered to create the frontend web pages. Ken and Stacie used MongoDB and Mongoose Schemas to create the database. They also used React const and JSX, and get and posts routers for the API calls. Brian and Johnson created the frontend web pages through the use of React, JSX, React Bootstrap and CSS.

The technologies used to create VRidge include: React Express, React Bootstrap, JSX, MongoDB, Mongoose, Node.js, JavaScript, CSS, Axios, AJAX, JSON packages, API to EDAMAM.com.

The MVC model was utilized through the Models or the "M" with the use of the foods.js, index.js and seedDB.js files containing the data and data direction. The "V" or View of MVC was used through the use of the Form.js (.css), groceryList.js (.css), myFridge.js (.css), recipe.js (.css) and Nav.js (.css) files. The "C" or the Controller of MVC was utilized through the use of the API.js and foodsController.js files.

Some of the obstacles encountered to complete the VRidge include difficulties writing the code using React Express and React Bootstrap. We discovered problems with React Express not displaying the pages correctly. We also had issues with the frontend not communicating with the backend database. The quantity and the expiration dates would not update properly. Also, the login Form page would not link to the database and the groceryList page. Additionally we had problems deploying versions to Github.

Possible future developments for the VRidge application are:

Add a "Create an account" page for new users.

Multiple lists for each user, such as a Party Grocery List, Weekly Grocery List or specific store list.

Ability to send a “Trash” or deleted item back to the Grocery List Page.

Have a recipe search button next each item that will link to the EDAMAM.com.


The process to create the VRidge application was a challenge. However, we were able to overcome many obstacles and create a convenient and successful application. VRidge is the inexpensive way turn your refrigerator in a “Smart Fridge” or a VRidge!