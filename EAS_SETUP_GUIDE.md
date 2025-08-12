eas login
eas build --profile development --platform android
eas build --profile preview --platform android
eas build --profile production --platform android
eas update --channel preview --message "<short change note>"
eas secret:create --name API_URL --value https://api.example.com
eas credentials
# EAS Build Journey (What I Actually Did)

This is a plain log of the real steps and minimal commands I used to get EAS builds working for the Todo app. No fluff—just the path I took and what to repeat next time.

## 1. Installed & Logged In
```powershell
npm install -g eas-cli
eas login
```
Already linked to Expo (projectId lives in app.json under extra.eas), so I didn’t re-run `eas init`.

## 2. Verified App Config
Checked `app.json` had:
- extra.eas.projectId
- android.package
- ios.bundleIdentifier
Confirmed build profiles existed in `eas.json` (development, preview, production).

## 3. Added Dev Client (so I can debug native modules)
```powershell
npx expo install expo-dev-client
eas build --profile development --platform android
```
Installed the resulting dev client APK on a device (via link / QR). This gives faster iteration later.

## 4. Created a Preview Build For Testers
```powershell
eas build --profile preview --platform android
```
Waited for the build page → copied the APK link → shared to phones. Testers just tapped Download & Install (enabled unknown sources if needed).

## 5. (Optional) Pushing JS Updates
If I only change JavaScript (no native modules/permissions), I can push an OTA update instead of rebuilding:
```powershell
eas update --channel preview --message "UI tweak"
```
Devices on the preview build pick it up (same runtime). Haven’t added a `runtimeVersion` policy yet—okay for now.

## 6. Preparing a Store Release (When Needed)
If I add a native module or permission, I bump versions first:
```jsonc
// app.json snippet
"version": "1.1.0",
"ios": { "buildNumber": "2" },
"android": { "versionCode": 2 }
```
Then:
```powershell
eas build --profile production --platform android
```
Later I can submit:
```powershell
eas submit --platform android --profile production
```
Will add iOS flow once I target iOS distribution.

## 7. Secrets (Only If Needed)
If an API base URL or key is required at build time:
```powershell
eas secret:create --name API_URL --value https://api.example.com
```
Access via `process.env.API_URL`.

## 8. Credentials Check
```powershell
eas credentials
```
Used only when I need to inspect or rotate the keystore/provisioning.

## 9. Quick Fix Notes I Hit / Might Hit
- Build fails instantly → run `expo doctor` locally.
- APK won’t install → enable “Install unknown apps” on the device.
- Update didn’t show → confirm channel (`preview`) and that runtimeVersion wasn’t changed by a version bump.

## 10. Next Improvements (Deferred)
- Add `runtimeVersion: { policy: "appVersion" }` for safer OTA separation.
- Switch production Android to `app-bundle` for Play Store when publishing.
- Add CI (GitHub Action) to auto run preview builds on main branch.

## 11. Minimal Command Recap
```powershell
# Dev client
eas build --profile development --platform android
# Tester build
eas build --profile preview --platform android
# JS update to testers
eas update --channel preview --message "<msg>"
# Release build
eas build --profile production --platform android
```

That’s the whole flow I followed—repeat these and adjust only when native changes or store submission come into play.
