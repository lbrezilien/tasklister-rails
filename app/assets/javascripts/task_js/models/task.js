

'use strict';
// Task Model

function Task(description, priority, list){
  Task.id = 0;
  // debugger;
  var self = this;

  this.initialize = function(){
      this.description = description;
      this.priority = priority;
      this.list = list;
      this.id = list.tasks.length
      this.list.tasks.push(self)
      // this.liEl()
      this.build()

  }



  this.initialize()


}


Task.prototype.liEl = function(){
  // debugger;
  return '<li data-id="'+this.id+'"><button class="destroy-task">x</button> ' +this.description+', '+this.priority+'</li>';
}

Task.prototype.build = function(){
  var self = this;
  $('#list-'+self.list.id).append(self.liEl()) };
