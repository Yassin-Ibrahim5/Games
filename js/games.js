import {Details} from "./details.js";
import {Ui} from "./ui.js";

export class Games {
    constructor() {
        this.ui = new Ui();

        this.getGames("mmorpg").catch(console.error);

        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", (event) => {
                document.querySelector(".game-categories .active").classList.remove("active");
                event.target.classList.add("active");
                this.getGames(event.target.dataset.category).then();
            });
        });

    }

    async getGames(category) {
        if (!category) throw new Error('Category not initialized');

        const loader = document.querySelector(".loading-screen");
        loader.classList.remove("d-none");
        try {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'e7fdedc9b9msh3b700ba617e7257p10568djsn97b1d5aed389',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                }
            };
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            const data = await response.json();
            this.ui.displayGameData(data);
            this.detailsOnClick();
        } catch (error) {
            console.log("Failed to get games: ", error);
        } finally {
            loader.classList.add("d-none");
        }
    }

    detailsOnClick() {
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", () => {
                const id = card.dataset.id;
                this.showDetails(id);
                if (document.body.classList.contains("bg-black")) {
                    document.body.classList.remove("bg-black");
                    document.body.classList.add("details-bg");
                }
            })
        })
    }


    showDetails(id) {
        try {
            new Details(id);
            document.querySelector(".games-container").classList.add("d-none");
            document.querySelector(".navbar").classList.add("d-none");
            document.querySelector(".game-details").classList.remove("d-none");
        } catch (error) {
            console.log("Failed to show details: ", error);
        }
    }

}