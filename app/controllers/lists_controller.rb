class ListsController < ApplicationController



  def new
      @list = List.new

  end

  def create
      @list = List.create(list_params)
      redirect_to @list
  end


  private
  def list_params
    params.require(:list).permit(:title)
  end
end
