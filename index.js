//array brand per verifica campo input brand
const electronicBrands = [
    "Apple", "Samsung", "Sony", "LG", "Lenovo", "HP", "Dell", "Asus", "Acer", "MSI",
    "Microsoft", "Xiaomi", "Huawei", "Realme", "OnePlus", "Nokia", "Motorola", "Google",
    "AmazonBasics", "Philips", "Panasonic", "Sharp", "Toshiba", "Vizio", "Hisense",
    "JBL", "Bose", "Beats", "Anker", "Razer", "Logitech", "SteelSeries", "Corsair",
    "EVGA", "Zotac", "Gigabyte", "ASRock", "Alienware", "Honor", "Alcatel", "Fairphone",
    "Nothing", "Blaupunkt", "Thomson", "Creative", "TCL", "ViewSonic", "BenQ",
    "Pioneer", "Kenwood", "Onkyo", "Denon", "Marantz", "Yamaha", "Harman Kardon",
    "Atlantis", "Trust", "Medion", "Packard Bell", "Grundig", "Sagemcom", "Technics",
    "iRobot", "Roomba", "Ecovacs", "Neato", "Arlo", "Ring", "Wyze", "Ubiquiti",
    "Netgear", "TP-Link", "D-Link", "Zyxel", "Synology", "QNAP", "Western Digital",
    "Seagate", "LaCie", "Sandisk", "Kingston", "Crucial", "Transcend", "Verbatim",
    "Garmin", "TomTom", "DJI", "Parrot", "GoPro", "Canon", "Nikon", "Fujifilm",
    "Olympus", "Sigma", "Leica", "Epson", "Brother", "Lexmark", "Ricoh", "Kyocera",
    "Polaroid", "Vivitar", "Bushnell", "Tamron", "Metz", "Lomography", "Kandao", "Insta360",
    "Blackmagic", "RED", "AJA", "Atomos", "Zoom", "Tascam", "Roland", "Shure", "AKG",
    "Sennheiser", "Blue", "Elgato", "AverMedia", "Blackweb", "Insignia", "Rocketfish",
    "Monster", "Skullcandy", "Urbanears", "Marshall", "Bang & Olufsen", "Cambridge Audio",
    "Edifier", "FiiO", "iFi", "Cowon", "Fiio", "Denon DJ", "Numark", "Pioneer DJ", "Behringer",
    "M-Audio", "Focusrite", "Native Instruments", "PreSonus", "Akai", "Arturia", "Korg",
    "Novation", "Roland", "Yamaha Music", "Casio", "Alesis", "E-MU", "Zoom Audio",
    "Braun", "Oral-B", "Philips Avent", "Omron", "Withings", "Fitbit", "Garmin Health",
    "Polar", "Suunto", "Tile", "Chipolo", "Eufy", "Blink", "Ezviz", "Reolink",
    "Lorex", "Swann", "Hikvision", "Dahua", "Axis", "Bosch Security", "Mobotix",
    "Vivotek", "Uniview", "Kasa", "Meross", "Shelly", "Sonoff", "Tuya", "Yeelight",
    "Nanoleaf", "LIFX", "Govee", "Philips Hue", "Wemo", "Belkin", "iOttie", "Scosche",
    "Mophie", "Otterbox", "Spigen", "Anymode", "UAG", "Caseology", "Nomad", "Twelve South",
    "HyperX", "TeamGroup", "Patriot", "PNY", "Micron", "ADATA", "Silicon Power",
    "Buffalo", "Drobo", "Iomega", "Intenso", "Verico", "Lexar", "Goodram", "Biostar",
    "Inno3D", "Palit", "PowerColor", "Sapphire", "XFX", "ASUSTOR", "TerraMaster",
    "Lenbrook", "Russound", "NAD", "Rotel", "Cambridge Soundworks", "Focal", "KEF",
    "Bowers & Wilkins", "Klipsch", "SVS", "Definitive Technology", "Polk Audio", "Wharfedale",
    "Q Acoustics", "Jamo", "Tannoy", "Elac", "Infinity", "Mission", "Boston Acoustics",
    "Magnat", "Teufel", "Cabasse", "Triangle", "Sonus Faber", "Dynaudio", "Monitor Audio",
    "Goldmund", "Devialet", "Revox", "Luxman", "Accuphase", "McIntosh", "Mark Levinson"
];


//costanti CARD
const divRowInside = document.getElementById('divRowInside')

//constanti TABLE
const nome = document.getElementById('name')

//costanti FORM con ERRORMESSAGE
const descrizione = document.getElementById('description')
const descriptionErrorMessage = document.getElementById('descriptionErrorMessage')

const brand = document.getElementById('brand')
const brandErrorMessage = document.getElementById('brandErrorMessage')

const immagine = document.getElementById('image')
const UrlErrorMessage = document.getElementById('UrlErrorMessage')

const prezzo = document.getElementById('price')
const priceErrorMEssage = document.getElementById('priceErrorMEssage')


//funzione verifica validità descrizione
descrizione.addEventListener('keyup', validateDescription)
function validateDescription() {

    const inputValue = descrizione.value.trim()
    const isValid = inputValue.length >= 50

    if (isValid) {
        descriptionErrorMessage.classList.add('d-none')
    } else {
        descriptionErrorMessage.classList.remove('d-none')
    }

    return isValid

}


//funzione veridica validità brand
brand.addEventListener('keyup', validateBrand)
function validateBrand() {

    const inputValue = brand.value.trim()
    const isValid = electronicBrands.some(b => b.toLowerCase() === inputValue.toLowerCase())

    if (isValid) {
        brandErrorMessage.classList.add('d-none')
    } else {
        brandErrorMessage.classList.remove('d-none')
    }

    return isValid

}


//funzione verifica validità URL
immagine.addEventListener('keyup', validateUrl)
function validateUrl() {

     const isValid = immagine.checkValidity()

    if (isValid) {
        UrlErrorMessage.classList.add('d-none')
    } else {
        UrlErrorMessage.classList.remove('d-none')
    }

    return isValid

}


//funzione verifica validità prezzo 
prezzo.addEventListener('keyup', validatePrice)
function validatePrice() {

    const inputValue = prezzo.value
    const isValid = inputValue >= 1 && !inputValue.startsWith('0')

    if (isValid) {
        priceErrorMEssage.classList.add('d-none')
    } else {
        priceErrorMEssage.classList.remove('d-none')
    }

    return isValid
}

//bottone submit form
document.getElementById('btnSave').addEventListener('click', saveProduct)


//fetch
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

    products.slice(0, 8).forEach(product => {

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

        //bottone aggiungi al carrello
        const btn = document.createElement('button')
        btn.style.display = 'flex'
        btn.style.alignItems = 'center'
        btn.style.backgroundColor = 'rgb(101, 45, 231)'
        btn.style.color = 'white'
        btn.style.gap = '10px'
        btn.style.padding = '5px'
        btn.style.borderRadius = '3px'
        divCardBodyText.appendChild(btn)

        const imgCarrell = document.createElement('img')
        imgCarrell.src = 'assets/shopping_cart_tatjh597qwze_32.png'
        btn.appendChild(imgCarrell)

        const textCarrell = document.createElement('span')
        textCarrell.innerText = 'Aggiungi al carrello'
        textCarrell.style.color = 'white'
        btn.appendChild(textCarrell)

        return divRowInside
    });

}

//funzione aggiunta prodotto
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

    if (validateBrand() && validateDescription() && validatePrice() && validateUrl()) {

        try {
            await fetch('https://striveschool-api.herokuapp.com/api/product/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhNWE0YjRlZjFiYzAwMTVkZjVhZDQiLCJpYXQiOjE3NTA3NTE4MTksImV4cCI6MTc1MTk2MTQxOX0.t_bJLLPOKkJmP9671iTnBxD1unWsgR0VvLCVdgSs5UU',
                    'Content-Type': 'application/json'
                }
            })
        } catch (e) {
            console.log(e)
        }
        renderProducts([data])

    }



}