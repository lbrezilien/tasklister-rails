// Initialize

$(function() { // on document ready
  $('.new_task').hide();
  listController = new ListsController();
  listController.init();
  tasksController = new TasksController();
  tasksController.init();

});
