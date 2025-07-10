export class Ui {
    displayGameData(data) {
        let gamesContainer = ``;

        for (let i = 0; i < data.length; i++) {
            gamesContainer += `
                <div class="col">
                    <div data-id="${data[i].id}" class="card h-100 bg-transparent" role="button">
                        <div class="card-body">
                            <div class="position-relative">
                                <img src="${data[i].thumbnail}" alt="thumbnail" class="card-img-top">
                            </div>
                            <div class="img-caption">
                                <div class="d-flex flex-row align-items-center justify-content-between">
                                    <h3 class="h6 small game-title">${data[i].title}</h3>
                                    <span class="badge badge-bg p-2">Free</span>   
                                </div>
                                <p class="card-text small text-center opacity-50 game-description">${data[i].short_description}
                                </p>
                            </div>
                        </div>
                        <footer class="card-footer small d-flex flex-row align-items-center justify-content-between">
                            <span class="badge badge-bg">${data[i].genre}</span>
                            <span class="badge badge-bg">${data[i].platform}</span>
                        </footer>
                    </div>
                </div>
            `;
        }
        document.getElementById('game-data').innerHTML = gamesContainer;
    }

    displayDetails(data) {
        document.querySelector('.game-details').innerHTML = `
            <div class="col-md-4">
                <img src="${data.thumbnail}" alt="Game Thumbnail" class="w-100">
            </div>
            <div class="col-md-8">
                <h3>Title: ${data.title}</h3>
                <p>Category: <span class="badge badge-bg">${data.genre}</span></p>
                <p>Platform: <span class="badge badge-bg">${data.platform}</span></p>
                <p>Status: <span class="badge badge-bg">${data.status}</span></p>
                <p class="small">${data.description}</p>
                <a href="${data.game_url}" target="_blank" class="btn show-game-btn">Show Game</a>
            </div>
        `;
    }
}

