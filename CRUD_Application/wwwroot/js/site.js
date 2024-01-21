const createForm = document.getElementById("create-form")
const updateForm = document.getElementById("update-form")
const deleteForm = document.getElementById("delete-form")

const formFon = document.getElementById("form-fon")
const createButton = document.getElementById("create-button")
const dataList = document.getElementById("data-list")

formFon.addEventListener("click", (e) => {
    if (e.target.localName == "div")
    {
        formFon.style = "visibility: hidden; opacity: 0"

        if (updateForm.style.opacity == 1) {
            updateForm.querySelectorAll("*").forEach(elm => elm.remove())
            updateForm.style = "visibility: hidden; opacity: 0"
        }
        else if (deleteForm.style.opacity == 1) {
            deleteForm.querySelectorAll("*").forEach(elm => elm.remove())
            deleteForm.style = "visibility: hidden; opacity: 0"
        }
        else createForm.style = "visibility: hidden; opacity: 0"
    }
})

createButton.addEventListener("click", () => {
    createForm.style = "visibility: initial; opacity: 1;"
    formFon.style = "visibility: initial; opacity: 1;"
})

dataList.addEventListener("click", (e) => {
    if (e.target.className === "update-button") {
        const removableElementId = e.target.closest("li").querySelector("input").value
        const properties = e.target.parentElement.previousElementSibling

        const idSpace = document.createElement("input");
        idSpace.readOnly = true; idSpace.value = removableElementId; idSpace.name = "id"; idSpace.style.display = "none"
        const updateButton = document.createElement("button"); updateButton.type = "submit"; updateButton.innerText = "Edit"
        const inputFields = document.createElement("ul"); inputFields.className = "input-fields";

        properties.querySelectorAll("p").forEach(elm => {
            const field = document.createElement("li")
            const title = document.createElement("p")
            const input = document.createElement("input")

            field.className = "field"
            title.innerText = elm.className.split("-")[1]
            input.value = elm.innerText
            input.name = elm.className.split("-")[1]

            field.append(title)
            field.append(input)
            inputFields.append(field)
        })

        updateForm.append(idSpace)
        updateForm.append(inputFields)
        updateForm.append(updateButton)

        updateForm.style = "visibility: initial; opacity: 1;"
        formFon.style = "visibility: initial; opacity: 1;"
    }
    else if (e.target.className === "delete-button") {
        const changingElementId = e.target.closest("li").querySelector("input").value
        const targetProperties = e.target.parentElement.previousElementSibling.querySelectorAll("p")

        const description = document.createElement("p")
        const deleteButton = document.createElement("button"); deleteButton.type = "submit"; deleteButton.innerText = "Delete"
        const hiddenId = document.createElement("input");
        hiddenId.name = "id"; hiddenId.value = changingElementId; hiddenId.readOnly = true; hiddenId.style.display = "none"
        
        description.innerText = `You really want to delete ${targetProperties[0].innerText} ${targetProperties[1].innerText} from list.`

        deleteForm.append(hiddenId)
        deleteForm.append(description)
        deleteForm.append(deleteButton)

        deleteForm.style = "visibility: initial; opacity: 1;"
        formFon.style = "visibility: initial; opacity: 1;"
    }
})