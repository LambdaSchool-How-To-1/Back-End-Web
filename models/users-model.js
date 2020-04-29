const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findById,
    findGuides,
    update,
    remove
};

function find() {
    return db('users')
}

async function add(user) {
    const [id] = await db('users').insert(user, id);
    return findById(id);
}

function findById(id) {
    return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

function update(id, user) {
    return db('users')
    .where('id', Number(id))
    .update(user);
}

function remove(id) {
    return  db('users')
    .where('id', Number(id))
    .del();
}

function findGuides(id) {
    return db('guides as g')
    .select(
        'g.id',
        'g.description'
    )
    .join('users as u', 'u.id', 'g.id')
} 