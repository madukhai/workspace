##Start Up

To start the server open terminal by clicking the spy glass in the top right corner and typing terminal

Use the change directory command to navigate to your project folder. So if your projecs is called workshop and it is on your desktop, you could type

cd desktop/workshop 

in terminal

Once in the directory type: 

ls

in terminal to list the contents of the directory. you should see a folder called public and a file called server.js if you are in the right place. To start the node server type

node server.js 

and past the url in your browser. If you see "Node is running" in your browser you have suceesfully implemented the node server. You need the Node server for this project because you need to retrieve text out of the steps files and inject them into the text editor. You can do this using the JQuery $.get() function along with the path to the files which should look like:

http://localhost:8080/steps/step1.html