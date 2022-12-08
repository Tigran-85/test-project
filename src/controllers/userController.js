const User = require('../models/users');
const { validationResult } = require('express-validator');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            status: 'success',
            data: users,
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error,
        });
    }
};

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(400).json({
                status: 'error',
                message: 'No such User',
            });
        }

        return res.status(200).json({
            status: 'success',
            data: user,
        });
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            message: error,
        });
    }
};

const createUser = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
    }

    try {
        const userBody = req.body;
        const user = await User.create(userBody);

        return res.status(201).json({
            status: 'success',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error,
        });
    }
};

const updateUser = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
    }

    try {
        const user = req.body;
        const id = req.params.id;

        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        if (!updatedUser) {
            res.status(400).json({
                status: 'error',
                message: error,
            });
        }
        return res.status(201).json({
            status: 'success',
            data: updatedUser,
        });
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            message: error,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(400).json({
                status: 'error',
                message: 'No such User',
            });
        }

        return res.status(200).json({
            status: 'success',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error,
        });
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
