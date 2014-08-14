Test the 'bundles' config of requirejs
======================================

## config

You can see `app/main.js` to see the `bundles` configuration.

## How to run it

```
npm install http-server -g
npm install bower -g
bower install
npm install
http-server
```

Then open: http://localhost:8080/app/index.html

Open the developer tool of the browser, you will see:

```
enter user2 user2.js:2
this is b1 mybundle.js:4
this is b2 
```

## Notice

From my experience, the module definations in the bundle file, should all have defined the name of modules already.

e.g. 

```
define('b1', [], function() {
    ...
});

define('b2', [], function() {
    ...
});
``` 

You can remove them and have a try.