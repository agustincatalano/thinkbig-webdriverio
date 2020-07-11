class Page { 
	open(path){
	  if (!path) {
		  //wdio.conf.js file is added the main url on baseUrl parameter
		browser.url("/")
	  } else {
		browser.url(path)
	  }
  }

}

module.exports = Page
