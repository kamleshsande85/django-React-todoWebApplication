# Phase 1: Backend Setup (Django + DRF)

- [x] Python & Django Install karna

- [x] Django Project aur App banana (todo_app)

- [x] PostgreSQL se connect karna

- [x] Model banana (ToDo model)

- [x] Django Admin setup

- [] REST API banana (List, Create, Update, Delete)

- [] Testing with Postman



1. first we install the necesarry packages like python, django , djnagofraemework , and etc according to the list
2. after installing all the packeges make sure aall the packeges install in the virtual environment and the postgreysql only in the system environmenet
3. connect postgrey +  djnago and modify the setting.py
4. ![image](https://github.com/user-attachments/assets/e7ed1584-1a96-4d7c-9253-d4fdcccbd0a0)
5. my todo_user_kamli has no permision to modify the public schema if you get this type of erro then follow this steps
6. ``` -- Connect to your DB
    sudo -u postgres psql
    
    \c todo_db

    -- Give ownership of the schema
    ALTER SCHEMA public OWNER TO todo_user;

    -- Give full privileges
    GRANT ALL PRIVILEGES ON SCHEMA public TO todo_user;
   ```

8.  we successfully connect the postgreySql
9. ![image](https://github.com/user-attachments/assets/9758a696-7d3d-4de2-8d96-267f8b3029eb)
10. after this all now the time is to create models and register those model into todo/admin.py
11. and after confirming the models make superuser and login into admin panel and chek your model is visible or not if ebery thins look perfect go with next step api creation
12. after this let's know a little aboute what is serializer so furture we can understand how and why we use it
13. - serializer help us to convert models to JSON and JSON to Object the web broweser directally not undestant model we need to convert this into JSON so here serializer help to convert vice versa
    - lets understand this serializer code
    - ![image](https://github.com/user-attachments/assets/7f7a90e1-c1fa-46a8-823b-ebd5ba14934f)
      - line number 1 we import the serializer from rest_fraemework
      - and then we import aur model Todo make sure the spelling always
      - and then we craete a TodoSerializer class that inharite ModelSerializer this give us ability to perform convertion operation
      - and unside this claass we make another class name Meta this class will take all the models for convertion and a fileds variable we declare that contain the filed names
      - remeber we have diffrent types of field generator
        - __all__ this is a magic string tha get all the fields of model
        - and if you want to get any specific fields that you can do this also like this **fileds = ['id' , 'title']**
        - and suppose you want to exclude some fields than you can use **exclude = [fileds names ]**
        - we have read_only_fields this that allow us only read purpose you can explore more abote this i just mention here
        - extra_kwargs
        - ![image](https://github.com/user-attachments/assets/eadeadc8-310d-42a8-bf0d-1a0684056219)
14. now we can start aur api creation part
15. we use here funtion based apis and using **@api_vie**` decotor
16. and after making the views and writing alll the logic now time make urls, so you need to make a urls.py in the app folder and then define their multiple paths according your use in my case
17. ```
    from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Todo
from .serializers import TodoSerializer

@api_view(['GET','POST'])
def todo_list(request):
    if request.method == 'GET':
        todos = Todo.objects.all().order_by('-created_at')
        serializer = TodoSerializer(todos,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    
    
@api_view(['PUT','DELETE',])
def todo_details(request,pk):
    try:
        todo = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method =='GET':
        serializer =  TodoSerializer(todo)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = serializer(todo , data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method=="DELETE":
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
        
        
```
```
from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.todo_list,name='todo_list'),
    path('todos/<int:pk>',views.todo_details,name='todo_details'),
]
```

            


