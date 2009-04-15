CmdUtils.CreateCommand({
	name: "readlater",
	author: {
		name: "Mike Green",
		email: "mike.is.green@gmail.com",
		homepage: "http://mikedamage.github.com"
	},
	description: "Adds the current page to your Read It Later list.",
	_authKey: "extensions.ubiquity.readitlater",
	_getAuthInfo: function() {
		var logins = CmdUtils.retrieveLogins(this._authKey);
		return logins[0];
	},
	execute: function() {
		var auth = this._getAuthInfo();
		var currentWindow = CmdUtils.getWindow();
		var url = currentWindow.location.href;
		var title = encodeURIComponent(currentWindow.document.title);
		jQuery.ajax({
			url: "http://readitlaterlist.com/v1/add",
			method: "GET",
			data: {
				username: auth.username,
				password: auth.password,
				url: url,
				title: title
			},
			success: function(xhr, status) {
				displayMessage("Page added to Read It Later list");
			},
			error: function(xhr, status, err) {
				displayMessage("Error saving page!");
			}
		});
	}
});