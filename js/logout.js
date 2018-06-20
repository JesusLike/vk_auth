function logout() {
	$.removeCookie("vk_auth_token");
	$(location).attr("href", "https://jesuslike.github.io/vk_auth");
}