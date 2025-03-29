import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(new URL('/auth', new URL(process.env.NYLAS_CALLBACK_URI || '')));
}