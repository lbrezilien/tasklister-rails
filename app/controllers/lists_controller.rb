class ListsController < ApplicationController

  def index
    @list = List.all
  end

  def new
    @list = List.new
  end

  def create
    raise
    @list = List.create(list_params)
    render partial: 'lists\list', locals: { list: @list }
  end

  def show
    @list = List.find(params[:id])
  end


  private
  def list_params
    params.require(:list).permit(:title)
  end
end
