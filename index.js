'use strict'

const moscowCityData = require('./data/moscow-city.json')
const stPetersburgData = require('./data/st-petersburg.json')
const tatarstanData = require('./data/tatarstan.json')

module.exports = {
    moscowCity: moscowCity(),
    stPetersburg: stPetersburg(),
    tatarstan: tatarstan(),
}

function moscowCity () {
    const moscowCityArray = []

    moscowCityData.forEach(item => {
        moscowCityArray.push(item)
    })

    return moscowCityArray
}

function stPetersburg () {
    const stPetersburgArray = []

    stPetersburgData.forEach(item => {
        stPetersburgArray.push(item)
    })

    return stPetersburgArray
}

function tatarstan () {
    const tatarstanArray = []

    tatarstanData.forEach(item => {
        tatarstanArray.push(item)
    })

    return tatarstanArray
}
