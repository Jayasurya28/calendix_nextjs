import { nylas, nylasConfig } from "@/app/libs/nylas";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const error = url.searchParams.get('error');
    const error_description = url.searchParams.get('error_description');
    
    // Handle OAuth errors
    if (error) {
      console.error('OAuth error:', error, error_description);
      return NextResponse.redirect(new URL('/auth/error?error=' + error, request.url));
    }

    // Handle missing code
    if (!code) {
      console.error('No authorization code received');
      return NextResponse.redirect(new URL('/auth/error?error=no_code', request.url));
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
    return NextResponse.redirect(new URL('/auth/success', request.url));
  } catch (error) {
    console.error('Callback error:', error);
    return NextResponse.redirect(
      new URL('/auth/error?error=token_exchange_failed', request.url)
    );
  }
} 