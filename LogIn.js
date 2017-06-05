describe('Testing the login page', function() {
	var bt_login = '.button.button-block.button-round.button-positive.lightorange-bg.button-full.login-button';
	var fld_user = '.user.col.col-90.col-offset-10';
	var fld_pass = '.pass.col.col-90.col-offset-10';
	var bt_omitir = '.button.rounded.button-full.button-calm.white-color';
	var bt_menusec = 'button.transparent-btn.hamburguer-button';
	
    it('it should loguearse', function() {	
//Ingresar datos y presionar INGRESAR
		var user = element(by.css(fld_user));
		var password = element(by.css(fld_pass));
		var login = element(by.css(bt_login));
//Registrar resultados
		expect(user.isPresent()).toBe(true);
		expect(password.isPresent()).toBe(true);
		expect(login.isPresent()).toBe(true);
		
		user.clear().sendKeys('23765258');
		password.clear().sendKeys('Desa1234');       
        element(by.css(bt_login)).click();
    });
	it('it should get through onboarding', function() {
		var EC = protractor.ExpectedConditions;
		var omitir = element(by.css(bt_omitir));
		var isClickable = EC.elementToBeClickable(omitir);
		expect(omitir.isPresent()).toBe(true);
		element(by.css(bt_omitir)).click();
		//browser.wait(isClickable,0); //debería esperar?
	});
	it('should expand secundary menu', function() {
		var menusec = element(by.css(bt_menusec));
//espera hamburger
		expect(menusec.isPresent()).toBe(true);
		element(by.css(bt_menusec)).click();
		
	});
}); 

//TO-DO Limpiar scrip
//Repositorio