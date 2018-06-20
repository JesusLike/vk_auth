$(document).ready(function() {
	var paramString = windows.location.href.split("?")[1];
	var searchParams = new URLSearchParams(paramString);
	if (!$.cookies("vk_auth_token")) {
		if (!searchParams.has("access_token")) {
			$("#auth-button").attr("value", "Log In");
			$("#auth-button").click(vk_auth);
			return;		
		} else {
			$.cookies("vk_auth_token", searchParams.get("access_token"), parseInt(searchParams.get("expires_in")) / 60 / 60 / 24);
		}
	}
	$("#auth-button").attr("value", "Log Out");
	var output = getInfo($.cookies("vk_auth_token"));
	$("#username").text(output.username);
	output.friends.forEach(function(item) {
		$("#friends").append(item + "<br>");
	});
});