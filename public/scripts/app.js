// 'use strict'
var projects = [];
var key = 0;

function Project (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
}

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

projectSource.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(ourNewProjectObject){
  $('#projects').append(ourNewProjectObject.toHtml());
});
