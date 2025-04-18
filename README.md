```markdown
# Django + React Todo Web Application

This repository demonstrates how to build a full-stack web application using **Django** (backend), **React** (frontend), and **PostgreSQL** (database). It includes essential features such as **CRUD operations** and integrates **Axios** for API calls between the frontend and backend.

## Features

- Full-stack application with Django (backend) and React (frontend).
- PostgreSQL as the database for storing todos.
- Axios for seamless API communication between frontend and backend.
- Demonstrates the use of Django REST Framework (DRF) for API creation.
- Implements CRUD (Create, Read, Update, Delete) functionality for todos.

## Technologies Used

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Axios
- **Database**: PostgreSQL
- **Other Tools**: Django CORS Headers for handling Cross-Origin Resource Sharing (CORS).

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- Python 3.x
- Node.js and npm
- PostgreSQL
- pip (Python package installer)

### Backend Setup

1. Clone the repository and navigate to the backend directory:
   ```bash
   git clone https://github.com/kamleshsande85/django-React-todoWebApplication.git
   cd django-React-todoWebApplication
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up your PostgreSQL database and update `settings.py` with your database credentials.

4. Apply migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the React frontend directory:
   ```bash
   cd todo-frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

### CORS Setup

If you encounter a CORS error, install the Django CORS Headers package:
```bash
pip install django-cors-headers
```

Update `settings.py` by adding `'corsheaders.middleware.CorsMiddleware',` to the middleware and configuring the allowed origins.

## Folder Structure

```
django-React-todoWebApplication/
│
├── backend/                # Django backend source code
├── todo-frontend/          # React frontend source code
├── requirements.txt        # Python dependencies
└── README.md               # Project documentation
```

## How It Works

1. **Backend**: Django REST Framework handles all API requests for CRUD operations.
2. **Frontend**: React provides an interactive UI for managing todos. Axios is used to make API calls to the Django backend.
3. **Database**: PostgreSQL stores all todo items persistently.

## Screenshots

### Frontend
![Frontend Screenshot]![image](https://github.com/user-attachments/assets/b1cc8fba-a39b-4760-a908-c43964829744)


## Contributing

Contributions are welcome! Please create a pull request with proper descriptions and changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Happy coding!


