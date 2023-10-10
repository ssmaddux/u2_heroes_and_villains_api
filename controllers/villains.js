const { Villain }  = require('../models');

const getAllVillains = async (req, res) => {
    try {
        const villains = await Villain.find()
        res.json(villains)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneVillain(req, res) {
    try {
        const id = req.params.id
        const villain = await Villain.findById(id)
        if (villain) {
            return res.json(villain)
        }
        return res.status(404).send('villain with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createVillain(req,res) {
    try {
        const villain = await new Villain (req.body)
        await villain.save()
        return res.status(201).json({
            villain
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateVillain(req,res) {
    try {
        const id = req.params.id
        const villain = await Villain.findByIdAndUpdate(id, req.body, {new: true})
        if (villain) {
            return res.status(200).json(villain)
        }
        throw new Error('villain not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteVillain(req,res) {
    try {
        const id = req.params.id
        const villain =  await Villain.findByIdAndDelete(id)
        if (villain) {
            return res.status(200).json(villain)
        }
        throw new Error('villain not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}    

module.exports = {
    getAllVillains,
    getOneVillain,
    createVillain,
    updateVillain,
    deleteVillain
}
