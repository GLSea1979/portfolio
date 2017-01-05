var projectArray = [];

function Project(options) {
  this.title = options.title;
  this.category = options.category;
  this.cfClass = options.cfClass;
  this.projectUrl = options.projectUrl;
  this.collaborators = options.collaborators;
  this.description = options.description;
}
