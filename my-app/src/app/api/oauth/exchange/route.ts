import {nylas,nylasConfig} from "@/libs/nylas";
import {session} from "@/libs/session";
import {NextApiRequest} from "next";

export async function GET(req:NextApiRequest){
    console.log("Received callback from Nylas");
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const code = req.query.code;

  if (!code) {
    return Response.json("No Authorization code returned from Nylas",{status:400});
  }

  try {
    const response = await nylas.auth.exchangeCodeForToken({
      clientSecret: nylasConfig.apiKey,
      clientId: nylasConfig.clientId, // Note this is *different* from your API key
      redirectUri: nylasConfig.callbackUri, // URI you registered with Nylas in the previous step
      code,
    });
    const { grantId,email } = response;

    await session().set({'grantId', grantId});
    await session().set({'email', email });

    redirect('/');
}