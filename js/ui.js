export class Ui {
    displayGameData(data) {
        let gamesContainer = ``;

        for (let i = 0; i < data.length; i++) {
            gamesContainer += `
                <div class="col">
                    <div data-id="${data[i].id}" class="card h-100 card-bg" role="button">
                        <div class="card-body">
                            <div class="position-relative">
                                <img src="${data[i].thumbnail}" alt="thumbnail" class="card-img-top">
                            </div>
                            <div class="img-caption">
                                <div class="d-flex flex-row align-items-center justify-content-between">
                                    <h3 class="h6 small game-title">${data[i].title}</h3>
                                    <span class="badge badge-bg">Free</span>   
                                </div>
                                <p class="card-text small opacity-50 short-description">${data[i].short_description}
                                </p>
                            </div>
                        </div>
                        <footer class="card-footer small d-flex flex-row align-items-center justify-content-between">
                            <span class="badge game-gradient">${data[i].genre}</span>
                            <span class="badge badge-bg">${data[i].platform}</span>
                        </footer>
                    </div>
                </div>
            `;
        }
        document.getElementById('game-data').innerHTML = gamesContainer;
    }

    displayDetails(data) {
        document.getElementById('details-content').innerHTML = `
            <div class="col-md-4">
                <img src="${data.thumbnail}" alt="Game Thumbnail" class="w-100">
            </div>
            <div class="col-md-8">
                <h3 class="game-title">Title: <span>${data.title}</span></h3>
                <p class="game-category">Category: <span class="badge game-gradient">${data.genre}</span></p>
                <p class="game-platform">Platform: <span class="badge game-gradient">${data.platform}</span></p>
                <p class="game-status">Status: <span class="badge game-gradient">${data.status}</span></p>
                <p class="game-description small">${data.description}</p>
                <a href="${data.game_url}" target="_blank" class="btn badge-bg" id="show-game-btn">Show Game</a>
            </div>
        `;
    }
}

