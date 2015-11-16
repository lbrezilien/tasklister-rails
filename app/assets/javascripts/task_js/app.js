// Initialize

$(function() { // on document ready
  $('#add_task').hide()
  listController = new ListsController();
  listController.init();
  tasksController = new TasksController();
  tasksController.init();

  // $('form#new_todo').on('ajax:success', function(e, data, status, xhr){
  //
  //     ('ul').prepend(xhr.responseText)
  //
  //
  // })


});
