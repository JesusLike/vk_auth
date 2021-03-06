$(document).ready(function() {
	var paramString = window.location.href.split("#")[1];
	var searchParams = new URLSearchParams(paramString);
	$("#friends").css("visibility", "hidden");
	if (!$.cookie("vk_auth_token")) {
		if (!searchParams.has("access_token")) {
			$("#auth-button").attr("value", "Авторизоваться");
			$("#auth-button").click(vk_auth);
			return;		
		} else {
			$.cookie("vk_auth_token", searchParams.get("access_token"), {
				expires: parseInt(searchParams.get("expires_in")) / 60 / 60 / 24
			});
		}
	}
	$("#auth-button").attr("value", "Выйти");
	$("#auth-button").click(logout);
	getInfo($.cookie("vk_auth_token"));
});
