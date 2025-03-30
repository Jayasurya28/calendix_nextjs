import { nylas, nylasConfig } from "@/app/libs/nylas";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    
    if (!code) {
      return NextResponse.json(
        { error: 'No authorization code received' },
        { status: 400 }
      );
    }

    const token = await nylas.auth.exchangeCodeForToken({
      clientId: nylasConfig.clientId,
      clientSecret: process.env.NYLAS_CLIENT_SECRET || '',
      code,
      redirectUri: nylasConfig.callbackUri,
    });

    // Store the token securely (e.g., in your database)
    console.log('Received token:', token);

    // Redirect to success page
    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.error('Callback error:', error);
    return NextResponse.json(
      { error: 'Failed to exchange code for token' },
      { status: 500 }
    );
  }
} 