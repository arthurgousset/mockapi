// Imports libraries
const express = require('express')

// Initialises express router
const router = express.Router()

// Imports functions
const { sendNotification } = require('../notify')

// POST (new notification)
router.post('/:eventId', verifyToken, async(req,res) => {
    try {
        // Extracts event ID from URL
        const eventId = req.params.eventId
    
        // Extracts notification data from request body
        const notification = req.body
    
        // Sends notification to all subscribers of the event
        await sendNotification(eventId, notification)
    
        // Sends response
        res.send('Notification sent!')
    } catch (error) {
        res.status(400).send({message:err})
    }
})

// Exports routes
module.exports = router