'use strict';
// List Model


List.all = [];
List.id = List.all.length;

function List(title){

  var self = this;
  this.tasks = [];

  this.initialize = function(){
    this.title = title;
    this.id = List.all.length
    List.all.push(self)

    this.build()
  }

  this.initialize();
    // debugger;

}

List.prototype.optionEl = function(){
  return  '<option value="'+this.id+'">'+this.title+'</option>'
}

List.prototype.listEl = function() {
  return '<div class="list"><h2><button class="destroy-list">x</button> '+this.title+'</h2><ul id="list-'+this.id+'" data-id="'+this.id+'"></ul></div>'
}


List.prototype.build = function(){
  var self = this;
  $('#select_list').append(self.optionEl())
  $('#lists').append(self.listEl())
 };
