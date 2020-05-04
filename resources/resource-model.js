const db = require('../data/dbConfig');

module.exports = {
    getResources,
    getByID,
    add,
    remove
}

function getResources() {
    return db('resources')
}

function getByID(id) {
    return db('resources').where({id}).first()
}

function add(newResource) {
    return db('resources').insert(newResource, 'id')
}

function remove(id) {
    return db('resources').where({ id }).del()
}