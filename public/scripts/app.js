// 'use strict'
var projects = [];
var key = 0;
const projectView = {};

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


// the handle nav hides projects when clicked. want it to start hidden than reveal selected project?
projectView.handleNav = function() {
  console.log('hi');
  $('.main-nav').on('click', '.tab', function() {
    console.log('you clicked?');
    $('.project-content').hide();
    $(`${$(this).data('content')}`).fadeIn();
  });
  $('main-nav .tab:first').click();
};




projectView.handleNav();
