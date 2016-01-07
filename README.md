# chowdr
Not sure what to have for dinner?
Why don't you try Chowdr

[Chowdr]( http://chowdr9.herokuapp.com/)

## Introduction

Chowdr is a project dedicated to offering users with many different recipe choices. Our goal is for people to explore new recipes that fit any occasion.

## Getting Started

We have used bower and npm to install our dependencies. We also used Mongod and nodemon to run a local database and server. The bower dependencies will be downloaded to a lib folder, which is pre-specified in the .bowerrc file. Before running locally, run the following code in the command line.
```
bower install
npm install
mongod
nodemon server/server.js
```

Note: To use mongod, you must set the database path. You can do so with the following command.
```
mongod --dbpath <path>
```

Note: If mongod gives you a data/db error; try the following.
```
mkdir -p /data/db
```

or
```
sudo mkdir -p /data/db
```
Note: if mongod gives you a "failed errno:48 Address already in use for socket" error.  Try the following.
```
pkill -f mongod
```

File Update Notes:  Currently gulp is not set up to watch for changes.  In order to properly view changes on your local host, close the server, run gulp build and then start your server again.
(Running 'gulp' vs 'gulp build' will require you to manualy stop gulp when the build is done)

## Tests

Currently, we have a test for our server side inside our test folder.
More tests Coming soon


## Linting

Show all errors and warnings:
```
npm run lint
```

Fix (most) errors and show the remaining ones (warnings will be silenced):
```
npm run lint:fix
```

## Server and Build Watcher

Start the server, run build, and watch for changes:
```
npm start
```

## Hot Reload

Open your default web browser and reload when changes occur in client/ directory
```
npm run sync
```

## File Structure

We separated our files into 3 different folders: Client, Server, and Tests. Within each of these folders, we split our code up into as many files as we could in order to modularize it.

## Choice of Technologies

For this project, we have used AngularJS, Twitter Bootstrap, font awesome, Sass, Lo-dash for our front end and Node.js, Express, and MongoDB for our server and database. We also used Gulp for automation of our workflow. For testing we used mocha.

We used MongoDB for the document storage of the Users and the Recipes. We used an ORM called mongoose, which is an npm
module, which gives us easier access to our database. Refer to this link to learn more about mongoose [Mongoose Docs](http://mongoosejs.com/). We used MongoLab as a heroku addon when deploying our app.

## Yummly API
We used Yummly's API for our recipes.
[Yummly API Documentation](https://developer.yummly.com/documentation)

## Features
- Users
- Recipes
- Each user can save recipes
- Clicking on the saved recipe will forward you to the recipe
- Can filter by Diet, Cuisine, and Course
- Preferences are saved to the User

## In progress
- Implement new home page landing/about page
- Implement search box for query string in api call
- Implement food details view
- Implement display of nutritional values/calorie count

## Git Workflow

Please refer to the CONTRIBUTING.md file to see our git workflow.

## Style Guide

We used airbnb's es5 style guide at the following link
[airbnb es5 style guide](https://github.com/airbnb/javascript/tree/master/es5)

## Contributors
- Ahmed Modan ([ahmedmodan](https://github.com/ahmedmodan))
- Benji Marinacci ([bcmarinacci](https://github.com/bcmarinacci))
- Audrey Li ([vidaaudrey](https://github.com/vidaaudrey))
- Christoper Decker ([altroncwd](https://github.com/altroncwd))

MKS Legacy Project
