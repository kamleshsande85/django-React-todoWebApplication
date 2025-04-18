from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.todo_list,name='todo_list'),
    path('todos/<int:pk>/',views.todo_details,name='todo_details'),
]