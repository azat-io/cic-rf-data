'use strict'

const fs = require('fs')
const csv = require('csv-to-json')
const commandLineArgs = require('command-line-args')

function parseCSV (name, arr) {
    csv.parse({ filename: `./${ name }.csv` }, (error, result) => {
        arr.push(result)
    })
}

const uikData = []
const peopleData = []

parseCSV('cik_uik', uikData)
parseCSV('cik_people', peopleData)

let data = []

setTimeout(() => {
    uikData[0].forEach(item => {
        if (item.type_ik === 'uik') {
            data.push({
                id: item.id,
                name: parseInt(item.name.match(/\d+/g)),
                address: item.address,
                phone: item.phone,
                people: [],
            })
        }
    })

    peopleData[0].forEach(item => {
        const id = data.findIndex(i => i.id === item.ik_id)
        if (id !== -1) {
            data[id].people.push({
                name: item.fio,
                post: item.post,
                party: item.party,
            })
            delete data[id].id
        }
    })

    data.map(i => {
        for (let k in i) {
            if (typeof i[k] === 'string') {
                i[k] = i[k].replace(/^"|"$/g, '')
            } else if (typeof i[k] === 'object') {
                i[k].map(j => {
                    for (let l in j) {
                        if (typeof j[l] === 'string') {
                            j[l] = j[l].replace(/^"|"$/g, '')
                        }
                    }
                })
            }
        }
    })

    const optionDefinitions = [{
        name: 'region',
        type: String,
    }]
    const options = commandLineArgs(optionDefinitions, { partial: true })

    fs.writeFileSync(`./data/${ options.region }.json`,
        JSON.stringify(data))
}, 3000)
