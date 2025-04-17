# Phase 1: Backend Setup (Django + DRF)

- [x] Install Python & Django
- [x] Create Django Project and App (`todo_app`)
- [x] Connect to PostgreSQL
- [x] Create Model (`ToDo` model)
- [x] Set up Django Admin
- [x] Build REST API (List, Create, Update, Delete)
- [x] Test using Postman

---

### Step-by-Step

1. **Install Necessary Packages**
   - Install Python, Django, Django Rest Framework, etc., as listed in your requirements.
   - Ensure all packages are installed in the virtual environment, while PostgreSQL should be installed in the system environment.

2. **Connect PostgreSQL with Django**
   - Modify the `settings.py` file to configure the database connection.
   - Example:
     ![Database Connection](https://github.com/user-attachments/assets/e7ed1584-1a96-4d7c-9253-d4fdcccbd0a0)

3. **Troubleshoot PostgreSQL Connection**
   - If your `todo_user_kamli` does not have permission to modify the public schema, follow these steps:
     ```sql
     -- Connect to your DB
     sudo -u postgres psql

     \c todo_db

     -- Give ownership of the schema
     ALTER SCHEMA public OWNER TO todo_user;

     -- Give full privileges
     GRANT ALL PRIVILEGES ON SCHEMA public TO todo_user;
     ```
   - After this, your PostgreSQL connection should be successful.
     ![Successful Connection](https://github.com/user-attachments/assets/9758a696-7d3d-4de2-8d96-267f8b3029eb)

4. **Create Models**
   - Define your models and register them in `todo/admin.py`.
   - After confirming the models, create a superuser, log in to the admin panel, and verify that the models are visible.

5. **Understand Serializers**
   - Serializers help convert models to JSON and JSON to objects. Since web browsers cannot directly understand models, serializers handle the conversion.
   - Example:
     ![Serializer Example](https://github.com/user-attachments/assets/7f7a90e1-c1fa-46a8-823b-ebd5ba14934f)

     - **Code Breakdown**:
       - Line 1: Import `serializers` from `rest_framework`.
       - Import your `Todo` model.
       - Create a `TodoSerializer` class inheriting from `ModelSerializer`, which provides conversion capabilities.
       - Inside the class, define a nested `Meta` class to specify the model and fields to serialize.

     - **Field Options**:
       - `fields = '__all__'`: Serialize all fields in the model.
       - `fields = ['id', 'title']`: Serialize specific fields.
       - `exclude = ['field_name']`: Exclude certain fields.
       - `read_only_fields`: Fields that are read-only.
       - `extra_kwargs`: Additional settings for fields.

     ![Advanced Serializer Options](https://github.com/user-attachments/assets/eadeadc8-310d-42a8-bf0d-1a0684056219)

6. **Create APIs**
   - Use function-based views and the `@api_view` decorator to build the APIs.
   - After implementing the logic in `views.py`, configure the URLs in `urls.py`.

   - Example of `views.py`:
     ![Views Example](https://github.com/user-attachments/assets/c96a1e84-3ef8-44df-82d5-d6250610bb38)

   - Example of `urls.py`:
     ![URLs Example](https://github.com/user-attachments/assets/aff5b962-e86d-4658-b91c-174be13cbc9c)

---

With this setup, you’ve successfully completed the backend setup for your Django + DRF-based To-Do application!
