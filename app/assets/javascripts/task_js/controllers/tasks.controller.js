'use strict';
// Tasks Controller
function TasksController(){
    self = this;
    this.$addTaskForm  = $('#add_task')
    this.$taskDescriptionInput = $('#task_description')
    this.$selectListMenu = $('#select_list')
    this.$taskPriorityInput = ('#task_priority')
    this.$wrapper = $('#wrapper')


this.init = function(){

      $('#add_task').submit(function(event){
        event.preventDefault();

        var taskList = $('#select_list').val();
        var taskDescription = $('#task_description').val();
        var taskPriority = $('#task_priority').val();
        var list = List.all[Number(taskList)];
        var newTask = new Task(taskDescription, taskPriority, list);
        $('.destroy-task').click(function(event){
                  event.preventDefault()
                  var taskId = $(this).parent().val()
                  var listId = Number($(this).parent().parent().attr('data-id'))
                  if (  List.all[listId]){
                      List.all[listId].tasks[taskId] = null
                  }

                  $(this).parent().remove();


                });



      })

}


};
