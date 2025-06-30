
//costanti
const nome = document.getElementById('name')
const descrizione = document.getElementById('description')
const brand = document.getElementById('brand')
const immagine = document.getElementById('image')
const prezzo = document.getElementById('price')

document.getElementById('btnSave').addEventListener('click', saveProduct)


//recupero id
const param = new URLSearchParams(window.location.search)
const id = param.get('id')


// chiamata fetch all'id
async function fetchProductSelected() {

    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTA3NTE4MTksImV4cCI6MTc1MTk2MTQxOX0.t_bJLLPOKkJmP9671iTnBxD1unWsgR0VvLCVdgSs5UU'
            }
        })
        const data = await response.json()
        console.log(data)
        productCompiled(data)
    } catch (e) {
        console.log(e)
    }
}

fetchProductSelected()

//campi input prepopolati con prodotto corrente
function productCompiled(product) {

    nome.value = product.name
    descrizione.value = product.description
    brand.value = product.brand
    immagine.value = product.imageUrl
    prezzo.value = product.price
}


//funzione fetch PUT
async function saveProduct(e) {

    e.preventDefault()

    const data = {
        name: nome.value,
        description: descrizione.value,
        brand: brand.value,
        imageUrl: immagine.value,
        price: prezzo.value
    }
    console.log(data)

    try {
        await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTA3NTE4MTksImV4cCI6MTc1MTk2MTQxOX0.t_bJLLPOKkJmP9671iTnBxD1unWsgR0VvLCVdgSs5UU',
                'Content-Type': 'application/json'
            }
        })
        //reindirizzamento al prodotto 
        window.location.href = 'iMieiProdotti.html'
    } catch (e) {
        console.log(e)
    }
}