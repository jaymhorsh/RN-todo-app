# Todo List Mobile App

A  Todo List mobile application built with React Native, TypeScript, and Expo. This app provides an intuitive interface for managing tasks with authentication, customizable themes, and a clean user experience.

## Features (Implemented)
- Auth: login, logout, persistent session (SecureStore)
- Onboarding / welcome flow
- Account update (profile fields)
- Theme select (multiple palettes, stored globally)
- In‑app icon selector (UI-level variants)
- Custom bottom tab bar (active indicator)
- Pagination (infinite-ready w/ React Query)
- Settings suite: account, theme, app icon, help center
- OTA updates (EAS Update channels)
- Splash + font gating (SF Pro)
- Reusable UI primitives (buttons/cards)

## Screenshots
[Screenshots.zip](https://collection.cloudinary.com/dbkthd6ck/adda29e90f423a240b76dc559b0078cb)
### Core Functionality
- **Task Management**: Create, edit, mark complete, and delete tasks
- **User Authentication**: Secure sign-in/sign-up with JWT tokens
- **Customizable Themes**: Choose from multiple color themes (Dark, Brand, Red, Blue)
- **Task Organization**: Filter and categorize tasks by projects and dates
- **Responsive Design**: Optimized for both iOS and Android platforms

### Advanced Features
- **Infinite Scrolling**: Efficient pagination for large task lists
- **Real-time Updates**: React Query for seamless data synchronization
- **Offline Support**: AsyncStorage for local data persistence
- **Push Notifications**: Stay updated on task deadlines
- **Cross-platform**: Single codebase for iOS, Android, and Web

## 🛠️ Tech Stack

- **Framework**: React Native 0.79.5 with Expo SDK 53
- **Language**: TypeScript 5.8.3
- **State Management**: Zustand with persistence
- **Data Fetching**: TanStack React Query
- **Navigation**: Expo Router v5
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Authentication**: JWT with secure token storage
- **Build System**: EAS Build for production builds

## 📱 Screenshots


## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- EAS CLI (`npm install -g eas-cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation and Setup
```
git clone <repo>
cd todoList
npm install
npx expo start
```
Build (example):
```
eas build --profile preview --platform android
eas update --channel preview --message "Feat: new filters"
```

## 🔐 Authentication

The app includes demo user accounts for testing:

| Username | Password | Role |
|----------|----------|------|
| `emilys` | `emilyspass` | Admin |
| `michaelw` | `michaelwpass` | Admin |
| `sophiab` | `sophiabpass` | Admin |

## 🏗️ Building & Distribution

### Development Build
```bash
eas build --profile development --platform android
```

### Preview Build (for testing)
```bash
eas build --profile preview --platform android
```

### Production Build
```bash
eas build --profile production --platform android
```

## 📱 Preview Build - Test the Real App

### Get the Preview APK
To test the actual app on your device:

1. **Build the preview version**
   ```bash
   eas build --profile preview --platform android
   ```

2. **Download and install**
   - Wait for the build to complete
   - Download the APK file from the EAS build link
   - Enable "Install unknown apps" on your Android device
   - Install the APK file

### Test User Accounts
Use these credentials to explore the app:

| Username | Password | Role |
|----------|----------|------|
| `emilys` | `emilyspass` | Admin |
| `michaelw` | `michaelwpass` | Admin |
| `sophiab` | `sophiabpass` | Admin |


### 🚀 OTA Updates - Get Latest Features Instantly
Once you have the preview app installed, you can receive updates without reinstalling:

```bash
# Push updates to all preview users
eas update --channel preview --message "New features and bug fixes"
```
ect for testing** - Test new changes quickly

**Note:** OTA updates only work for JavaScript/TypeScript changes. If you add native modules or change permissions, you'll need a new build.

## 🎨 Design Choices & Architecture


## 📁 Project Structure

```
todoList/
├── app/                    # Main application screens
│   ├── (auth)/            # Authentication screens
│   ├── (tabs)/            # Main app tabs
│   └── screens/           # Additional screens
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks
├── store/                  # Zustand state stores
├── types/                  # TypeScript type definitions
├── services/               # API and external services
├── utils/                  # Helper functions
└── assets/                 # Images, fonts, and static files
```


Challenge 1: Waiting on Slow Builds
Free-tier build queues meant long waits to test updates. I batched changes, skipped unnecessary rebuilds, and used local builds to work faster.

Challenge 2: Making the App Feel the Same Everywhere
iOS and Android had quirks. I used Expo, added platform-specific tweaks, and tested until both felt consistent.

Challenge 3: Keeping Data Safe and the App Fast
Tasks had to persist and scroll smoothly. I used Zustand/ expo secure storage for storage and persistence and React Query with infinite scrolling to keep performance snappy.


## 🔄 App Flow

### User Journey
1. **Launch**: App starts with welcome/onboarding screen
2. **Authentication**: User signs in with credentials or creates new account
3. **Theme Selection**: User chooses preferred color theme
4. **Main Dashboard**: Access to home, projects, upcoming tasks, and inbox
5. **Task Management**: Create, edit, complete, and organize tasks
6. **Navigation**: Seamless movement between different app sections

### Task Completion Flow
1. User views upcoming tasks in the main dashboard
2. Selects a task to mark as complete
3. Task status updates in real-time
4. Completed tasks are filtered or moved to completed section
5. Progress is synchronized across all app instances

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Contact: [Your Contact Information]

---

**Built using React Native and Expo**
