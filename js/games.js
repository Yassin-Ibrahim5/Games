import {Details} from "./details";
import {Ui} from "./ui";

export class Games {
    constructor() {
        this.getGames("mmorpg");

        document.querySelectorAll(".nav-link").forEach()

        this.ui = new Ui();
    }

    async getGames(category) {
        const loader = document.querySelector(".loading-screen");
        loader.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e7fdedc9b9msh3b700ba617e7257p10568djsn97b1d5aed389',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const data = await response.json();

        this.ui.displayGameData(data);
        this.detailsOnClick();
        loader.classList.add("d-none");
    }

    detailsOnClick() {
        document.querySelector(".card").forEach(card => {
            card.addEventListener("click", () => {
                const id = card.dataset.id;
                this.showDetails(id);
            })
        })
    }


    showDetails(id) {
        const details = new Details(id);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }

}