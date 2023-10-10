const { Hero }  = require('../models');

const getAllHeros = async (req, res) => {
    try {
        const heros = await Hero.find()
        res.json(heros)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneHero(req, res) {
    try {
        const id = req.params.id
        const hero = await Hero.findById(id)
        if (hero) {
            return res.json(hero)
        }
        return res.status(404).send('hero with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createHero(req,res) {
    try {
        const hero = await new Hero (req.body)
        await hero.save()
        return res.status(201).json({
            hero
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateHero(req,res) {
    try {
        const id = req.params.id
        const hero = await Hero.findByIdAndUpdate(id, req.body, {new: true})
        if (hero) {
            return res.status(200).json(hero)
        }
        throw new Error('hero not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteHero(req,res) {
    try {
        const id = req.params.id
        const hero =  await Hero.findByIdAndDelete(id)
        if (hero) {
            return res.status(200).json(hero)
        }
        throw new Error('hero not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

module.exports = {
    getAllHeros,
    getOneHero,
    createHero,
    updateHero,
    deleteHero
}
