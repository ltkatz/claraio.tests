var login = "tedtest1";
var fileName = "";
const fs = require('fs');

module.exports = {

	"register": function (browser) {
		browser
			.url('https://clara.io/library')
			//.waitForElementVisible('body')
			.waitForElementVisible('a[class=btn]',5000)		
			.pause(2000)
			.useXpath()
			.click("//*[contains(text(), 'Sign')]")
			.useCss()
			//.click('link text','Sign Up / Log In')
			.waitForElementVisible('#signup-body',5000)
			.waitForElementVisible('input[name=email]',5000)
			.pause(2000)
			.setValue('input[name=email]',"ted.kouznetsov@gmail.com")
			.setValue('input[name=username]',"tedtest"+Math.random().toString().substr(2, 4))
			.setValue('input[name=password]',"Livelink`1")
			.sendKeys('input[name=password]',browser.Keys.ENTER)
			.pause(5000)
			
			/* was going to activate the login in email but turned out to be unnecesary
			.url('https://mail.yandex.com/lite/')	
			.waitForElementVisible('#passp-field-login',5000)	
			.setValue('#passp-field-login',"tedthreekit")
			.click('button[type=submit]')			
			.waitForElementVisible('input[name=passwd]',5000)
			.setValue('input[name=passwd]',"Livelink`1")
			.click('button[type=submit]')
			.pause(5000)*/
	},
	"cat": function(browser) {
		browser
			/* aaand don't need to log in */
			/*.url('https://clara.io/login')
			.waitForElementVisible('input[name=username]',5000)
			.setValue('input[name=username]',login)
			.setValue('input[name=password]',"Livelink`1")
			.click('button[type=submit]')
			.pause(5000)*/
			.useXpath()
			.click("//*[contains(text(), 'Library')]")
			.useCss()
			//.url('https://clara.io/library')
			/* */
			.waitForElementVisible('input[placeholder="Search 3D Models"]',5000)
			.setValue('input[placeholder="Search 3D Models"]',"cat")
			.sendKeys('input[placeholder="Search 3D Models"]',browser.Keys.ENTER)	
			.pause(2000)
			.waitForElementVisible('div[class=listing] > div > div > div > a',5000)	
			.click('div[class=listing] > div > div > div:nth-child(4) > a')
			.waitForElementVisible('a[data-toggle=dropdown]',5000)
			.click('link text','Download')
			.waitForElementVisible('a[data-extension=fbx]',5000)
			.click('link text','Autodesk FBX (.fbx)')
			.pause(10000)
			//.waitForElementVisible('a[class=viewer-button]',10000)
			.useXpath()
			.click("//*[contains(text(), 'Download')]")
			.useCss()
			.waitForElementVisible('textarea[name=commentText]',5000)
			.setValue('textarea[name=commentText]',"cat")
			.useXpath()
			.click("//*[contains(text(), 'Post')]")
			.useCss()
			.waitForElementVisible('a[title=delete]',5000)
			.pause(3000)
			.click('a[title=delete]')
			.pause(6000)
			.getTitle(function(title) {
				fileName = "C:/Users/tkouznet/Downloads/"+title.toLowerCase().replace(/ · free 3d model · clara.io/,"-fbx.zip").replace(/ /g,"-");
				//console.log(fileName);
				fs.access(fileName, fs.F_OK, (err) => {
				if (err) {
					console.error(err)
				return
				}

			console.log(fileName+ " exists - confirmed");
			})
			})
			.pause(5000)
	},
	"dog": function(browser) {
		browser
			/* aaand don't need to log in */
			/*.url('https://clara.io/login')
			.waitForElementVisible('input[name=username]',5000)
			.setValue('input[name=username]',login)
			.setValue('input[name=password]',"Livelink`1")
			.click('button[type=submit]')
			.pause(5000)*/
			.useXpath()
			.click("//*[contains(text(), 'Library')]")
			.useCss()
			//.url('https://clara.io/library')
			/* */
			.waitForElementVisible('input[placeholder="Search 3D Models"]',5000)
			.setValue('input[placeholder="Search 3D Models"]',"dog")
			.sendKeys('input[placeholder="Search 3D Models"]',browser.Keys.ENTER)	
			.pause(2000)
			.waitForElementVisible('div[class=listing] > div > div > div > a',5000)	
			.click('div[class=listing] > div > div > div:nth-child(3) > a')
			.waitForElementVisible('a[data-toggle=dropdown]',5000)
			.click('link text','Download')
			.waitForElementVisible('a[data-extension=fbx]',5000)
			.click('link text','Autodesk FBX (.fbx)')
			.pause(10000)
			//.waitForElementVisible('a[class=viewer-button]',10000)
			.useXpath()
			.click("//*[contains(text(), 'Download')]")
			.useCss()
			.waitForElementVisible('textarea[name=commentText]',5000)
			.setValue('textarea[name=commentText]',"dog")
			.useXpath()
			.click("//*[contains(text(), 'Post')]")
			.useCss()
			.waitForElementVisible('a[title=delete]',5000)
			.pause(3000)
			.click('a[title=delete]')
			.pause(6000)
			.getTitle(function(title) {
				fileName = "C:/Users/tkouznet/Downloads/"+title.toLowerCase().replace(/ · free 3d model · clara.io/,"-fbx.zip").replace(/ /g,"-");
				//console.log(fileName);
				fs.access(fileName, fs.F_OK, (err) => {
				if (err) {
					console.error(err)
				return
				}

			console.log(fileName+ " exists - confirmed");
			})
			})
			.pause(5000)
	},			
			
"done": function(browser)	{		
			browser.end();
			

		
		}
	};

/*

notes
 /html/body/div[7]/div/div/div[2]/p/a

html.js.canvas.history.draganddrop.localstorage body.modal-open div#view-scenes-job_dialog-67eca6ee-b221-48ca-b750-90126e61ee8b.modal.fade.in div.modal-dialog div.modal-content div.modal-body.download-body p a.btn.btn-primary.viewer-button.download-file

.viewer-button

<input class="query form-control search-query" type="text" name="query" placeholder="Search 3D Models" value="">

<input class="form-control" name="username" value="" type="text">

nightwatch --config <config.file>

<a download="" href="https://resources.clara.io/27d6be8d4dc6b383f0347210c0732fad?filename=low-poly-fox-by-pixelmannen-fbx.zip" class="btn btn-primary viewer-button download-file" target="_blank">Download low-poly-fox-by-pixelmannen-fbx.zip</a>

*/
