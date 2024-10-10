import express from 'express'
 import userCtrl from '../controllers/user.controller.js' 
 import supplementController from '../controllers/supplement.controller.js' 
 import vincentController from '../controllers/vincent.controller.js'
 const router = express.Router()
 router.route('/api/users').post(userCtrl.create)
 router.route('/api/users').get(userCtrl.list)
 router.param('userId', userCtrl.userByID)
 router.route('/api/users/:userId').get(userCtrl.read)
 router.route('/api/users/:userId').put(userCtrl.update)
 router.route('/api/users/:userId').delete(userCtrl.remove)

 //how to create new route
 
 router.route('/store/vincents/').post(vincentController.create) 
 router.route('/store/vincents/').get(vincentController.list)
 router.route('/store/supplements').get(supplementController.list) //retrieve all supplements
 router.route('/store/supplements').post(supplementController.create) //create a new supplement 
 router.route('/store/supplements').delete(supplementController.remove)//delete all supplements
 router.param('supplementId', supplementController.supplementByID) //Declare "supplementid" then assign it to the route. CRUD is important.
 router.route('/store/supplements/:supplementId').get(supplementController.read) //retrieve a supplement by id
 router.param('deleteId', supplementController.removeByID);
 router.route('/store/supplements/:deleteId').delete(supplementController.read) //delete supplements by ID
 
 export default router
