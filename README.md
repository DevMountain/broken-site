broken-site
===========

A Nightwatch.js tutorial 

##Step 1: Setup Nightwatch, Selenium
We're going to add all the dependencies needed to run e2e tests with Nightwatch:
* [Download](https://www.dropbox.com/s/97a28h3es0fcjt9/selenium-server-standalone-2.41.0.jar) the java selenium server and place it in a folder that you'll remember (could be on your desktop, in your home folder, or wherever you'd like)
* Install nightwatch as a global npm module (with the -g option)
* Take a look at the nightwatch.json file. It contains all of the configuration needed to run nightwatch in your local environment.

##Step 2: Start Selenium
* Since Selenium is a Java tool, you're going to need to start it from the command line using Java. Make sure you can invoke java from the command line:

```
which java
```

The above command should print something like `/usr/bin/java` to your terminal.

To start Selenium, use a command similar to this:

```
java -jar /path/to/selenium/selenium-server-standalone-2.41.0.jar
```

Make sure you replace the path with whichever path leads to the Selenium file you downloaded earlier. If done right, the terminal should spit out a bunch of content and say something about `Started SocketListener on 0.0.0.0:4444`. This means that Selenium is running and listening on port 4444. Perfect.

Now, double check your nightwatch.json file to be sure that the "selenium" section is configured correctly. That is, the host (127.0.0.1 for localhost) and the port (4444 from the above example) should match how you've launched Selenium.

##Step 3: Run a local server to make your "site" accessible by Selenium
Selenium won't be able to "see" or test your site unless it's running on a server. This means that we can't simply open the index.html file in the browser window. We need it running behind a server.

You can use the node module `http-server` (it can be globally installed with npm) that makes it *really* easy to standup a static server. (Hint: install http-server globally, then run `http-server` in your project's directory. It will start a server (probably with a port like 8081 or something) after which you can open a page pointing to that server in your browser (http://localhost:8081).

##Step 4: Create a test file

You'll notice in your nightwatch.json file the "src_folders" points to a local folder in your project, "tests." Let's make sure that folder is there, and then we'll create our first test file, `basic.js`

Nightwatch.js files are structured like other Node module files (that is, they are wrapped in a module.exports object). Inside the exports object, we give titles to tests to be run and then define how those tests are executed. Here's an example:

```
module.exports = {
  "Test home page": function(browser) {
    browser
      .url("http://localhost:8081")
      .waitForElementVisible('body', 1000)
      .assert.containsText('#main .header', 'Welcome to the broken site')
      .end();
  }
}
```

"Test home page" is the title of our test, and the function contains all of the logic for our test. The test itself is a set of chained *commands* or *assertions*. Commands tell selenium to do certain things (go to this url, wait for this element to be visible), while assertions make sure that something is true in order for the test to pass. You can have multiple commands and assertions in every test you write.
