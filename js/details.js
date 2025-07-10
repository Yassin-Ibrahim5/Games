import {Ui} from "./ui.js";

export class Details {
    constructor(id) {
        this.ui = new Ui();

        this.getDetails(id).then(() => {
            document.getElementById("btn-close").addEventListener("click", () => {
                document.querySelector(".games-container").classList.remove("d-none");
                document.querySelector(".navbar").classList.remove("d-none");
                document.querySelector(".game-details").classList.add("d-none");
            })
        });

    }

    async getDetails(id) {
        const loader = document.querySelector(".loading-screen");
        loader.classList.remove("d-none");
        try {

            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'e7fdedc9b9msh3b700ba617e7257p10568djsn97b1d5aed389',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
            const data = await response.json();
            await this.ui.displayDetails(data);
        } catch (error) {
            console.log("Failed to get details: ", error);
        } finally {
            loader.classList.add("d-none");
        }

    }
}