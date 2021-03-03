const express = require('express');
const { getUsers,
        createUsers,
        getUser,
        updateUser,
        deleteUser } = require('../controllers/user')




const router = express.Router()


router.route('/').get(getUsers).post(createUsers)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

// router.route('/:id').get(getBootcamp).put(protect, authorize('publisher', 'admin'), updateBootcamp).delete(protect, authorize('publisher', 'admin'), deleteBootcamp)

module.exports = router