const input = document.getElementById("search");
const searchButton = document.getElementById("search-2")
const serc = document.getElementById("search-p")

searchButton.addEventListener("click", () => {
    input.focus();
})

const contact = document.getElementById("contact-us")

contact.addEventListener("click", () => {
    document.getElementById("name").focus();
})

const product = document.querySelectorAll(".box-content")
product.forEach(pro => {

    pro.addEventListener("click", () => {
        const forSearch = pro.childNodes[1].innerText;
        input.value = forSearch;

        serc.click();
    })
})