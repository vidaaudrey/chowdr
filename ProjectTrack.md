# Chowdr  Project Track 

## Features

**Basic**

[ ] Recipe Details Page 

[ ] Remove Recipe 

[ ] SearchBox 

[ ] Shopping List 

**Nice to have**

[ ] Recipe Review 

[ ] Youtube Video 

[ ] Angular Animation 

===

## Information
* Heroku deploy Link: http://chowdr9.herokuapp.com/ 
* How to get recipe details: http://localhost:3000/api/formula/CrockPot-Spaghetti-1426599


## Ongoing Tasks 
[ ] Setup Github Repo - Chris & Benji
[ ] Add Build Script into package.json  - Benji
[ ] Update / add related project  docs  - Chris 
[ ] Logo Design - Ahmed 
[ ] Test Setup 
[ ] Redesign Homepage - Audrey 
[ ] Create Project Homepage 
[ ]



## Project Meeting Memo 


### 08 January 2016

**Discuss**

* Plan 


* Fix 
  - Refactor and Fix DeleteButton on RecipeList  - Ahmed
  - Put searchbox in the Recipe search result page  - Ahmed
  - Update Readme - Chris 
  - Server Delete Request - Benji
  - Get ride of 'result' in recipes page  - Chris 
  - Update the [recipe link](http://localhost:3000/#/recipes)  in the recipes page to point to formula page  - Ahmed
  - Save as above, but update the [meals page](http://localhost:3000/#/meals) - Ahmed
  - Update Logo - Ahmed 
  - Fix the [search result](http://localhost:3000/#/recipeSearchResults/hello), create placeholder for non-exist images - Ahmed 

* TODO 
  - Add star-rating directive - Chris 
  - Prettify [Tastes Chart](http://localhost:3000/#/formula/Crudaiola-Pasta-1453667) to display in different colors - Audrey 

* Feature 
  **Add ingredience to shopping list display the list to user**
  - Route and Dependency.  Update the app file only. route: '/shoppinglist', dependency: 'addToShoppingList, shoppingList'

  - Directive / Controller: addToShoppingList.  Call the ShoppingListService.addListItem(item), item is the ingredience line which is a string 

  - Directive / Controller: addAllToShoppingList.  Call the ShoppingListService.addAllToShoppingList(items), items is an array of strings 

  - Directive / Controller: shoppingList. Call the ShoppingListService.getShoppingList() to get all the list, which will be an array of strings 

  - Service: ShoppingListService. It has three methods:  -- Benji 
    * addListItem(item) which take a string and return a success / failure message 
    * addAllToList(items) which takes an array of strings and return a success / failure message 
    * getShoppingList() which return the an array of strings
    *Note, for now, we'll use local storage to store all the shopping items*

  - Page and UI Design. 
    * Create the page and css for shopping list page 
    * addToShoppingList button
    * addAllToShoppingList button 
    * Add navigation link 

  - Chunk Data on Recipe Detail Page 


### Thursday January 07 2016
**Discuss**
* Demo time (2 minutes) to show learnings, code...
* JSBin Angular Directive Demo
* Pick Directives to work on 
  - DeleteButton 
  - AddButton 
  - NutritionTable 
  - RecipeListItem 
  - RecipeList 
  - IngredienceList
  - IngredienceListItem (put AddButton inside )
  - ShoppingList  (reuse IngredienceList? )
  - ShoppingListItem (reuse IngredienceListItem? )
  - FilterBar (filter recipes based on style, nutrition...) 
    - Or ChowdrTab (ref [Creating Directives that Communicate](https://docs.angularjs.org/guide/directive)) [Demo](http://plnkr.co/edit/wDvUlXrnKAHRnN6X7Pa4?p=preview)

  
* Convert the current Footer to use [ng-include](http://www.w3schools.com/angular/angular_includes.asp) (~ 10 - 20 minutes work, if you like, create a global config file, and pass the footer messages such as copyright as parameters) 
* Use [ng-Animate](http://www.w3schools.com/angular/angular_animations.asp) to animate one of your component 







### Wednesday January 06 2016

**Review**

* Repo 
* Docs 
* Server 
* Client 
* Deploy: http://chowdr9.herokuapp.com/ 


**Discuss**

* Move project management to Github Issues and create a **ProjectTrack.md** to share todo and information
* Setup github lables to manage issues and PR, ref: https://github.com/angular/angular.js/pulls  

**Todos**

[X] Move all tasks to github issues - Chris & Benji 
More look at issues 



### Shared Information 
#### [How to close Github Issues from terminal](https://help.github.com/articles/closing-issues-via-commit-messages/)
* A commit message with `Fixes #45` will close issue 45 in that repository once the commit is merged into the default branch. 
* `This closes #34, closes #23, and closes example_user/example_repo#42` would close issues #34 and #23 in the same repository, and issue #42 in the "example_user/example_repo" repository.

#### [ng-bind is better than {{}} ?](http://stackoverflow.com/questions/16125872/angularjs-why-ng-bind-is-better-than-in-angular)
In short, ng-bind is better at performance and doesn't flash {{...}} in the beginning


### Image Credit
[Homepage Background] (https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=3c19ae5da71204726943a09436fb1737)
