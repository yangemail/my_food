'use strict';

module.exports = exports = function lastModifiedPlugin(schema, options) {
    schema.add({lastModified: Date});

    schema.pre('save', function (next) {
        this.lastModified = new Date();
        next();
    });

    if (options && options.index) {
        schema.path('lastModified').index(options.index);
        // this.update({}, {$set: {updatedAt: new Date()}});
    }
};