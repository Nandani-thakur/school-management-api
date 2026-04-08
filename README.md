#  School Management API

A Node.js + Express API to manage school data and retrieve schools based on proximity using geographical distance calculation.

---

##  Features

* Add a new school with details
* Fetch all schools sorted by distance from user location
* Uses PostgreSQL database
* Distance calculated using Haversine formula

---

##  Tech Stack

* Node.js
* Express.js
* PostgreSQL
* dotenv
* CORS

---

##  Project Structure

```
school-management-api/
│── config/
│   └── db.js
│── controllers/
│   └── schoolController.js
│── routes/
│   └── schoolRoutes.js
│── utils/
│   └── distance.js
│── app.js
│── createTable.js
│── .env
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/Nandani-thakur/school-management-api.git
cd school-management-api
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Configure environment variables

Create a `.env` file:

```
PORT=5000
DB_HOST=your-host
DB_USER=your-user
DB_PASSWORD=your-password
DB_NAME=your-database
DB_PORT=5432
```

---

##  Database Setup

Run this query in PostgreSQL:

```
CREATE TABLE schools (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

## ▶️ Run the Server

```
node app.js
```

or (if using nodemon):

```
npm run dev
```

---

##  API Endpoints

###  Add School

* **URL:** `/addSchool`
* **Method:** POST

**Request Body:**

```
{
  "name": "ABC School",
  "address": "Pune",
  "latitude": 18.5204,
  "longitude": 73.8567
}
```

**Response:**

```
{
  "message": "School added successfully",
  "schoolId": 1
}
```

---

###  List Schools (Sorted by Distance)

* **URL:** `/listSchools`
* **Method:** GET

**Query Params:**

```
latitude=18.5204
longitude=73.8567
```

**Example:**

```
GET /listSchools?latitude=18.5204&longitude=73.8567
```

**Response:**

```
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Pune",
    "latitude": 18.5204,
    "longitude": 73.8567,
    "distance": 0.5
  }
]
```

---

##  Distance Calculation

Distance is calculated using the **Haversine formula** to determine the shortest distance between two geographic coordinates.

---

##  Database Note

The original requirement specified using MySQL. However, for deployment and cloud compatibility, PostgreSQL has been used in this project.

The database schema and API functionality remain the same and fully satisfy the assignment requirements.

---

##  Deployment

The API can be deployed on platforms like:

* Railway (recommended)
* Render
<<<<<<< HEAD
=======
* AWS
>>>>>>> 1640478 (Final README updated)

---

##  Postman Collection

Include Postman collection with:

* Add School API
* List Schools API

---

##  Author

Nandani Thakur
