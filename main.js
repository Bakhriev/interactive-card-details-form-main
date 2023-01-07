const btn = document.querySelector(".btn")
const form = document.querySelector(".form")
const congratulations = document.querySelector(".sucsess")

const inputCardNumber = document.querySelector("#card-number")
const cardNumber = document.querySelector(".card-number")

const inputM = document.querySelector("#mm")
const inputY = document.querySelector("#yy")
const date = document.querySelector(".date")

const inputCvc = document.querySelector("#cvc")
const cvc = document.querySelector(".card-back-cvc")

const inputCardName = document.querySelector("#username")
const cardName = document.querySelector(".name")

btn.addEventListener("click", e => {
	form.classList.add("hidden")
	congratulations.classList.add("active")
})

inputCardNumber.addEventListener("input", e => {
	if (!e.target.value) {
		cardNumber.innerHTML = "9591 6489 6389 1011"
	} else if (e.target.value.length > 12) {
		cardNumber.innerHTML = e.target.value.replace(
			/(\d{4})(\d{4})(\d{4})(\d{0,4})/,
			"$1 $2 $3 $4"
		)
	} else if (e.target.value.length > 8) {
		cardNumber.innerHTML = e.target.value.replace(
			/(\d{4})(\d{4})(\d{0,4})/,
			"$1 $2 $3"
		)
	} else if (e.target.value.length > 4) {
		cardNumber.innerHTML = e.target.value.replace(/(\d{4})(\d{0,4})/, "$1 $2")
	} else {
		cardNumber.innerHTML = e.target.value
	}
})

inputM.addEventListener("input", e => {
	date.innerHTML = e.target.value
	if (e.target.value.length === 2) {
		date.innerHTML = e.target.value.replace(/(\d{2})(\d{0,2})/, "$1/$2")
	}
	if (!e.target.value && date.innerHTML.length === 0) {
		date.innerHTML = "09/00"
	}
})
inputY.addEventListener("input", e => {
	const val = e.target.value
	date.innerHTML = date.innerHTML.replace(/(\d{2})\/(\d{0,2})?/, `$1/${val}`)
	if (!e.target.value && date.innerHTML.length === 0) {
		date.innerHTML = "09/00"
	}
})

inputCvc.addEventListener("input", e => {
	if (!e.target.value) {
		cvc.innerHTML = "000"
	} else {
		cvc.innerHTML = e.target.value
	}
})

inputCardName.addEventListener("input", e => {
	if (!e.target.value) {
		cardName.innerHTML = "Felicia Leire"
	} else {
		e.target.value = e.target.value.replaceAll("_", "")
		cardName.innerHTML = e.target.value.replaceAll("_", "")
	}
})
