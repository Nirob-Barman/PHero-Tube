# PHero-tube

Welcome to PHero-tube! This is a simple web application that fetches and displays programming-related videos from the [Programming Hero API](https://openapi.programming-hero.com/api/videos).

## API Endpoints

### All Categories
- [https://openapi.programming-hero.com/api/videos/categories](https://openapi.programming-hero.com/api/videos/categories) - Get all video categories.

### Videos by Category
- Format: [https://openapi.programming-hero.com/api/videos/category/${id}](https://openapi.programming-hero.com/api/videos/category/${id})
- Example: [https://openapi.programming-hero.com/api/videos/category/1000](https://openapi.programming-hero.com/api/videos/category/1000)

## Blog Questions

- **Discuss the scope of `var`, `let`, and `const`**
  - The `var` keyword has a function-level scope, while `let` and `const` have block-level scope. Variables declared with `var` are hoisted to the top of their scope, which can lead to unexpected behavior. `let` and `const` provide better control over variable scoping and are not hoisted in the same way as `var`.

- **Tell us the use cases of `null` and `undefined`**
  - `null` is often used to explicitly indicate the absence of any object value. It is a deliberate assignment of a non-value. On the other hand, `undefined` represents an uninitialized or undefined value. It is the default value assigned to variables that are not explicitly initialized. Both are used to represent the absence or lack of a meaningful value.

- **What do you mean by REST API?**
  - REST API (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources, and data is transferred over HTTP in a stateless manner. RESTful APIs are designed around the principles of simplicity, scalability, and statelessness, making them suitable for building distributed systems.

## Project Structure

- `index.html`: HTML file containing the structure of the web application.
- `index.css`: CSS file for styling the web application.
- `index.js`: JavaScript file containing logic for fetching and displaying video categories and related content.

## Technologies Used

- [Bootstrap](https://getbootstrap.com/): Front-end framework for building responsive and visually appealing web pages.
- [Font Awesome](https://fontawesome.com/): Icon library for adding icons to the application.

## Getting Started

1. Clone the repository: `git clone https://github.com/Nirob-Barman/PHero-tube.git`
2. Navigate to the project directory: `cd PHero-tube`
3. Open `index.html` in your preferred browser.

## Usage

- Visit the home page at [http://localhost:your-port/](http://localhost:your-port/)
- Explore video categories and content.
- Check out the blog by clicking on the "Blog" button.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
