var projectArray = [];

function Project(options) {
  this.title = options.title;
  this.category = options.category;
  this.cfClass = options.cfClass;
  this.projectUrl = options.projectUrl;
  this.collaborators = options.collaborators;
  this.description = options.description;
}
Project.prototype.toHtml = function() {
  var $newProject = $('article.projecttemplate').clone().removeClass('projecttemplate');
  $newProject.attr('data-category', this.category);
  $newProject.find('h1:first').text(this.title);
}
