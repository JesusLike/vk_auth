function getInfo(auth_token) {
	var userInfo = $.get("https://api.vk.com/method/users.get?fields=nickname&access_token=" + auth_token + "&v=5.80").response[0];
	var friendList = $.get("https://api.vk.com/method/friends.get?order=random&count=5&fields=nickname&access_token=" +
		+ auth_token).response.items.map(function(item) {
			return item.first_name + " " + item.last_name;
		});
	return {
		username: userInfo.first_name + " " + userInfo.last_name;
		friends: friendList;
	};
}