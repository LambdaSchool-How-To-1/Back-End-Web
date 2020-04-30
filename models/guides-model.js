const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('guides');
}

function findById(id) {
    return db('guides')
    .where({ id })
    .first();
}

function add(post) {
    return db('guides')
    .insert(post, 'id')
    .then(ids => {
        return findById(ids[0]);
    });
}

function update(id, changes) {
    return db('guides')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('guides')
    .where({ id })
    .del();
}


