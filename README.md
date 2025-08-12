# Todo List Mobile App

A modern, feature-rich Todo List mobile application built with React Native, TypeScript, and Expo. This app provides an intuitive interface for managing tasks with authentication, customizable themes, and a clean user experience.

## 🚀 Features

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

> **Note**: Add your app screenshots here to showcase the UI/UX
> 
> **Recommended screenshots**:
> - Login/Welcome screen
> - Home dashboard with user profile
> - Task creation and management
> - Theme selection interface
> - Task filtering and organization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- EAS CLI (`npm install -g eas-cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd todoList
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   ```bash
   # Android
   npm run android
   
   # iOS
   npm run ios
   
   # Web
   npm run web
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

### What You Can Test
- **Authentication flow** - Sign in with demo accounts
- **Theme selection** - Choose from 4 color themes
- **Task management** - Create, edit, and complete tasks
- **Navigation** - Explore all app sections and features
- **Responsive design** - Test on different screen sizes

### Feedback & Issues
Found a bug or have suggestions? Create an issue in the GitHub repository!

### 🚀 OTA Updates - Get Latest Features Instantly
Once you have the preview app installed, you can receive updates without reinstalling:

```bash
# Push updates to all preview users
eas update --channel preview --message "New features and bug fixes"
```

**Benefits of OTA updates:**
- ⚡ **Instant updates** - No need to rebuild and reinstall
- 🔄 **Seamless experience** - Updates happen in the background
- 📱 **Always current** - Get the latest features automatically
- 🧪 **Perfect for testing** - Test new changes quickly

**Note:** OTA updates only work for JavaScript/TypeScript changes. If you add native modules or change permissions, you'll need a new build.

## 🎨 Design Choices & Architecture

### State Management
- **Zustand**: Lightweight state management with persistence
- **React Query**: Server state management with caching and synchronization
- **Secure Storage**: Expo SecureStore for sensitive data (tokens)

### Navigation Structure
- **Expo Router**: File-based routing with type safety
- **Tab Navigation**: Bottom tabs for main app sections
- **Stack Navigation**: Modal screens for authentication and task creation

### UI/UX Decisions
- **NativeWind**: Consistent styling across platforms
- **Material Icons**: Familiar iconography for better usability
- **Responsive Layouts**: Safe area handling and adaptive components
- **Theme System**: User-selectable color schemes for personalization

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
