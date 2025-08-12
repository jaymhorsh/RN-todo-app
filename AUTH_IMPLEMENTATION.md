# Authentication Implementation Guide

## Overview
This app implements a comprehensive authentication flow using:
- **Zustand** for state management
- **React Query** for API calls and caching
- **DummyJSON API** for authentication endpoints
- **Secure Storage** for token persistence

## Architecture

### 1. Types (`types/auth.ts`)
- `LoginRequest` - Login credentials
- `LoginResponse` - Server response with user data and tokens
- `UserProfile` - User information structure
- `AuthState` & `AuthActions` - Zustand store types

### 2. Store (`store/authStore.ts`)
- Manages authentication state (user, tokens, loading)
- Handles token storage in secure storage
- Provides actions: `setAuth`, `logout`, `setLoading`

### 3. API Queries (`queries/auth.ts`)
- `login()` - Authenticate user with DummyJSON
- `getCurrentUser()` - Fetch current user profile
- `refreshAuth()` - Refresh access token

### 4. Hooks (`hooks/auth/useAuth.ts`)
- `useLogin()` - Login mutation hook
- `useCurrentUser()` - Current user query hook
- `useAuth()` - Main auth state hook with routing
- `useLogout()` - Logout functionality

### 5. Services (`services/axios.ts`)
- Configured axios instances for different APIs
- Automatic token injection in headers
- Error handling and interceptors

## Usage

### Login Flow
```tsx
import { useLogin } from '@/hooks/auth/useAuth';

const { mutate: loginMutation, isPending } = useLogin();

const handleLogin = () => {
  loginMutation({
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 60
  });
};
```

### Authentication Gating
```tsx
import { useAuth } from '@/hooks/auth/useAuth';

const { isAuthenticated, user, isLoading } = useAuth();

// Automatically redirects based on auth state
if (isAuthenticated) {
  // User is logged in
} else {
  // User needs to login
}
```

### Accessing User Data
```tsx
import { useAuthStore } from '@/store/authStore';

const { user, isAuthenticated } = useAuthStore();
```

## Demo Credentials
Use these credentials for testing:
- **Username**: `emilys`
- **Password**: `emilyspass`

## API Endpoints
- **Login**: `POST /auth/login`
- **Current User**: `GET /auth/me`
- **Refresh Token**: `POST /auth/refresh`

## Security Features
- Tokens stored in secure storage
- Automatic token refresh
- Proper error handling for auth failures
- Route protection based on authentication state

## File Structure
```
├── types/auth.ts          # Authentication types
├── store/authStore.ts     # Zustand auth store
├── queries/auth.ts        # API queries
├── hooks/auth/useAuth.ts  # Authentication hooks
├── services/axios.ts      # Axios configuration
├── app/index.tsx          # Root with auth gating
├── app/(auth)/sign-in.tsx # Login screen
└── app/(tabs)/home.tsx    # Protected home screen
```

## Next Steps
1. Implement token refresh logic
2. Add password reset functionality
3. Implement user profile updates
4. Add biometric authentication
5. Implement offline authentication
