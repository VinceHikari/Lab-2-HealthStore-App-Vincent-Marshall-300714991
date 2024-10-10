import User from '../models/user.model.js'
import Supplement from '../models/supplement.model.js'
import Vincent from '../models/vincent.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'




const create = async (req, res) => { 
//create new supplement
const supplement = new Supplement(req.body) 
try {
    console.log('controller.create() handling request')
await supplement.save()
console.log('controller.create() supplement created') 
return res.status(200).json({ 
message: "Successfully created"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

//Load all supplements from collection
const list = async (req, res) => { 
try {
    console.log('controller.list() handling request')
let supplements = await Supplement.find();//.select('name email updated created') 
console.log('controller.list() loaded data from db: ' + supplements.length)
res.json(supplements)
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

//Load supplements by ID from collection
const supplementByID = async (req, res, next, id) => { 
try {
    console.log('controller.supplementByID() handling request: supplementId' + id)
let supplements = await Supplement.findById(id)
console.log('controller.supplementbyID() found supplement:' + supplements) 
if (!supplements) 
return res.status(400).json({ 
error: "Supplement not found"
})
req.profile = supplements
next()
} catch (err) {
return res.status(400).json({ 
error: "Could not retrieve supplements"
}) 

}
}

//Delete all supplements from collection
const remove = async (req, res) => { 
    try {
    let supplements = req.profile
    let deletedSupplement = await Supplement.deleteMany()
    res.json(deletedSupplement) 
    } catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err) 
    })
    } 
    }

const removeByID = async (req, res, next, id) => { 
    try {
    
    let supplements = await Supplement.deleteOne({_id: id})
   
    if (!id)
    return res.status(400).json({ 
    error: "Supplement not found"
    })
    req.profile = supplements
    next()
    } catch (err) {
    return res.status(400).json({ 
    error: "Could not delete supplements"
    }) 
    }
    }
    


const read = (req, res) => {
req.profile.hashed_password = undefined 
req.profile.salt = undefined
return res.json(req.profile) 
}

const update = async (req, res) => { 
try {
let user = req.profile
user = extend(user, req.body) 
user.updated = Date.now() 
await user.save()
user.hashed_password = undefined 
user.salt = undefined
res.json(user) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}


export default { create, supplementByID, read, list, remove, removeByID, update,}

