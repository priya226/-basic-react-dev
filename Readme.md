React has been inserted to our project through cdn initially and we tried to create/append child divs to our main div "root" in App.js
crossorigin attribute is used to share the resources from one domain to another domain.
The package.json file contains the metadata information. 
devDependencies: The dependencies that are used only in the development part of the application are specified in this segment. These dependencies do not get rolled out when the application is in production stage.
dependencies: The third party package or modules installed using.
The goal of package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible (production) in the same way even if packages are updated by their maintainers.
////
git install
git init
project works , .gitignore file Readme.md file
git branch -m {branchname}
git add . // will add every file except which are mentioned in gitignore
git commit -m "message for your changes"
go to gitlab account-repository create new empty repo if we dont hv repo, copy http url code
git remote add origin {http nurl code}
git push origin {branch name}
An npm script is a convenient way to bundle common shell commands like a set of built-in and custom scripts for your project. They are typically terminal commands or a string of terminal commands that help automate repetitive tasks. 


2 Types of Export/Import
-Default Export/Import
 export default Component;
 import Component from "path"

 -Named Export/Import
  export const Component/data
  import {Component/data} from "path"

  #Normal JS Utility Hoks
  UseState
  UseEffect