module.exports = {
  "The has-error class should not be present on the .form-group elements when the page initially loads" 
  	: function(browser){
  		browser
  			.url('http://localhost:8080/sign-up.html')
  			.assert.cssClassNotPresent('.form-group','has-error')
  			.end();
  	},

  "The has-error class should show if the user tries to submit the form with blank values"
  	: function(browser){
  		browser
  			.url('http://localhost:8080/sign-up.html')
  			.waitForElementVisible('button.btn.btn-primary', 1000)
  			.click('button.btn.btn-primary')
  			.assert.cssClassPresent('.form-group','has-error')
  			.end();
  	},

  "The form on the signup page should take the user back to the home page upon submitting" 
  	: function(browser){
  		browser
  			.url('http://localhost:8080/sign-up.html')
  			.setValue('input[type=email]', 'nightwatch@example.com')
  			.setValue('input[type=password]', 'nightwatch')
  			.click('button.btn.btn-primary')
  			.assert.urlEquals('http://localhost:8080/')
  			.end();
  	}

}