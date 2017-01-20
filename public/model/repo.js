'use strict';

(function(module) {
  const projects = {};
  projects.all = [];
  projects.requestProjects = function(callback) {
    $.get(`/github/user/repos?per_page=5&sort=updated`)
    .then(data => projects.all = data, err => console.error(err))
    .then(callback);
  };
  projects.with = attr => projects.all.filter(project => project[attr]);
  module.projects = projects;
})(window);
