'use strict';
// Lists Controller

function ListsController(){

  this.$addListForm = $('#add_list')

  this.$listTitleInput = $('#list_title')

  this.$selectListMenu = $('#select_list')


  this.$addTaskForm = $('#add_task')


  this.$wrapper = $('#wrapper')
    // // $('#add_list [value="(+) add"]').click(function(event){
    // //   event.preventDefault()
    // //   $('#add_task').show();
    // //   var listTitle = $('#list_title').val()
    // //   var newList = new List(listTitle)
    //
    //
    //
    // })






    this.init = function(){
        this.$addTaskForm.hide()
        $('#add_list').submit(function(event){
              event.preventDefault()
              $('#add_task').show()
              var listTitle = $('#list_title').val()
              var newList = new List(listTitle)


              $('.destroy-list').click(function(event){
                        event.preventDefault()

                        $(this).parent().parent().remove();

                      });

            });





    }

};
