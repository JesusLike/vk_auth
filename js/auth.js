function vk_auth() {
	$(location).attr("href", "https://oauth.vk.com/authorize" +
			"?client_id=6610605" +
			"&display=page" +
			"&redirect_uri=https://jesuslike.github.io/vk_auth" +
			"&scope=2" +
			"&response_type=token" +
			"&v=5.80");
}