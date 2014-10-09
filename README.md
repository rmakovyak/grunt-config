grunt-config
============

This is simple grunt file, universal almost for every app. This will provide you with base local server, livereload, and proxy( optional )

###Setup:

* Download and install node.js http://nodejs.org/ .
* Place files from this repository to your project folder. You may need to wrap all your project in folder "app" ( create if you don't have one yet ) .
* Open a terminal in folder where Gruntfile.js is placed and run 
```javascript
	$ npm install grunt 
``` 

and then

```javascript
	$ npm install
```	
* Run "grunt serve" in termainal

```javascript
	$ grunt serve
```	
* The server will start on 9000 port.
* If you want to your livereload work properly add next line to you index.html file
```javascript
	<script src="http://localhost:35729/livereload.js"></script>
```
* If you need to setup a proxy, just uncomment all rows with proxy context in Gruntfile.js and write down proper IP address
```javascript
	proxies: [
    	{
      		context: '/your_context',
      		host: 'your.adress.com',                    
      		changeOrigin: true
    	}
    ]
```
 
Happy coding!
