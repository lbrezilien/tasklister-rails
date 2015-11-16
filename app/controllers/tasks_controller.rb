class TasksController < ApplicationController


  def index
      @task = Task.all
  end

  def create
    @task = Task.create(task_params)
    render partial: 'task', locals: {task: @task}

  end

  def show
    @task = Task.find(params[:id])

  end


  private
  def task_params
    params.require(:task).permit(:description, :priority)
  end
end
