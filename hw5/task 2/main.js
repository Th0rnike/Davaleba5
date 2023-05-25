body = document.querySelector('body')

// create elements
divCard = document.createElement('div')
h2 = document.createElement('h2')
aLink = document.createElement('a')

// add id attribute to div
addId = divCard.setAttribute("id", "card")
addHref = aLink.setAttribute("href", "#")

// add elements in div
body.appendChild(divCard)
divCard.appendChild(h2)
divCard.appendChild(aLink)

// add text content in the tag names
h2.textContent = "Gandalf"
aLink.textContent = "Go To Profile"

// separate div
divCard.style.border = "2px solid darkgreen"

console.log(body)