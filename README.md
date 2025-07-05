# React Dynamic Form

A reusable and dynamic form system built with React and Vite, featuring custom form validation, styled components, and modern React hooks.

[Click Here](https://saikatcodec.github.io/react-dynamic-form/) to see the pages.

## 🚀 Features

- **Dynamic Form Creation**: Build forms dynamically with custom validation rules
- **Reusable Components**: Modular UI components for consistent form styling
- **Custom Form Hook**: `useForm` hook for managing form state, validation, and events
- **Real-time Validation**: Form validation with error handling and user feedback
- **Styled Components**: Modern styling with styled-components library
- **TypeScript Ready**: Built with TypeScript support for better development experience

## 📦 Technologies Used

- **React 19**: Latest React features and hooks
- **Vite**: Fast build tool and development server
- **Styled Components**: CSS-in-JS styling solution
- **ESLint**: Code linting and formatting
- **PropTypes**: Runtime type checking for React props

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/saikatcodec/react-dynamic-form
   cd react-dynamic-form
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 📋 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
react-form/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── shared/
│   │   │   └── UserForm.jsx     # Main form component
│   │   └── UI/
│   │       ├── Button.jsx       # Reusable button component
│   │       └── InputField.jsx   # Reusable input field component
│   ├── hooks/
│   │   └── useForm.js          # Custom form management hook
│   ├── utils/
│   │   └── relateObject.js     # Utility functions for state management
│   ├── App.jsx                 # Main application component
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🔧 Usage

### Basic Form Implementation

The project includes a complete example of how to create a dynamic form:

```jsx
import UserForm from "./components/shared/UserForm";

const App = () => {
  return (
    <div>
      <h2>Reusable Dynamic Form</h2>
      <UserForm />
    </div>
  );
};
```

### Custom Form Hook

The `useForm` hook provides comprehensive form management:

```javascript
const { state, handleChange, handleSubmit, handleFocus, handleBlur } = useForm({
  init: initialValues,
  validate: validationFunction,
});
```

### Form Validation

Define custom validation rules:

```javascript
const validate = (values) => {
  const errors = {};
  // Add your validation logic here
  return { errors, hasError: boolean };
};
```

## 🎯 Key Components

### InputField Component

- Handles input rendering with labels
- Displays validation errors
- Supports various input types (text, password, email, etc.)

### Button Component

- Styled submit button
- Consistent styling across the application

### UserForm Component

- Complete form implementation example
- Demonstrates form state management
- Shows validation in action

## 🔍 Form Features

- **State Management**: Tracks field values, errors, focus, and touch states
- **Validation**: Real-time validation with custom rules
- **Error Handling**: User-friendly error messages
- **Event Handling**: Comprehensive form event management
- **Accessibility**: Focus and blur state management for better UX

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🛟 Support

If you have any questions or issues, please feel free to:

- Open an issue on GitHub
- Contact the development team
- Check the documentation for more details

---

**Built with ❤️ using React and Vite**
