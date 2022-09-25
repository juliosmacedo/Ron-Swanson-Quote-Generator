const app = document.getElementById('root')
var request = new XMLHttpRequest()
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

request.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes', true)



request.onload = function () {
    let data = JSON.parse(this.response)

    data.forEach(quote => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        const h1 = document.createElement('h1')
        h1.textContent = quote
        container.appendChild(card)
        card.appendChild(h1)
    })

    if (request.status >= 200 && request.status < 400) {
        data.forEach(quote => {
          console.log(quote)
        })
      } else {
        console.log('error')
      }


}


request.send()