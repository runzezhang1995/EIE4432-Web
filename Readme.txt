Please place the project folder at the root folder. 
The address for this Readme.txt file should be like 
http://localhost/EIE4432-WEB/Readme.txt after apache 
server is launched. 

Although most dependencies have been included, if there 
is any problem with inmported files, please install "Yarn 
package manager" at https://yarnpkg.com/ first, and run "yarn install"
 in command control line after it is successfully installed.  

The "Phug" engine is used for compile .pug files into 
HTML files. Although it is included, to re-install it, 
please install composer first, and run "composer install"
in comand control line. 

After all dependencies are ready, please install webpack and 
webpack-cli in global enviroment, with command:"yarn global add 
webpack webpack-cli" After they are successfully installed, please
run "webpack" to compile ES6 JavaScript files. The newly build files 
will be located at ./build/ folder.  

in ./build/ folder there are compiled JavaScript files 
and other resource files. JavaScript files will be in
format of 'nameOfpage.bundle.js', while other resuorces
will be like files with random generated name. 

To import existing database, please create a new database with 
database name 'project' first, then import the "project.sql" file 
into the new database. 

If there is any further problem during runing this project, 
please contact us at runze.zhang@connect.polyu.hk
