const db = require("../data/db-config");

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({id})
}

function findSteps(id) {
    return db("steps as st")
        .join("schemes", "schemes.id", "=", "st.scheme_id")
        .select("st.id", "schemes.schemes_name", "st.step_number", "st.instructions")
        .where({ scheme_id: id })
        .orderBy("st.step_number")
}

function add(schemeData) {
    return db('schemes').insert(schemeData)
            .then(idArray => {
                return db('schemes').where({ id: idArray[0] }).first();
            })
};

function update(changes, id) {
    return db('schemes').where({ id }).update(changes)
            .then(count => {
                return db('schemes').where({ id }).first();
            });
};

function remove(id) {
    return db('schemes').where({ id }).first()
            .then(schemeToRemove => {
                return db('schemes').where({ id }).del()
                        .then(count => {
                            return schemeToRemove;
                        })   
            })
            .catch(err => {
                if(!id) {
                    return null;
                } else {
                    return err;
                };
            });
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}