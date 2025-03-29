import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const AuthPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome - Calendar Auth</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="min-h-screen flex items-center justify-center bg-white">
        <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-sm border">
            <div class="text-center">
                <div class="mb-6">
                    <div class="mx-auto w-[60px] h-[60px]">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" rx="8" fill="#FF4B4B"/>
                            <text x="12" y="42" font-family="Arial" font-size="32" font-weight="bold" fill="white">25</text>
                        </svg>
                    </div>
                </div>
                <h2 class="text-2xl font-semibold mb-2">Welcome</h2>
                <p class="text-gray-600 mb-8">
                    Log in to your account to continue to Sandbox
                </p>
            </div>

            <div class="space-y-4">
                <a 
                    href="/api/auth/google"
                    class="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                    Continue with Google
                </a>

                <a
                    href="/api/auth/microsoft"
                    class="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 23">
                        <path fill="#f35325" d="M1 1h10v10H1z"/>
                        <path fill="#81bc06" d="M12 1h10v10H12z"/>
                        <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                        <path fill="#ffba08" d="M12 12h10v10H12z"/>
                    </svg>
                    Continue with Microsoft
                </a>
            </div>

            <div class="mt-6 text-center">
                <a 
                    href="#" 
                    class="text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center"
                >
                    View all providers <span class="ml-1">→</span>
                </a>
            </div>
        </div>
    </div>
</body>
</html>
`;

export async function GET() {
    const headersList = headers();
    return new NextResponse(AuthPage, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
} 