/*!
 * speedt-redis
 * Copyright(c) 2017 speedt <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

const logger = require('log4js').getLogger('speedt-redis');

const redis = require('redis');

module.exports = function(opts){
  return new Method(opts);
}

var Method = function(opts){
  var client = redis.createClient(opts || {});

  client.on('error', err => {
    logger.error(err);
  });

  return client;
};

var pro = Method.prototype;
