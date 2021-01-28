# Burger-Logger

# Node Express Handlebars

### Overview

In this application, I have created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.  I have endeavored to follow the MVC design pattern, using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

### Installation

1. Clone the repo to your local machine, and open your command line interface.
2. Install npm:  `npm init -y`.
3. Make sure it;s installed:  `npm install`.
4. Install the Express npm package: `npm install express`.
5. Install the Handlebars npm package: `npm install express-handlebars`.
6. Install MySQL npm package: `npm install mysql`.
(You can also chain npm packages like this:  `npm install express express-handlebars mysql`.)
7. Update `connection.js` to your local mysql database and password.
8. Run schema.sql and seed.sql in mysqlworkbench or mysql cli to create and populate tables.
9. Start the app: `npm start`.
10. Open localhost:8080 in your favorite browser.

### Important

* **This assignment must be deployed.** Be sure to utilize the [MYSQL Heroku Deployment Guide](../../04-Important/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.

### What is it?

* Eat-Da-burger! is a restaurant app that lets users input the names of burger-loggers they'd like to eat.

* Whenever a user submits a burger-logger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.

* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).


### Submission on BCS

* **This assignment must be deployed.** * Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!


* Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.
 
- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

This is a really tough homework assignment, but we want you to put in your best effort to finish it.

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

### Reminder

When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

**Good Luck!**
