const { Affiliation }  = require('../models');

const getAllAffiliations = async (req, res) => {
    try {
        const affiliations = await Affiliation.find()
        res.json(affiliations)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneAffiliation(req, res) {
    try {
        const id = req.params.id
        const affiliation = await Affiliation.findById(id)
        if (affiliation) {
            return res.json(affiliation)
        }
        return res.status(404).send('Affiliation with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createAffiliation(req,res) {
    try {
        const affiliation = await new Affiliation (req.body)
        await affiliation.save()
        return res.status(201).json({
            affiliation
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateAffiliation(req,res) {
    try {
        const id = req.params.id
        const affiliation = await Affiliation.findByIdAndUpdate(id, req.body, {new: true})
        if (affiliation) {
            return res.status(200).json(affiliation)
        }
        throw new Error('Affiliation not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteAffiliation(req,res) {
    try {
        const id = req.params.id
        const affiliation =  await Affiliation.findByIdAndDelete(id)
        if (affiliation) {
            return res.status(200).json(affiliation)
        }
        throw new Error('Affiliation not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllAffiliations,
    getOneAffiliation,
    createAffiliation,
    updateAffiliation,
    deleteAffiliation
}