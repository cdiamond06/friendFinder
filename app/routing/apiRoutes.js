
var friendsData = require("../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){

		res.json(friendsData);
	})

	app.post("/api/friends",function(req, res){

		var newFriend = req.body;
		var matchFriend;
		var matched = 0;
		var value = 0;
		var index;
		
		for(var i = 0; i < friendsData.length; i++){
			for(var j = 0; j < friendsData[i].scores.length; j++){
					matched += Math.abs(parseInt(newFriend.scores[i]) - parseInt(friendsData[i].scores[j]));
					if(j === 9){console.log(friendsData[i].name + "   " + matched);}
				}// end of inner for looping through the scores
			if(i === 0){
				value = matched;
				index = i;
				matched = 0;
			} else{
				if(matched < value){
					value = matched;
					matched = 0;
					index = i;
					console.log(friendsData[index]);
				}
			} // end of else
		} // end of outer for loop through the friends list
		console.log(newFriend.name);
		console.log(friendsData[index].name)
		friendsData.push(newFriend);
		res.json(friendsData[index]);
	})
}
