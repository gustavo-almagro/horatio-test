var {Given, Then, When, setDefaultTimeout} = require('cucumber');
var assert = require('assert');

var webdriver = require('selenium-webdriver'), 
	By = webdriver.By,
    	until = webdriver.until;

var chromeDriver = require('selenium-webdriver/chrome');

const options = new chromeDriver.Options();
options.addArguments(
    'headless',
    // Use --disable-gpu to avoid an error from a missing Mesa library, as per
    // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
    'disable-gpu',
);

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.setChromeOptions(options)	
	.build();

setDefaultTimeout(60*1000);

Given('a logged in admin user {string}', function (username) {
   	driver.get("https://horatioconsultingltd.peoplehr.net/");
   	driver.findElement(By.id("txtEmailId")).sendKeys(username);
	driver.findElement(By.id("txtPassword")).sendKeys("TheYellowChicken@@11");
	driver.findElement(By.id("btnLogin")).click();
	//TODO verify logged in user is admin	
});

When('the admin user grants {string} admin permissions', async function (user) {
	
	/*
	let menu = await driver.wait(until.elementLocated(By.id("ucLeftSegment_asdLinks")), 10000);	
	//console.log(menu);	
	
	let systemMenu = await driver.wait(until.elementLocated(By.css("a#ucLeftSegment_aSystem")), 10000);
	systemMenu.click();

	await driver.wait(until.elementLocated(By.css(".heading.system > p")), 10000);        
	
	let administrators = await driver.wait(until.elementLocated(By.css("a#aAdministrators")), 5000);
	administrators.click();
	
	let addAdministratorButton = await driver.wait(until.elementLocated(By.css(".addAdministrator")), 5000);
	addAdministratorButton.click();

	let userDropdown = await driver.wait(until.elementLocated(By.id("ddlSystemAdmin_ddlOtherEmployee_chzn")), 5000);
	userDropdown.click();
	
	let userSearchInput = await driver.wait(until.elementLocated(By.css(".chzn-search>input")), 5000);
	userSearchInput.sendkeys(user);
	userSearchInput.submit();	
	*/

	return "pending";
});

Then('the user {string} has admin permissions', function (string) {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
});

Then('the user {string} has access to settings screen.', function (string) {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
});        


