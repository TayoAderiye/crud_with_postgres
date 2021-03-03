const express = require('express')
const {sequelize, User} = require('../models')


// @desc     Create a User
// @route    POST /api/v1/crud
// @access   Public

exports.createUsers =  async (req, res, next) => {
    try {

        const user = await User.create(req.body)

        return res.status(201).json({
            success:true,
            data: user
        })
    } catch (error) {
        return res.status(500).json({error: error.message})

    }

}



// @desc     Get all User
// @route    Get /api/v1/crud
// @access   Public

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll()
        return res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

// @desc     Get a single User
// @route    Get /api/v1/crud/:id
// @access   Public

exports.getUser = async (req, res, next) => {
    try {

        const user = await User.findOne({
            where: {id: req.params.id}
        })
        if (user){
            return res.status(200).json({
                success: true,
                data: user
            })
        }
        return res
            .status(404)
            .send(`User with ${req.params.id} doesn't exist`)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}


// @desc     Update a single User
// @route    PUT /api/v1/crud/:id
// @access   Public
exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.update(req.body, {
            where:{id: req.params.id}
        })
        if (user){
            const updatedUser = await User.findOne({where: { id:req.params.id }})
            return res.status(200).json({
                success: true,
                data: updatedUser })
        }
         return res
        .status(404)
        .send(`User with ${req.params.id} doesn't exist`)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.destroy({
            where: {
            id: req.params.id
        }})
        if (user){
            return res.status(201).json({
                success: true,
                data: {}
            })
        }
        return res
        .status(404)
        .send(`User with ${req.params.id} doesn't exist`)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}