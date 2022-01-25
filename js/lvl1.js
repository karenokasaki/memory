class lvl1 {
    constructor() {
        this.cards
        this.deck
        this.lifes
        this.board

        this.cards = [
            [1, "../img/amigos.svg"],
            [2, "../img/projetar.svg"],
            [3, "../img/poder.svg"],
            [4, "../img/harmonia.svg"],
        ]
        this.deck = [...this.cards, ...this.cards];

        this.cardBack = [ 
            ["../img/back.svg"]
        ]

        
    } 
    shuffleCards() {
        let deck = this.deck.sort(() => Math.random() - 0.5)
        return deck
    }

    printCards() {
        let board = document.getElementById("board")
        for (let i = 0; i < 8; i++) {
            let div = document.createElement("div")
            let cardBack = document.createElement("img")
            let cardFront = document.createElement("img")

            cardBack.classList.add("back-card")
            cardFront.classList.add("card")

            cardFront.id = ("card"+[i])
            cardFront.src = this.deck[i][1]
            cardBack.src = this.cardBack[0]

            div.appendChild(cardBack)
            div.appendChild(cardFront)
            board.appendChild(div)
        }
    } 

    setLifes() {
        this.lifes = 3
        let lifes = document.getElementById("lifes")
        lifes.innerText = this.lifes
    }

    addEvent() {
        
        let carta; 
        for (let i = 1 ; i <= 8 ; i++) {
            carta = `#board > div:nth-child(${i}) > img.back-card`
            console.log(carta)
            let cartaSelector = document.querySelector(carta)

            cartaSelector.addEventListener("click", () => {
                console.log("clicando nas cartas")
            })
        }  
    }

}


newGame = new lvl1()

newGame.shuffleCards()
newGame.setLifes()
newGame.printCards()
newGame.addEvent()













