function vk_auth() {
	var jqxhr = $.ajax({
		url: "https://oauth.vk.com/authorize\
			?client_id=6610605\
			&redirect_uri=https://jesuslike.github.io/vk_auth\
			&display=popup\
			&scope=2\
			&response_type=token\
			&v=5.80",
		type: "GET",
		dataType: "jsonp",
		crossDomain: "true");
}