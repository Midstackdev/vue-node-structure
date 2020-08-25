"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.show = show;
exports.remove = remove;
function index(req, res) {
    // Get all
    return res.status(200).json();
}

function create(req, res) {
    // Create a module
    return res.status(201).json();
}

function update(req, res) {
    //Update a module
    return res.status(204).json();
}

function show(req, res) {
    //Show a module
    return res.status(200).json();
}

function remove(req, res) {
    //Delete a module
    return res.status(204).json();
}