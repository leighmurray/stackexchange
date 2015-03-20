'use strict';

/**
 * Required modules.
 */
var query = require('../query')
    , post = require('../post')
    , Logger = require('devnull')
    , log = new Logger({ timestamp: false });


/**
 * Gets all the posts on the site or returns the posts identified in [ids].
 *
 * @param {Object} criteria
 * @param {Function} callback return results
 * @param {Array} ids collection of IDs
 * @api public
 */
function posts (criteria, callback, ids) {
    ids = ids || [];
    query('posts/' + ids.join(';'), criteria, callback);
}


// Expose commands.
module.exports.posts = posts;
