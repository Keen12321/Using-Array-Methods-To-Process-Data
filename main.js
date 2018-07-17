const answer1 = document.querySelector('#answer1')

var avgprice = (items.reduce(function(a, b) {
	return a + b.price
}, 0) / items.length).toFixed(2)

answer1.innerHTML = `The average price is $${avgprice}`



const answer2 = document.querySelector('#answer2')

var cheap = items.filter(function(item) {
	if (14 < item.price && 18 > item.price) {
		return true
	} else {
		return false
	}
}).map(function(item) {
	return item.title
}).join(`\n`)

answer2.innerHTML = cheap




const answer3 = document.querySelector('#answer3')

var gbp = items.filter(function(item) {
	return item.currency_code === 'GBP'
})[0]

var gbpDisplay = gbp.title + " $" + gbp.price

answer3.innerHTML = gbpDisplay




const answer4 = document.querySelector('#answer4')

var woodItems = items.filter(function(item) {
	return item.materials.indexOf('wood') !== -1
}).map(function(item) {
	return item.title
}).join(`\n`)

answer4.innerHTML = woodItems




const answer5 = document.querySelector('#answer5')

var tonsOfMats = items.filter(function(item) {
	return item.materials.length >= 8 
})

let more = ''

tonsOfMats.forEach(function(item) {
	more += `${item.title} has ${item.materials.length} materials\n`

	more += item.materials.join('\n')
})

answer5.innerHTML = more




const answer6 = document.querySelector('#answer6')

var madeBySellers = items.filter(function(item) {
	return item.who_made == 'i_did'
}).length

answer6.innerHTML = `${madeBySellers} were made by sellers`
