import { nylas, nylasConfig } from "@/app/libs/nylas";
import { NextResponse } from "next/server";

export async function GET() {
  const authUrl = nylas.auth.urlForOAuth2({
    clientId: nylasConfig.clientId,
    redirectUri: nylasConfig.callbackUri,
    scope: ['calendar'],
    state: 'google-auth',
    loginHint: '',
    provider: 'google',
  });
  
  return NextResponse.redirect(authUrl);
} 