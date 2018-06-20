function logout() {
	$.removeCookie("vk_auth_token");
	$(location).attr("href", "jesuslike.github.io/vk_auth");
}