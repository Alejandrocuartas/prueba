const express = require('express')

const app = express()

app.use( express.json() )

const perks = [
    {
        perk: 'wifi',
        id: 1
    },
    {
        perk: 'tv',
        id: 2
    },
    {
        perk: 'netflix',
        id: 3
    }
]

const places = [
    {
        place: 'casa1',
        id: 1
    },
    {
        place: 'casa2',
        id: 2
    },
    {
        place: 'casa3',
        id: 3
    }
]


app.get('/places', (req, res)=>{
    res.status(200).json({
        places
    })
})

app.get('/perks', (req, res)=>{
    res.status(200).json({
        perks
    })
})

app.listen(3000, () => {
    console.log('listening at 3000')
})