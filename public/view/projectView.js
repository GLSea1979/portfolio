'use strict'

(function(module) {
  const projectView = {};

  const piii = function() {
    let $project = $('project');
    $project.find('ul').empty();
    $project.show().siblings().hide();
  };
  const render = Handlebars.compile($('#project-template').text());

  projectView.index = function() {
    piii();
    $('#project ul').append(projects.with('name').map(render));
  };
  module.projectView = projectView;
})(window);
