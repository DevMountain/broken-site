module.exports = {
  "Test home page": function(browser) {
    browser
      .url("http://localhost:8080")
      .waitForElementVisible('body', 1000)
      .assert.containsText('#main .header', 'Welcome to the broken site')
  },

  "Header is present": function(browser){
  	browser
  		.url("http://localhost:8080")
  		.assert.elementPresent('.header')
  },
  
  "Footer is present": function(browser){
  	browser
  		.url("http://localhost:8080")
  		.assert.elementPresent('.footer')
  },

  "Table should contain class table-striped": function(browser){
  	browser
  		.url("http://localhost:8080")
  		.waitForElementVisible('.table',1000)
  		.assert.cssClassPresent('.table','table-striped')
  		
  },
  
  "Header Sign Up link should redirect to /sign-up.html": function(browser){
  	browser
  		.url("http://localhost:8080")
  		.click('#signup-header')
  		.assert.urlEquals('http://localhost:8080/sign-up.html')
  },
  
  "Footer Sign Up link should redirect to /sign-up.html": function(browser){
  	browser
  		.url("http://localhost:8080")
  		.click('#signup-footer')
  		.assert.urlEquals('http://localhost:8080/sign-up.html')
  		.end();
  }
}