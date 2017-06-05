describe('Testing the login page', function() {
    it('should be able to click on the login button', function() {
		var bt_login = '.button.button-block.button-round.button-positive.lightorange-bg.button-full.login-button';
		var fld_user = '.user.col.col-90.col-offset-10';
		var fld_pass = '.pass.col.col-90.col-offset-10';
		var bt_omitir = '.button.rounded.button-full.button-calm.white-color';

		var user = element(by.css(fld_user));
		var password = element(by.css(fld_pass));
		var login = element(by.css(bt_login));

		expect(user.isPresent()).toBe(true);
		expect(password.isPresent()).toBe(true);
		expect(login.isPresent()).toBe(true);


		user.clear().sendKeys('23765258');
		password.clear().sendKeys('Desa1234');       
        element(by.css(bt_login)).click();


		var EC = protractor.ExpectedConditions;
		var omitir = element(by.css(bt_omitir));
		var isClickable = EC.elementToBeClickable(omitir);
		browser.wait(isClickable,5000); //now options should have been loaded by now
    });
}); 

//TO-DO Limpiar scrip
//Repositorio