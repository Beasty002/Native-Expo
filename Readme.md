# 🚀 React Native with Expo – Learning Journey

<div align="center">

\*This repository documents my personal journey of learning **React Native with Expo\***

</div>

---

## 📚 Overview

This repository documents my personal journey of learning **React Native with Expo**. I am recording each step, explanation, and example to make it a helpful reference for myself and others.

---

## 🛠️ Getting Started

### Creating a New Project

I started by creating a new project using the **Expo blank template**, which gives a clean starting point with minimal setup. The project can be created using:

```bash
npx create-expo-app myApp --template blank
cd myApp
npx expo start
```

> 💡 **Note**: This launches the Expo development server, and the app can be run on a physical device using the Expo Go app or on an emulator. The blank template helps focus on learning React Native without extra boilerplate.

---

## 🧭 Setting Up Expo Router

### Understanding Entry Points

In a standard React Native project, the **entry point** is `index.js`, where the app starts execution. With Expo Router, we can customize the entry point for file-based routing.

### Installation & Setup

To set it up, we install Expo Router along with dependencies:

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens
```

### Configuration Steps

1. **Update package.json**: The entry point of the project is `index.js` by default but we can remove it to use expo routing. Update your `package.json`:

```json
{
  "main": "expo-router/entry"
}
```

2. **Create App Structure**: After that, we create an `app/` folder and inside it create `index.jsx`, which becomes the home screen of the app.

> ✅ **Benefits**: This setup allows navigation and screen organization similar to web frameworks, making it easier to manage multiple screens.

---

## 🏗️ Core Components

React Native uses functional components, like React, and the most common components are **View**, **Text**, and **Image**.

### 📦 View Component

- Acts like a `div` and is used as a container for other components
- Components can be nested inside a View
- React Native uses **flexbox by default** to manage layouts

### 📝 Text Component

- Used to display text content
- Supports various styling options

### 🖼️ Image Component

**Image** displays images from a URL or local file. For example, an image from a URL can be displayed with:

```jsx
<Image
  source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
  style={{ width: 50, height: 50 }}
/>
```

---

## 🎨 Styling in React Native

Styling in React Native is done using **JavaScript objects**, usually defined with `StyleSheet.create()`. Styles are applied via the `style` prop.

### Basic Container Styling

For example, a container can take up the full screen and center its content both vertically and horizontally:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
  },
});
```

### Different Styling Methods

#### 1. Inline Styles

```jsx
<Text style={{ fontSize: 20, color: "green" }}>Hello</Text>
```

#### 2. External Styles

```jsx
<Text style={styles.container}>Hello</Text>
```

#### 3. Combining Multiple Styles

```jsx
<Text style={[styles.text, { color: "red" }]}>Combined Styles</Text>
```

---

## 🎯 Complete Example

Here's a practical example bringing together all the concepts:

```jsx
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header with Logo */}
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to React Native!</Text>

      {/* Subtitle with combined styles */}
      <Text style={[styles.text, { color: "green", marginBottom: 20 }]}>
        Learning with Expo 🚀
      </Text>

      {/* Interactive Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Inline styled text */}
      <Text style={{ fontSize: 16, color: "gray", marginTop: 20 }}>
        Built with ❤️ using React Native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
```

---

## 🚀 Running the Project

### Development Server

```bash
npx expo start
```

### Testing Options

- 📱 **Physical Device**: Use Expo Go app
- 💻 **iOS Simulator**: Available on macOS
- 🤖 **Android Emulator**: Available on all platforms

---

## 📚 Key Learnings

From this setup, I learned how to:

### ✅ Project Setup

- Create a project with Expo
- Understand the default entry point and how to configure Expo Router

### ✅ Core Concepts

- Use the basic building blocks (View, Text, Image)
- Apply styles in React Native using StyleSheet.create()
- Combine multiple styling approaches

### ✅ Development Flow

- The structure and flow are very similar to React web development, which makes transitioning easier
- Small example snippets help illustrate usage without overwhelming with full code files

---

## 🔮 What's Next

This README will continue to grow as I learn more about:

- 🧭 **Navigation** - Advanced routing and navigation patterns
- 🔄 **State Management** - Context API, Redux, or Zustand
- 🌐 **API Integration** - Fetching data and handling responses
- 📱 **Native Features** - Camera, GPS, push notifications
- 🎨 **Advanced UI** - Animations, gestures, and custom components
- 🧪 **Testing** - Unit tests and integration testing
- 📦 **Deployment** - Building and publishing apps

---

## 📖 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://expo.github.io/router/docs)

---

<div align="center">

**Happy Learning! 🎉**

_Feel free to star ⭐ this repository if you find it helpful!_

</div>
