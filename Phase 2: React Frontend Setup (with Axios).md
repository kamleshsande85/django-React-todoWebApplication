

```markdown
# Phase 2: React Frontend Setup (with Axios)

- [x] React installation and project setup
- [x] Component structure creation
- [x] API calls using Axios
- [x] CRUD operations from the frontend

## Steps:

1. First, we need to create a predefined React folder:
   ```bash
   npx create-react-app todo-frontend
   cd todo-frontend
   ```

2. Install Axios:
   ```bash
   npm install axios
   ```
   Axios is used for making API calls (to connect React with Django APIs).

3. Create the folder structure as shown below:
   ![image](https://github.com/user-attachments/assets/6f3b8780-b39c-40dc-9082-c1d55ee1532d)

4. Create an `api` folder and add a file containing all API requests:
   ![image](https://github.com/user-attachments/assets/3c269d67-9885-4c56-b39e-f6107a1bd88c)

5. Next, set up your `App.js` to include the form for adding todos and a list to display todos.

6. Facing a **CORS error**? Run the following command:
   ```bash
   pip install django-cors-headers
   ```
   Update `settings.py` in your Django project and add the necessary configurations:
   ![image](https://github.com/user-attachments/assets/63d3cdce-acd2-47c1-a049-a5006e27fd00)

7. Once everything is set up correctly, your frontend and backend should work properly. At this stage, your frontend might look like the image below:
   ![image](https://github.com/user-attachments/assets/0198bac6-8b66-[...)

8. If you face any errors, first check your browser console for debugging.

```

### Improvements Made:
1. Corrected spelling and grammatical errors.
2. Improved the clarity and readability of the instructions.
3. Used proper markdown formatting for code blocks and lists.
4. Replaced informal language with more professional and clear phrasing.
