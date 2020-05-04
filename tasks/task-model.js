const db = require('../data/dbConfig');

module.exports = {
    getResources,
    getByID,
    add,
    remove
}

function getResources() {
    return db('tasks')
}

function getByID(id) {
    return db('tasks').where({id}).first()
}

function add(newTask) {
    return db('tasks').insert(newTask)
}

function remove(id) {
    return db('tasks').where({ id }).del()
}