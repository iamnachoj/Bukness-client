# Bukness App

Client-side block for BuknessApp, a Single Page Appication (SPA) for people who want the help of books to boost their professional career, where they can scroll through many different books about business, personal growth, emotional intelligence, self-help, motivational... and see information about them, like their descriptions, genres, authors etc.

Built out of several React components, the app runs fast, asynchronous and very fluid. 
 
All the data in the app is fetched from my own BOOK API. (link to it <a href="https://github.com/iamnachoj/Bukness-API">here</a>)

# Tools
React.js 
 - React-Bootstrap
 - React-redux
 - Parcel
 - axios

# How it works?

The site needs first and foremost to authenticate and authorise the user. If you are not an user, you need to register. Once you are registered, you will have full access to the MainView, where you will see displayed all the books fetched from the book API project 
 
From there, you can scroll through books, click on 'open' and see more information about them, as a brief description, the author, and the genre (which are also links that when clicked offer more info about them)
 
You can also add books to your favourite list and check out your profile, where it is possible to see all the favourited books and remove them if you will (sometimes you get fed up with a particular book, it happens to the best of us!)
 
It is also possible to delete the account and to update the user name or password.

# Features 
 - fully responsive built with React bootstrap
 - Easy scalability thanks to common UI patterns like the use of Redux to manage the state
 - interaction to Mongo database.
 - UI patterns that follow best trends.

# Deployment (how to get the project running?)
 
 - Fork it on your github account, and clone it locally.
 - From your Command Line Interface, 'cd' into the folder and run the first package.json script: ```'npm start' ```. It will launch parcel and bundle up the code.
 - Once budled up, it will serve the file on port 1234. Run it from the browser, and the site will be there 
 
### See demo here: <a href="bukness.netlify.app">Bukness App</a>
