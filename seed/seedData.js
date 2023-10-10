const db = require('../db')
const { Affiliation, Villain, Hero } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const affiliation1 = await new Affiliation ({
        team: "DC",
        good: true
    })
    affiliation1.save()
    if(affiliation1.save) {console.log('Done1')}

    const affiliation2 = await new Affiliation ({
        team: "Marvel",
        good: true
    })
    affiliation2.save()
    if(affiliation2.save) {console.log('Done2')}

    const affiliation3 = await new Affiliation ({
        team: "Serpent Society",
        good: false
    })
    affiliation3.save()
    if(affiliation3.save) {console.log('Done3')}



    const villain1 = await new Villain ({
        known_as: "Bushmaster",
        full_name: "John McIver",
        height: 20,
        weight: 300,
        good: false,
        affiliation: affiliation3._id,
        img: "https://upload.wikimedia.org/wikipedia/en/d/d5/Bushmaster_Avengers_vs_XMen.jpg",


    })
    villain1.save()
    if(villain1.save) {console.log('Done4')}

    const hero1 = await new Hero ({
        known_as: "Captain America",
        full_name: "Steve Rogers",
        height: 6.2,
        weight: 200,
        good: true,
        affiliation: affiliation2._id,
        villain: villain1._id,
        img: "https://en.wikipedia.org/wiki/Captain_America#/media/File:CaptainAmericaHughes.jpg",


    })
    hero1.save()
    if(hero1.save) {console.log('Done5')}

}

const run = async () => {
    await main()
    db.close()
  }
  
  run()