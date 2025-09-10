<div align="center">

# Pathlete

AI-powered career pathways for student-athletes. Explore non-playing careers tailored to your strengths and interests, generated with LLMs.

</div>

---

## Overview

Pathlete helps college athletes discover realistic, high-potential career paths beyond playing professionally. The app collects a short survey of interests, major, and preferences; a backend Cloud Function synthesizes this context with an LLM to produce three prioritized career pathways with salary and education guidance. Results are displayed in a clean, mobile-friendly UI with follow-on curriculum suggestions.

## Features

- Personalized survey using SurveyJS
- AI-generated, structured recommendations (3 ranked pathways)
- Salary and minimum education guidance per pathway
- Persisted quiz data and recommendations in Firestore
- React SPA with results and lesson plan views

## Architecture

- Frontend: React (Create React App) in `website/`
- Backend: Firebase Cloud Functions (Node 18) in `backend/functions/`
- Database: Cloud Firestore
- LLM: OpenAI Chat Completions API

Data model (collections):

- `quiz-data/{userId}`: Raw survey submission
- `recommendations/{userId}`: AI output `{ pathways: [{ rank, name, avgSalary, minEduRequired }] }`
- `users/{userId}`: Optional user profile (read by `getUserInfo`)

Cloud Functions (Callable):

- `uploadQuizData`: Stores quiz data for a `userId`, then triggers processing
- `processQuizData`: Calls OpenAI with context and saves recommendations
- `getRecommendations`: Fetches saved recommendations for a `userId`
- `getUserInfo`: Fetches user profile (if present)

> Note: Frontend calls callable functions via raw HTTPS using Axios and the callable wire format. No Firebase client SDK is required in the browser for these calls.

## Monorepo layout

```
upskilling/
  backend/
    firebase.json              # Functions codebase config
    functions/
      index.js                 # Cloud Functions (callable)
      package.json             # Node 18; axios, firebase-admin, firebase-functions
  website/
    package.json               # CRA scripts
    public/                    # Static assets
    src/                       # React app, Survey + Results views
```

## Prerequisites

- Node.js 18.x
- npm 9+ (or pnpm/yarn)
- Firebase CLI (`npm i -g firebase-tools`) with access to a Firebase project
- OpenAI API key

## Quick start (local dev)

1. Install dependencies

```
cd backend/functions && npm ci
cd ../../website && npm ci
```

2. Deploy or emulate the backend

- Fastest path: deploy callable functions and use them from local React

```
cd backend/functions
# Ensure your Firebase project is set
firebase use <your-project-id>

# Provide the OpenAI key to the runtime environment (see Environment for options)

# Deploy functions
npm run deploy
```

3. Configure frontend environment

Create `website/.env.local` with:

```
REACT_APP_UPLOAD_QUIZ_DATA_URL=https://<location>-<project-id>.cloudfunctions.net/uploadQuizData
REACT_APP_GET_RECOMMENDATIONS_URL=https://<location>-<project-id>.cloudfunctions.net/getRecommendations
REACT_APP_USER_ID=<a-stable-test-user-id>
```

4. Run the React app

```
cd website
npm start
```

The app will open at `http://localhost:3000`. Submitting the survey will hit your deployed callable functions.

## Environment & configuration

### Backend (Cloud Functions)

The code reads the OpenAI key from `process.env.OPENAI_API_KEY`.

You have two common options:

- Google Cloud Console: After first deploy, open your function > Edit > Runtime, build, connections > Runtime environment variables, add `OPENAI_API_KEY`.
- Local emulation: export the var before starting emulators.

```
export OPENAI_API_KEY=sk-...
cd backend/functions
npm run serve
```

> Tip: If you prefer Firebase Config (`functions.config()`), update the code accordingly and set via `firebase functions:config:set openai.api_key=...`.

### Frontend (React)

The React app expects these variables at build/runtime:

- `REACT_APP_UPLOAD_QUIZ_DATA_URL`: Callable endpoint for `uploadQuizData`
- `REACT_APP_GET_RECOMMENDATIONS_URL`: Callable endpoint for `getRecommendations`
- `REACT_APP_USER_ID`: A user identifier string to associate survey data and results

Callable endpoint format:

- URL: `https://<location>-<project-id>.cloudfunctions.net/<functionName>`
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body shape: `{ "data": { ... } }`

Examples used in-app:

```
// Upload quiz data
POST <UPLOAD_QUIZ_DATA_URL>
{
  "data": {
    "userId": "<USER_ID>",
    "quizData": { /* survey payload */ }
  }
}

// Get recommendations
POST <GET_RECOMMENDATIONS_URL>
{
  "data": {
    "userId": "<USER_ID>"
  }
}
```

## Deployment

### Deploy Cloud Functions

```
cd backend/functions
firebase use <your-project-id>
npm run deploy
```

After deploy, copy callable URLs from the Firebase Console and place them in `website/.env` (or hosting provider env settings).

### Deploy the React app

Build and deploy to your hosting provider of choice (Vercel, Netlify, Firebase Hosting, etc.).

```
cd website
npm run build
# Deploy the contents of website/build using your platform's CLI/UI
```

> Firebase Hosting is not configured in this repo by default. You can add it via `firebase init hosting` in the repo root if you prefer a single Firebase deployment.

## Troubleshooting

- JSON parsing errors when reading LLM output: reduce `temperature`, increase `max_tokens`, or enable JSON-formatted responses. The current backend prompts the model to return strict JSON and strips risky formatting, but vendor changes can still cause drift.
- 401/403 calling functions: ensure your callable endpoints are correct and that the function is deployed. If you later add auth/App Check enforcement, the Axios calls must include the appropriate tokens.
- `OPENAI_API_KEY` undefined: set it in the function runtime environment or export it before emulation.

## Tech stack

- React 18, Create React App
- SurveyJS (`survey-core`, `survey-react-ui`)
- Firebase Cloud Functions v2, Node 18
- Cloud Firestore
- Axios
- OpenAI Chat Completions API

## Credits

Texas Convergent EdTech Build Team

- Tech: Aastha Agrawal, Akshat Shah, Samuel Jacob
- Product: Ashley Chen, Aadit Jha, Tina Luo
- Design: Aashna Mangal
