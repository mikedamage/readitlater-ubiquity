CmdUtils.CreateCommand({
	name: "readlater.auth",
	author: {
		name: "Mike Green",
		email: "mike.is.green@gmail.com",
		homepage: "http://mikedamage.github.com"
	},
	description: "Saves your Read It Later login info in Firefox's password cache",
	takes: {"username:password": noun_arb_text},
	preview: function(pblock, input) {
		var array = input.text.split(":");
		var username = array[0];
		var password = array[1];
		pblock.innerHTML = "<strong>Username:</strong>" + username + "<br/><strong>Password:</strong> " + password;
	},
	execute: function(input) {
		
	}
})