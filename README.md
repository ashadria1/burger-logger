# Burger-Logger

### Overview

In this application, I have created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.  I have endeavored to follow the MVC design pattern, using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

### What is it?

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.

* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

### Installation

1. Clone the repo to your local machine, and open your command line interface.
2. Initialize npm:  `npm init -y`.
3. Make sure it's installed:  `npm install`.
4. Install the Express npm package: `npm install express`.
5. Install the Handlebars npm package: `npm install express-handlebars`.
6. Install MySQL npm package: `npm install mysql`.
(You can also chain npm packages like this:  `npm install express express-handlebars mysql`.)
7. Update `connection.js` to your local mysql database and password.
8. Run `schema.sql` and `seeds.sql` in MySQL Workbench or MySQL CLI to create and populate tables.
9. Start the app: `npm start`.
10. Open localhost:8080 in your favorite browser.
11. Devour burgers!

### Links

* Heroku link:  https://mighty-cove-89644.herokuapp.com/

* Github Repository link:  https://github.com/ashadria1/burger-logger

### Screenshot


![Burger-Logger Screenshot](/pics/Screenshot Burger-Logger.png)

