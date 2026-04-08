#  School Management API

A Node.js + Express API to manage school data and retrieve schools based on proximity using geographical distance calculation.

---

##  Features

* Add a new school with details
* Fetch all schools sorted by distance from user location
* Uses MySQL database
* Distance calculated using Haversine formula

---

##  Tech Stack

* Node.js
* Express.js
* MySQL
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
│── .env
```

---

##  Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/Nandani-thakur/school-management-api.git
cd school-management-api
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=School_db
```

---

##  Database Setup

Run these queries in MySQL:

```
CREATE DATABASE School_db;

USE School_db;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

##  Run the Server

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
    "distance": 0.5
  }
]
```

---

##  Distance Calculation

Distance is calculated using the **Haversine formula** to determine the shortest distance between two geographic coordinates.

---

##  Deployment

The API can be deployed on platforms like:

* Render

---

##  Postman Collection

Include Postman collection with:

* Add School API
* List Schools API

---

##  Author

Nandani Thakur

---
