# Public API for Topic-Based Learning Paths

This is a public API designed to provide structured learning paths based on different topics. It helps users explore various resources categorized by subjects, levels, and platforms.

## Features
- Provides structured learning paths for topics such as **Algorithms, Data Structures, and Web Development, and more!**
- Categorizes resources by **beginner, intermediate, and advanced levels**.
- Supports multiple platforms, including **MIT Press, Coursera, Udacity, edX, and Khan Academy**.
- Includes metadata like **topics covered, duration, and price**.
- Implements **CORS** for cross-origin requests.
- Includes **rate limiting** to prevent abuse.

## Technologies Used
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for building APIs
- **CORS**: Middleware for handling cross-origin requests
- **Express-Rate-Limit**: Middleware for limiting repeated requests
- **TypeScript**: Strongly typed JavaScript
- **JSON**: Data structure format

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/public-api-learning-paths.git
   ```
2. Navigate to the project directory:
   ```sh
   cd public-api-learning-paths
   ```
3. Install dependencies using `pnpm`:
   ```sh
   pnpm install
   ```
4. Start the server:
   ```sh
   pnpm start
   ```

## API Endpoints
### Get All Topics
```http
GET /api/topics
```
_Response:_ Returns a list of all available topics.

### Get a Specific Topic by Name
```http
GET /api/topics/:name
```
_Response:_ Returns topic details including available resources.

### Example Response
```json
{
  "topics": [
    {
      "name": "Algorithms",
      "category": "Computer Science",
      "levels": {
        "beginner": [
          {
            "id": "algorithms-mitpress-001",
            "title": "Introduction to Algorithms, third edition",
            "type": "Book",
            "platform": "MIT Press",
            "description": "Introduction to Algorithms uniquely combines rigor and comprehensiveness...",
            "link": "https://mitpress.mit.edu/books/introduction-algorithms-third-edition",
            "topics-covered": [
              "Algorithms", "Data Structures", "Sorting", "Searching"
            ],
            "duration": "1 year",
            "price": "Free"
          }
        ]
      }
    }
  ]
}
```

## Contributing
We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a Pull Request.

## License
This project is open-source and available under the [MIT License](LICENSE).

Thank you!
