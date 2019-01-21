var movie = [
	
	{
		title: "Harry Potter",
		rating: "5 stars",
		haveSeen: true
	},
	{
		title: "Star Wars",
		rating: "5 stars",
		haveSeen: true
	},

	{
		title: "Glass",
		rating: "5 stars",
		haveSeen: false
	}
]

	movie.forEach(function(movie) {
	var result = "You have ";
		if(movie.haveSeen) {
		result += "watched ";
		} else {
		result += "not seen ";
		}

		result += movie.title + " ";
		result += movie.rating; +  "stars";
	console.log(result)
	


	})


	// attempt this on my own with video