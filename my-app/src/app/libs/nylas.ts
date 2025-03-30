import Nylas from "nylas";

// Check for required environment variables
const requiredEnvVars = {
  NYLAS_CLIENT_ID: process.env.NYLAS_CLIENT_ID,
  NYLAS_API_KEY: process.env.NYLAS_API_KEY,
  NYLAS_CLIENT_SECRET: process.env.NYLAS_CLIENT_SECRET,
};

// Log missing environment variables
Object.entries(requiredEnvVars).forEach(([key, value]) => {
  if (!value) {
    console.error(`Missing required environment variable: ${key}`);
  }
});

export const nylasConfig = {
  clientId: process.env.NYLAS_CLIENT_ID || '',
  apiKey: process.env.NYLAS_API_KEY || '',
  apiUri: process.env.NYLAS_API_URI || 'https://api.eu.nylas.com',
  callbackUri: process.env.NYLAS_CALLBACK_URI || 'http://localhost:3000/api/auth/callback',
  clientSecret: process.env.NYLAS_CLIENT_SECRET || '',
};

// Initialize the Nylas SDK with the client credentials
export const nylas = new Nylas({
  apiKey: nylasConfig.apiKey,
  apiUri: nylasConfig.apiUri,
});