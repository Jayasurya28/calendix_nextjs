import Nylas from "nylas";

if (!process.env.NYLAS_CLIENT_ID || !process.env.NYLAS_API_KEY) {
  throw new Error('Missing required Nylas environment variables');
}

export const nylasConfig = {
  clientId: process.env.NYLAS_CLIENT_ID,
  apiKey: process.env.NYLAS_API_KEY,
  apiUri: process.env.NYLAS_API_URI || 'https://api.eu.nylas.com',
  callbackUri: process.env.NYLAS_CALLBACK_URI || 'http://localhost:3000/api/auth/callback',
};

// Initialize the Nylas SDK with the client credentials
export const nylas = new Nylas({
  apiKey: nylasConfig.apiKey,
  apiUri: nylasConfig.apiUri,
});

if (!nylasConfig.clientId || !nylasConfig.apiKey || !nylasConfig.apiUri) {
    console.warn('Missing Nylas credentials in environment variables');
}
  