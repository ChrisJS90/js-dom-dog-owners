console.log(data);

// WRITE YOUR CODE BELOW!

// Start by creating list of buttons for each dog

const dogList = document.body.querySelector(".dogs-list")
const dogMain = document.body.querySelector("main")

function createDogList (num) {
    const dog = data[num]
    const dogItem = document.createElement('li');
    dogItem.innerText = dog.name
    dogItem.setAttribute("class", "dogs-list__button")
    dogItem.addEventListener("click", () => {

        dogMain.innerHTML = ""
        
        const dogSect = document.createElement("section")
        dogSect.setAttribute("class", "main__dog-section__desc")
        dogMain.append(dogSect)

        const dogHeader = document.createElement("h2")
        dogHeader.innerText = dog.name
        dogSect.append(dogHeader)

        const dogImage = document.createElement("img")
        dogImage.setAttribute("src", dog.image)
        dogSect.append(dogImage)

        const dogDiv = document.createElement("div")
        dogDiv.setAttribute("class", "main__dog-section__desc")
        dogSect.append(dogDiv)

        const dogBioTitle = document.createElement("h3")
        dogBioTitle.innerText = "Bio"
        dogDiv.append(dogBioTitle)

        const dogBioP = document.createElement("p")
        dogBioP.innerText = dog.bio
        dogDiv.append(dogBioP)

        const dogNaughty = document.createElement("p")
        let goodDog = dog.isGoodDog
        function checkDog(goodDog) {
            if(goodDog === true){
                return "no!"
            } else {
                return "yes!"
            }
        }
        dogNaughty.innerHTML = "<em>Is naughty?</em> " + checkDog(goodDog)
        dogSect.append(dogNaughty)

        const goodDogButton = document.createElement("button")
        function isGood(goodDog) {
            if(goodDog === true) {
                return "Good dog!"
            } else {
                return "Bad dog!"
            }

        }        
        goodDogButton.innerText = isGood(goodDog) 
        goodDogButton.addEventListener("click", () => {
            dogNaughty.innerText = ""
            if (goodDog === true) {
                goodDog = false
                dogNaughty.innerHTML = "<em>Is naughty?</em> " + checkDog(goodDog)
                goodDogButton.innerText = "Bad dog!"
            } else {
                goodDog = true
                dogNaughty.innerHTML = "<em>Is naughty?</em> " + checkDog(goodDog)
                goodDogButton.innerText = "Good dog!"

            }
        })
        dogSect.append(goodDogButton)
        
    } )
    dogList.append(dogItem)    
}


function createDogForm() {
    dogMain.innerHTML = ""

    const dogSect = document.createElement("section")
    dogSect.setAttribute("class", "main__dog-section__desc")
    dogMain.append(dogSect)   
    
    const dogHeader = document.createElement("h2")
    dogHeader.innerText = "Add a new Dog"
    dogSect.append(dogHeader)

    const dogForm = document.createElement("form")
    dogForm.setAttribute("class", "form")
    dogSect.append(dogForm)

    const nameLabel = document.createElement("label")
    nameLabel.setAttribute("for", "name")
    nameLabel.innerText = "Dog's name"
    dogForm.append(nameLabel)

    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "name")
    nameInput.setAttribute("name", "name")
    dogForm.append(nameInput)

    const imageLabel = document.createElement("label")
    imageLabel.setAttribute("for", "image")
    imageLabel.innerText = "Dog's picture"
    dogForm.append(imageLabel)

    const imageInput = document.createElement("input")
    imageInput.setAttribute("type", "url")
    imageInput.setAttribute("id", "image")
    imageInput.setAttribute("name", "image")
    dogForm.append(imageInput)

    const bioLabel = document.createElement("label")
    bioLabel.setAttribute("for", "bio")
    bioLabel.innerText = "Dog's name"
    dogForm.append(bioLabel)

    const bioInput = document.createElement("textarea")
    bioInput.setAttribute("rows", "5")
    bioInput.setAttribute("id", "bio")
    bioInput.setAttribute("name", "bio")
    dogForm.append(bioInput)

    const submitButton = document.createElement("input")
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("id", "submit")
    submitButton.setAttribute("name", "submit")
    submitButton.setAttribute("value", "Let's add a dog!")
    submitButton.setAttribute("class", "form__button")
    submitButton.addEventListener("click", (e) => {
        e.preventDefault()
        const newDog = {}
        newDog.name = nameInput.value
        newDog.bio = bioInput.value
        newDog.isGoodDog = true
        newDog.image = imageInput.value
        data.unshift(newDog)
        renderDogList()
    })
    dogForm.append(submitButton)
}



function renderDogList () {
    dogList.innerHTML = ""
    const addDog = document.createElement('li')
    addDog.setAttribute("class", "dogs-list__button dogs-list__button--add")

    addDog.innerText = "+"
    dogList.append(addDog)

    for(let i = 0; i < data.length; i++) {
        
        createDogList(i)
    }
}
renderDogList()

const addDogButton = document.body.querySelector(".dogs-list__button--add")
addDogButton.addEventListener("click", createDogForm)