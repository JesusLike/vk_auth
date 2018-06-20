function getInfo(auth_token) {
	var username;
	var friendList;

	$.ajax({
		url: "https://api.vk.com/method/users.get?fields=nickname&access_token=" + auth_token + "&v=5.80",
		dataType: "jsonp",
		crossDomain: true,
		success: function(data) {
			username = data.response[0].first_name + " " + data.response[0].last_name;
		}
	});
	
	$.ajax({
		url: "https://api.vk.com/method/friends.get?order=random&count=5&fields=nickname&access_token=" + auth_token,
		dataType: "jsonp",
		crossDomain: true,
		success: function(data) {
			friendList = data.response.items.map(function(item) {
				return item.first_name + " " + item.last_name;
			});
		}
	});

	return {
		username: username,
		friends: friendList
	};
}