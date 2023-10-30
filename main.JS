document
    .querySelector(`#order-btn`)
    .addEventListener(`click`, function(){
        document
            .querySelector(`.order-info`)
            .innerHTML = `Мы приняли вашу заявку!`
    })