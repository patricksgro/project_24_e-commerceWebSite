
//costanti CARD
const divRowInside = document.getElementById('divRowInside')


async function fetchProducts() {

    const response = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTA3NTE4MTksImV4cCI6MTc1MTk2MTQxOX0.t_bJLLPOKkJmP9671iTnBxD1unWsgR0VvLCVdgSs5UU'
        }
    })
    const data = await response.json()
    console.log(data)
    renderProducts(data)

}

fetchProducts()

//funzione di ciclo per generare le card nella home page
function renderProducts(products) {

    divRowInside.innerHTML = ''

    products.slice(8, Infinity).forEach(product => {

        const divColCard = document.createElement('div')
        divColCard.classList.add('col-12', 'col-md-6')
        divRowInside.appendChild(divColCard)

        const divCard = document.createElement('div')
        divCard.classList.add('card', 'mb-3')
        divCard.style.maxWidth = '540px'
        divCard.style.minHeight = '270px'
        divColCard.appendChild(divCard)

        const divCardRow = document.createElement('div')
        divCardRow.classList.add('g-0', 'row')
        divCard.appendChild(divCardRow)

        const divColCardInside = document.createElement('div')
        divColCardInside.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'col-md-4')
        divCardRow.appendChild(divColCardInside)

        const linkToDetails = document.createElement('a')
        linkToDetails.href = `details.html?id=${product._id}`
        divColCardInside.appendChild(linkToDetails)

        const ImgCard = document.createElement('img')
        ImgCard.src = product.imageUrl
        ImgCard.classList.add('img-fluid', 'rounded-start')
        ImgCard.style.objectFit = 'contain'
        ImgCard.style.width = '180px'
        ImgCard.style.height = '180px'
        ImgCard.alt = product.name
        linkToDetails.appendChild(ImgCard)

        const divCardText = document.createElement('div')
        divCardText.className = 'col-md-8'
        divCardRow.appendChild(divCardText)

        const divCardBodyText = document.createElement('div') //il btn va appeso qui
        divCardBodyText.className = 'card-body'
        divCardText.appendChild(divCardBodyText)

        const cardTitle = document.createElement('h4')
        cardTitle.classList.add('fw-bold', 'card-title')
        cardTitle.innerHTML = product.name
        divCardBodyText.appendChild(cardTitle)

        const description = document.createElement('p')
        description.className = 'card-text'
        description.innerHTML = product.description
        divCardBodyText.appendChild(description)

        const price = document.createElement('p')
        price.classList.add('card-text', 'text-success')
        price.innerHTML = `€ ${product.price}`
        price.style.fontWeight = 'bolder'
        price.style.fontSize = '1.5rem'
        divCardBodyText.appendChild(price)

        //modifica prodotto
        const btn = document.createElement('a')
        btn.style.display = 'flex'
        btn.style.alignItems = 'center'
        btn.style.backgroundColor = 'rgb(101, 45, 231)'
        btn.style.color = 'white'
        btn.style.gap = '10px'
        btn.style.padding = '5px'
        btn.style.borderRadius = '3px'
        btn.style.width = '70px'
        btn.href = `modificaProdotto.html?id=${product._id}`
        divCardBodyText.appendChild(btn)

        const textCarrell = document.createElement('span')
        textCarrell.innerText = 'Modifica'
        textCarrell.style.color = 'white'
        btn.appendChild(textCarrell)

        const btnElimina = document.createElement('button')
        btnElimina.style.display = 'flex'
        btnElimina.style.alignItems = 'center'
        btnElimina.style.backgroundColor = 'rgb(201, 47, 0)'
        btnElimina.style.color = 'white'
        btnElimina.style.marginTop = '10px'
        btnElimina.style.gap = '10px'
        btnElimina.style.padding = '5px'
        btnElimina.style.borderRadius = '3px'
        divCardBodyText.appendChild(btnElimina)
        btnElimina.addEventListener('click', () => deleteProduct(product._id))

        const textDelete = document.createElement('span')
        textDelete.innerText = 'Elimina'
        textDelete.style.color = 'white'
        btnElimina.appendChild(textDelete)

        return divRowInside
    });

}

//funzione elimina prodotto
async function deleteProduct(product) {

    try {
        await fetch(`https://striveschool-api.herokuapp.com/api/product/${product}`, {
            method: 'DELETE',
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTA3NTE4MTksImV4cCI6MTc1MTk2MTQxOX0.t_bJLLPOKkJmP9671iTnBxD1unWsgR0VvLCVdgSs5UU',
                'Content-Type': 'application/json'
            }
        })
        fetchProducts()
    } catch (e) {
        console.log(e)
    }

}