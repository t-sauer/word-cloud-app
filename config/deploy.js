/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.rootURL = '/word-cloud-app';
  }
  return ENV;
};
