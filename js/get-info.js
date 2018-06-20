function getInfo(auth_token) {
	var username;
	var friendList;

	$.ajax({
		method: "GET",
		url: "https://api.vk.com/method/users.get?fields=nickname&access_token=" + auth_token + "&v=5.80",
		dataType: "jsonp",
		crossDomain: true,
		success: function(data) {
			username = data.response[0].first_name + " " + data.response[0].last_name;
		}
	});
	
	$.ajax({
		method: "GET",
		url: "https://api.vk.com/method/friends.get?order=random&count=5&fields=nickname&access_token=" + auth_token,
		dataType: "jsonp",
		crossDomain: true,
		success: function(data) {
			friendList = data.response.items.map(function(item) {
				return item.first_name + " " + item.last_name;
			});
		}
	});

	console.log(username);
	console.log(friendList);
	console.log("Get info done");

	return {
		username: username,
		friends: friendList
	};
}