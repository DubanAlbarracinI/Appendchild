let bodyPagina = document.querySelector("body")
let navbar = document.createElement("nav")
bodyPagina.className = "img"
navbar.classList.add("navbar", "navbar-expand-lg","sticky-top")
bodyPagina.appendChild(navbar)
    
let divHijoNavbar = document.createElement("div")
divHijoNavbar.classList.add("container")
navbar.appendChild(divHijoNavbar)

let aHijoDiv = document.createElement("a")
aHijoDiv.className = "navbar-brand"
aHijoDiv.setAttribute("href", "#")
divHijoNavbar.appendChild(aHijoDiv)

let imgHijoA = document.createElement("img")
imgHijoA.setAttribute("src", "assets/img/img3.png")
imgHijoA.className = "w-25"
aHijoDiv.appendChild(imgHijoA)


let btnHijoA = document.createElement("button")
btnHijoA.setAttribute("type", "button")
btnHijoA.setAttribute("data-bs-toggle", "collapse")
btnHijoA.setAttribute("data-bs-target", "#navbarSupportedContent")
btnHijoA.setAttribute("aria-controls", "navbarSupportedContent")
btnHijoA.setAttribute("aria-expanded", "false")
btnHijoA.setAttribute("aria-label", "Toggle navigation")
btnHijoA.className = "navbar-toggler"
divHijoNavbar.appendChild(btnHijoA)

let spanHijoBtn = document.createElement("span")
spanHijoBtn.className = "navbar-toggler-icon"
btnHijoA.appendChild(spanHijoBtn)

let divHijoDivNavbar = document.createElement("div")
divHijoDivNavbar.setAttribute("id", "navbarSupportedContent")
divHijoDivNavbar.className = "collapse navbar-collapse"
divHijoNavbar.appendChild(divHijoDivNavbar)

let ulHijoDiv = document.createElement("ul")
ulHijoDiv.className = "navbar-nav me-auto mb-2 mb-lg-0"
divHijoDivNavbar.append(ulHijoDiv)

let opcionesLi = ["|", "HALO:", "VER AHORA"]

for (const elmento of opcionesLi) {
    let liLista = document.createElement("li")
    liLista.innerText = elmento
    liLista.classList.add = ("nav-item ", "border-start")
    liLista.className = "nav text-white px-2 "
    ulHijoDiv.appendChild(liLista)
}

//let liLista = document.createElement("li")
//liLista.className = "nav-item"
//ulHijoDiv.appendChild(liLista)
//
//let aHijoLi = document.createElement("a")
//aHijoLi.className = "nav-link active"
//aHijoLi.setAttribute("aria-current", "page")
//aHijoLi.setAttribute("href","#")
//aHijoLi.innerText = "hola"
//liLista.appendChild(aHijoLi)

let formHijoDiv = document.createElement("form")
formHijoDiv.className = "d-flex"
formHijoDiv.setAttribute("role", "search")
divHijoDivNavbar.appendChild(formHijoDiv)

let aHijoForm = document.createElement("a")
aHijoDiv.classList.add( "nav-link")
aHijoForm.setAttribute("href", "#")
aHijoForm.innerText = "INCIAR SESION"
formHijoDiv.appendChild(aHijoForm)

let sectionHijoBody = document.createElement("section")
sectionHijoBody.className = "container"
bodyPagina.appendChild(sectionHijoBody)

let divHijoSection = document.createElement("div")
divHijoSection.className = "grid"
sectionHijoBody.appendChild(divHijoSection)

let divHijoDivSection = document.createElement("div")
divHijoDivSection.classList.add("grid-item", )
divHijoSection.appendChild(divHijoDivSection)

let pDivHijo = document.createElement("strong")
pDivHijo.classList.add("includeInScrollTracking", "text-light", "posicion")
pDivHijo.setAttribute("data-row-position", "0")
pDivHijo.innerText = "HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO."
pDivHijo.style = "font-family: 'Archivo Black' ;font-style: normal;font-display: swap;font-size: 49px;max-width: 756px;padding-top: 4%;"
divHijoDivSection.appendChild(pDivHijo)

let brHijopDiv = document.createElement("br")
pDivHijo.appendChild(brHijopDiv)

let div2HijoSection = document.createElement("div")
div2HijoSection.classList.add("upsell-tex")
sectionHijoBody.appendChild(div2HijoSection)

let pHijoDiv2 = document.createElement("strong")
pHijoDiv2.classList.add("text-light")
pHijoDiv2.innerText = "Suscríbete por $13,900.00&nbsp;COP al Mes. Cancela en cualquier momento. Únete ahora y obtén 7 días gratis."
pHijoDiv2.style = "font-family: 'figtree'; font-style: normal ; font-weight: 600; font-display: swap;"
div2HijoSection.appendChild(pHijoDiv2)

let div3HijoSection = document.createElement("div")
sectionHijoBody.appendChild(div3HijoSection)

let pHijoDiv3 = document.createElement("p")
div3HijoSection.appendChild(pHijoDiv3)

let buttonHijoP = document.createElement("button")
buttonHijoP.setAttribute("type", "button")
buttonHijoP.setAttribute("data-bs-toggle", "collapse")
buttonHijoP.setAttribute("data-bs-target", "#collapseWidthExample")
buttonHijoP.setAttribute("aria-expanded", "false")
buttonHijoP.setAttribute("aria-controls", "collapseWidthExample")
buttonHijoP.classList.add("btn btn-primary")
buttonHijoP.innerText = "SUSCRÍBETE A PARAMOUNT+"
pHijoDiv3.appendChild(buttonHijoP)

let divHijoDiv3 = document.createElement("div")
