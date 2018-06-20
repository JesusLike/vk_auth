function getInfo(auth_token) {
	$.ajax({
		method: "GET",
		url: "https://api.vk.com/method/users.get?fields=nickname&access_token=" + auth_token + "&v=5.80",
		dataType: "jsonp",
		crossDomain: true,
		success: function(data) {
			$("#username").text(data.response[0].first_name + " " + data.response[0].last_name);
			$.ajax({
				method: "GET",
				url: "https://api.vk.com/method/friends.get?order=random&count=5&fields=nickname&access_token=" + 
					auth_token + "&v=5.80",
				dataType: "jsonp",
				crossDomain: true,
				success: function(data) {
					data.response.items.map(function(item) {
						return item.first_name + " " + item.last_name;
					}).forEach(function(item) {
						$("#friends ul").append("<li>" + item + "</li>");
					});
				}
			});
		}
	});
}