# react-cli-jup 🦥

**react-cli-jup** is a command-line tool designed to streamline the creation of React projects using Vite. This tool simplifies the setup process, making it easier to get started with modern React development.

## Features

- Initializes a new React app using Vite.
- Supports JavaScript and TypeScript templates.
- Provides a simple and intuitive CLI for project creation.

## Installation

To use `react-cli-jup` locally during development:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-cli-jup
   ```

2. Link the CLI locally:
   ```bash
   npm link
   ```

   This will make the `react-cli-jup` command available globally on your system.

---

## Usage

Run the following command to create a new React project:

```bash
react-cli-jup --name <project-name> [--typescript]
```

### Options

- `--name`: Specifies the name of the project (default: `my-app`).
- `--typescript`: Sets up the project with TypeScript (default: JavaScript).

### Example

To create a new React app named `awesome-app` with TypeScript:

```bash
react-cli-jup --name awesome-app --typescript
```

---

## Development

### Current Status

The tool currently supports:
- Initializing React apps with Vite.
- Basic support for JavaScript and TypeScript templates.

### Roadmap

1. Add ESLint configuration setup.
2. Add Prettier configuration setup.
3. Integrate Cypress for end-to-end testing.

---

## Testing

The project includes unit tests to ensure reliable functionality. To run tests:

1. Install development dependencies:
   ```bash
   npm install
   ```

2. Run the tests:
   ```bash
   npm test
   ```

---

## Contributing

Contributions are welcome! If you’d like to contribute:
1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.