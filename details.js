//riferimento id prodotto selezionato
const searchParam = new URLSearchParams(window.location.search)
const id = searchParam.get('id')

//costanti
const divRow = document.getElementById('divRow')

//funzione async chiamata al prodotto singolo da mostrare
async function fetchProducts() {

    const response = await fetch('https://striveschool-api.herokuapp.com/api/product/' + id, {
        headers: {
            "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTA3NTE4MTksImV4cCI6MTc1MTk2MTQxOX0.t_bJLLPOKkJmP9671iTnBxD1unWsgR0VvLCVdgSs5UU'
        }
    })
    const data = await response.json()
    console.log(data)
    renderProductSelected(data)
}

fetchProducts()

//struttura singolo prodotto
function renderProductSelected(productSelected) {
        
        const divColLeft = document.createElement('div')
        divColLeft.classList.add('col-md-7','mb-4')
        divRow.appendChild(divColLeft)

        const titleProduct = document.createElement('h1')
        titleProduct.classList.add('fw-bold')
        titleProduct.textContent = productSelected.name
        divColLeft.appendChild(titleProduct)

        const description = document.createElement('p')
        description.className = 'text-muted'
        description.textContent = productSelected.description
        divColLeft.appendChild(description)

        const imgProduct = document.createElement('img')
        imgProduct.src = productSelected.imageUrl
        imgProduct.alt = productSelected.name
        imgProduct.classList.add('img-fluid','rounded', 'shadow')
        divColLeft.appendChild(imgProduct)

        const divColRight = document.createElement('div')
        divColRight.className = 'col-md-5'
        divRow.appendChild(divColRight)

        const divCard = document.createElement('div')
        divCard.classList.add('card','p-4','shadow-sm')
        divColRight.appendChild(divCard)

        const priceProduct = document.createElement('h1')
        priceProduct.classList.add('fw-bold','text-success')
        priceProduct.textContent = `€ ${productSelected.price}`
        divCard.appendChild(priceProduct)

        const expedition = document.createElement('p')
        expedition.className = 'mt-3'
        expedition.textContent = '📦 Spedizione gratuita disponibile'
        divCard.appendChild(expedition)

        const garancy = document.createElement('p')
        garancy.textContent = '🛡️ Garanzia di 2 anni inclusa'
        divCard.appendChild(garancy)

        //selectColorProduct
        const selectColorProduct = document.createElement('select')
        selectColorProduct.name = 'selectColor'
        selectColorProduct.id = 'selectColor'
        selectColorProduct.style.height = '30px'
        selectColorProduct.style.width = '35%'
        divCard.appendChild(selectColorProduct)

        const optionBlack = document.createElement('option')
        optionBlack.value = 'Nero'
        optionBlack.textContent = 'Nero'
        selectColorProduct.appendChild(optionBlack)

        const optionWhite = document.createElement('option')
        optionWhite.value = 'Bianco'
        optionWhite.textContent = 'Bianco'
        selectColorProduct.appendChild(optionWhite)

        const optionGreen = document.createElement('option')
        optionGreen.value = 'Verde'
        optionGreen.textContent = 'Verde'
        selectColorProduct.appendChild(optionGreen)

        const optionGold = document.createElement('option')
        optionGold.value = 'Oro'
        optionGold.textContent = 'Oro'
        selectColorProduct.appendChild(optionGold)

        const optionSilver = document.createElement('option')
        optionSilver.value = 'Argento'
        optionSilver.textContent = 'Argento'
        selectColorProduct.appendChild(optionSilver)

        const btnAggiungiAlCarrello = document.createElement('button')
        btnAggiungiAlCarrello.classList.add('btn','btn-primary','w-100','mt-4')
        btnAggiungiAlCarrello.style.backgroundColor = 'rgb(101, 45, 231)'
        btnAggiungiAlCarrello.style.border = 'none'
        divCard.appendChild(btnAggiungiAlCarrello)

        const imgCarrello = document.createElement('img')
        imgCarrello.src = 'assets/shopping_cart_tatjh597qwze_32.png'
        imgCarrello.alt = 'carrello'
        imgCarrello.style.width = '20px'
        imgCarrello.style.marginRight = '10px'
        btnAggiungiAlCarrello.appendChild(imgCarrello)
        
        const span = document.createElement('span')
        span.textContent = 'Aggiungi al carrello'
        btnAggiungiAlCarrello.appendChild(span)

        //pagamenti
        const divPayments = document.createElement('div')
        divPayments.style.display = 'flex'
        divPayments.style.gap = '15px'
        divPayments.style.justifyContent = 'center'
        divPayments.style.marginTop = '15px'
        divColRight.appendChild(divPayments)

        //visa
        const divVisa = document.createElement('div')
        divVisa.style.border = 'solid 1px rgb(221, 220, 220)'
        divVisa.style.alignContent = 'center'
        divVisa.style.borderRadius = '5px'
        divPayments.appendChild(divVisa)

        const imgVisa = document.createElement('img')
        imgVisa.src = 'https://th.bing.com/th/id/R.95d007ebf3231f38229f71f5aecdbea1?rik=Ss3sJwr3qzqTpw&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f07%2fvisa_logo_7.jpg&ehk=CSuo2ZGEs8pAFhtEZdhZrrFqBe9HeoSS2tUHFpLI1Mg%3d&risl=&pid=ImgRaw&r=0'
        imgVisa.alt = 'Visa'
        imgVisa.style.width = '64px'
        divVisa.appendChild(imgVisa)

        //martercard
        const divMastercard = document.createElement('div')
        divMastercard.style.border = 'solid 1px rgb(221, 220, 220)'
        divMastercard.style.alignContent = 'center'
        divMastercard.style.borderRadius = '5px'
        divPayments.appendChild(divMastercard)

        const imgMastercard = document.createElement('img')
        imgMastercard.src = 'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2016-2020.png'
        imgMastercard.alt = 'Mastercard'
        imgMastercard.style.width = '64px'
        divMastercard.appendChild(imgMastercard)

        //americanexpress
        const divAmericanExpress = document.createElement('div')
        divAmericanExpress.style.border = 'solid 1px rgb(221, 220, 220)'
        divAmericanExpress.style.alignContent = 'center'
        divAmericanExpress.style.borderRadius = '5px'
        divPayments.appendChild(divAmericanExpress)

        const imgAmericanExpress = document.createElement('img')
        imgAmericanExpress.src = 'https://logos-world.net/wp-content/uploads/2020/11/American-Express-Logo.png'
        imgAmericanExpress.alt = 'American Express'
        imgAmericanExpress.style.width = '64px'
        divAmericanExpress.appendChild(imgAmericanExpress)

        //paypal
        const divPayPal = document.createElement('div')
        divPayPal.style.border = 'solid 1px rgb(221, 220, 220)'
        divPayPal.style.alignContent = 'center'
        divPayPal.style.borderRadius = '5px'
        divPayments.appendChild(divPayPal)

        const imgPayPal = document.createElement('img')
        imgPayPal.src = 'https://th.bing.com/th/id/OIP.ZvTUoMqAhkKCo0wlrZgozgHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2'
        imgPayPal.alt = 'Visa'
        imgPayPal.style.width = '64px'
        divPayPal.appendChild(imgPayPal)

}