

import Vincent from '../models/vincent.model.js'

import errorHandler from './error.controller.js'

const list = async (req, res) => { 
    try {
        console.log('controller.list() handling request')
    let vince = await Vincent.find();//.select('name email updated created') 
    console.log('controller.list() loaded data from db: ' + vince.length)
    res.json(vince)
    } catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err) 
    })
    } 
    }

const create = async (req, res) => { 

const vince = new Vincent(req.body) 
try {
   

await vince.save()

return res.status(200).json({ 
message: "Successfully created"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}




export default { create, list }

