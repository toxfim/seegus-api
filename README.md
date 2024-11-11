# Blog API Routes

## API Endpoints

### 1. **User Authentication**

#### POST `/api/auth/register`

- **Description**: Registers a new user.
- **Request body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `200 OK`: Success message and JWT token.
  - `400 Bad Request`: Validation errors.

#### POST `/api/auth/login`

- **Description**: Logs in a user and returns a JWT token.
- **Request body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `200 OK`: JWT token.
  - `401 Unauthorized`: Invalid credentials.

### 2. **Blog Posts**

#### GET `/api/posts`

- **Description**: Retrieves all blog posts.
- **Response**:
  - `200 OK`: List of blog posts.

#### POST `/api/posts`

- **Description**: Creates a new blog post (authentication required).
- **Request body**:
  ```json
  {
    "title": "string",
    "content": "string"
  }
  ```
- **Response**:
  - `201 Created`: The new blog post.
  - `401 Unauthorized`: Not authenticated.

#### GET `/api/posts/:id`

- **Description**: Retrieves a single blog post by its ID.
- **Response**:
  - `200 OK`: The requested blog post.
  - `404 Not Found`: Post not found.

#### PUT `/api/posts/:id`

- **Description**: Updates an existing post (authentication required).
- **Request body**:
  ```json
  {
    "title": "string",
    "content": "string"
  }
  ```
- **Response**:
  - `200 OK`: Updated blog post.
  - `401 Unauthorized`: Not authenticated.
  - `404 Not Found`: Post not found.

#### DELETE `/api/posts/:id`

- **Description**: Deletes a blog post by its ID (authentication required).
- **Response**:
  - `200 OK`: Success message.
  - `401 Unauthorized`: Not authenticated.
  - `404 Not Found`: Post not found.

### 3. **Comments**

#### POST `/api/posts/:postId/comments`

- **Description**: Adds a comment to a post (authentication required).
- **Request body**:
  ```json
  {
    "comment": "string"
  }
  ```
- **Response**:
  - `201 Created`: New comment.
  - `401 Unauthorized`: Not authenticated.
  - `404 Not Found`: Post not found.

#### GET `/api/posts/:postId/comments`

- **Description**: Retrieves all comments for a post.
- **Response**:
  - `200 OK`: List of comments.
  - `404 Not Found`: Post not found.
