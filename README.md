This project is a boilerplate for an Expo-managed React Native application.

## Project Details

- **Name:** trihp driver
- **Version:** 0.0.1

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Available Scripts

- **Start the project:**
  ```
  npm start
  ```
- **Run on Android:**
  ```
  npm run android
  ```
- **Run on iOS:**
  ```
  npm run ios
  ```
- **Run on the web:**
  ```
  npm run web
  ```

## Dependencies Overview

The project uses a range of dependencies including:

- Expo and related tools (expo, expo-status-bar, expo-constants, expo-font, etc.)
- React Navigation for app navigation
- Async Storage and device info for persistent storage and device related information
- Additional libraries like Axios, Day.js, Zustand, and more for varied functionality

## Dev Dependencies

For development, the project leverages:

- TailwindCSS for styling
- TypeScript for type safety
- Other tools like module resolvers and SVG transformers

## Notifications & Toast

This project uses [react-native-notifier](https://github.com/MaKorLab/react-native-notifier) for in-app notifications and alerts.

Wrap your application with `NotifierWrapper` in `app/_layout.tsx` (already configured).

Use the utility functions in `utils/toast.ts`:

```ts
import { showToast, showNotification } from './utils/toast';

// Show an alert toast for success or error
showToast('success', 'Operation completed successfully');

// Show a custom notification
showNotification('New Message', 'You have a new message', {
  duration: 0, // stays until manually hidden
  showAnimationDuration: 800,
  onPress: () => console.log('Notification pressed'),
});
```

## Getting Started

After installation, you can start developing by running the appropriate script as per your target platform (Android, iOS, or web). Enjoy building your app with Hefesto!
