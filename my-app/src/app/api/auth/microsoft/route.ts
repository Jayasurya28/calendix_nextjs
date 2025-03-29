import { nylas, nylasConfig } from "@/app/libs/nylas";
import { NextResponse } from "next/server";

export async function GET() {
  const authUrl = nylas.auth.urlForOAuth2({
    clientId: nylasConfig.clientId,
    redirectUri: nylasConfig.callbackUri,
    scope: ['calendar'],
    state: 'microsoft-auth',
    loginHint: '',
    provider: 'microsoft',
  });
  
  return NextResponse.redirect(authUrl);
} 