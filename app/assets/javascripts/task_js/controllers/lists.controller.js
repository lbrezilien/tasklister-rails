'use strict';
// Lists Controller

function ListsController(){

  this.$addListForm = $('#add_list')

  this.$listTitleInput = $('#list_title')

  this.$selectListMenu = $('#select_list')


  this.$addTaskForm = $('#add_task')


  this.$wrapper = $('#wrapper')


    this.init = function(){
        this.$addTaskForm.hide();

        $('.submit_button').ajaxSuccess(function(e, data, status, xhr){
          $('#new_task').show();
          debugger;
          var listTitle = $('#list_title').val();
          var newList = new List(listTitle);

          $('.destroy-list').click(function(event){
            event.preventDefault();
            $(this).parent().parent().remove();
          });
        });
    }

};
