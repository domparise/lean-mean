LEAN MEAN WEB STACK  
===================  
Bare-bones platform designed for rapid, diy development without sacraficing full MEAN functionality.  
  
  
COMPONENTS  
==========
All functional back-end code can exists in app.js. Add a route with app.get(route,action()). 
Within app.js, create a database model with db.newModel then interface with SQL-like syntax with db.insert, db.update, db.select, and db.delete;  
  
Pages to dynamically rendered server-side are generated with .jade files in ./views.  

Angular html view controllers currently reside within ./public/js.  
  
  
USAGE  
=====  
To install:  
npm install --save-dev  
To run:  
grunt  
  
  
TODO  
====  
-add method generation to db.newModel()  
-comment  
