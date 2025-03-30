import { nylas, nylasConfig } from "@/app/libs/nylas";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!nylasConfig.clientId || !nylasConfig.callbackUri) {
      throw new Error('Missing required Nylas configuration');
    }

    const authUrl = nylas.auth.urlForOAuth2({
      clientId: nylasConfig.clientId,
      redirectUri: nylasConfig.callbackUri,
      scope: ['calendar'],
      state: 'calendar-auth',
      provider: 'google',
    });
    
    return NextResponse.redirect(authUrl);
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Failed to generate auth URL' },
      { status: 500 }
    );
  }
}
