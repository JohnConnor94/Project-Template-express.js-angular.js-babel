# Project Template Node.js + Express.js + Angular.js
A ready to use  template for simple web application based on Node.js, Express.js and Angular.js.

## Getting Started
Clone this repo on your machine. 
Run npm install to get all node relatives libraries and dependencies.

## Structure
```
 .
 ├ node_modules
 ├ client                   # frontend directory
 │   ├ core                 # contains the module js files to configure the angular app
 │   ├ controllers          # all angular.js controllers
 │   ├ directives           # all angular.js directives
 │   ├ filters              # all angular.js filtes
 │   ├ services             # all angulars.js services
 │   ├ styles               # css stylesheet
 │   ├ index.html           # main html file
 │   └ lib                  # put here all others libraries in js files
 │
 ├ js-transpiled            # all js transpiled by babel. mirroring part of the client dir structure
 │   ├ core                 #
 │   ├ controllers          #
 │   ├ directives           #
 │   ├ filters              #
 │   ├ services             #
 │   └ lib                  # 
 │
 ├ server                   # backend directory
 │   └ server.js            # simple and minimal configuration fror express app
 │
 ├ .gitignore
 ├ .config.json             # json file to load common configuration, (possbily used by nconf)
 ├ package-lock.json
 ├ package.json
 ├ LICENSE.md
 ├ README.md
 └ README.template.md
```


## How it works
The template prepare a simple express web server that retrieves an index.html files with angular.js enabled with routing.\
The configuration is intentionally **basic** and **minimal**.

The template's goal is give you a basic configuration to start working asap and to customize this template to your needs.

In /client/index.html there are section for each kind of files (controller, directives...). 

Each subdirectory in client have a template.'type'.js file.\
It contains the very basic structure of that kind of file and components of angular.

There is a README.template.md file that contains the structure of a **_well organized_** readme. 

In package.json there is a field named optionalDependencies with a set of useful libraries that you would add to your project. Feel free to add'em to you dependencies if you want'em.
