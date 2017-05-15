var mongoose = require('mongoose');

// define the schema for our user model
var roleSchema = mongoose.Schema({

    links: {
        dashboard: String
    },

    role: String

});

module.exports = mongoose.model('Role', roleSchema);
