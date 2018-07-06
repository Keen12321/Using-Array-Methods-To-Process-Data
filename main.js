// const answer1 = document.querySelector('#answer1')

// var avgprice = items.reduce(function(a, b) {
// 	return a + b.price / 25
// }, 0)

// answer1.innerHTML = `The average price is $${avgprice.toFixed(2)}`



const answer2 = document.querySelector('#answer2')

var cheap = items.filter(function(item) {
	if (14 < item.price && 18 > item.price) {
		return true
	} else {
		return false
	}

	item.forEach(function(a) {
		return cheap += item.title
	})
})

answer2.innerHTML = `${cheap}`