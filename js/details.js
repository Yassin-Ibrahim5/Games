import {Ui} from "./ui.js";

export class Details {
    constructor(id) {
        this.ui = new Ui();

        document.getElementById("btn-close").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        })

        this.getDetails(id);
    }

    getDetails(id) {
        const loader = document.querySelector(".loading-screen");
        loader.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e7fdedc9b9msh3b700ba617e7257p10568djsn97b1d5aed389',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
            .then(response => response.json())
            .then((response) => this.ui.displayDetails(response))
            .catch(err => console.log(err))
            .finally(() => loader.classList.add("d-none"));
    }
}