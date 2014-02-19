LEAN MEAN WEB STACK  
===================  
Bare-bones platform designed for rapid development without sacraficing full MEAN functionality.  
  
  
COMPONENTS  
==========
All functional back-end code can exists in app.js. Add an http route with app.get(route,action()). 
Within app.js, interface directly with mongodb within the db.init() callback;  
  
Pages to dynamically rendered server-side are generated with .jade files in ./views.  

Angular html view controllers currently reside within ./public/js.  
  
  
USAGE  
=====  
To install:  
npm install  
To run:
node app.js
  
  
GRUNT  
=====  
With grunt-cli installed, you can take advantage of automatic jslinting and server resets when you make changes to files with:
npm install --save-dev
grunt  
