
	// for the name
	let name = (nameVal) =>
	{
		let regEx = new RegExp("^.{2,}$");
		return regEx.test(nameVal);	
	}

/* 	// for the email
	email()
	{
		let regEx = new RegExp("^[a-z0-9_\.-]+@[\da-z\.-]+[\.][a-z\.]{2,6}$");

		if(this.emailInput.value!=null)
		return this.isOk[1]=regEx.test(this.emailInput.value);
		return true;
	}


	// for the number
	number()
	{
		let regEx = new RegExp("^[0-9]{8,9}$");
	
		if(this.numberInput!=null)
		return this.isOk[2]=regEx.test(this.numberInput.value);
		return true;
	}


	// for the password(at least one lowerCase,one UpperCase,one digit and 8 lenght min)
	password()
	{
		let regEx = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{8,})");
		
		if(this.passwordInput!=null)
		return this.isOk[3]=regEx.test(this.passwordInput.value);
		return true;
	}
 */export {name};