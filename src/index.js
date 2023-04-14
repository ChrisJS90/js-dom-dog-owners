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
                return "yes!"
            } else {
                return "no!"
            }
        }
        dogNaughty.innerText = "Is naughty? " + checkDog(goodDog)
        dogSect.append(dogNaughty)

        const goodDogButton = document.createElement("button")        
        goodDogButton.innerText = "Good dog!" 
        goodDogButton.addEventListener("click", () => {
            dogNaughty.innerText = ""
            if (goodDog === true) {
                goodDog = false
                dogNaughty.innerText = "Is naughty? " + checkDog(goodDog)
            } else {
                goodDog = true
                dogNaughty.innerText = "Is naughty? " + checkDog(goodDog)
            }
        })
        dogSect.append(goodDogButton)
        
    } )
    dogList.append(dogItem)    
}

function createDogCard(num) {
    
    
    
}

function renderDogList () {
    for(let i = 0; i < data.length; i++) {
        createDogList(i)
    }
}
renderDogList()