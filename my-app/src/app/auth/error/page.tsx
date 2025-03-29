import { FC } from 'react';

const getErrorMessage = (error: string | null) => {
  switch (error) {
    case 'no_code':
      return 'No authorization code received. Please try authenticating again.';
    case 'token_exchange_failed':
      return 'Failed to complete authentication. Please try again.';
    case 'access_denied':
      return 'Access was denied. Please try again and grant the required permissions.';
    default:
      return 'An unknown error occurred. Please try again.';
  }
};

const AuthErrorPage: FC = () => {
  // Get error from URL if we're in the browser
  const error = typeof window !== 'undefined' 
    ? new URLSearchParams(window.location.search).get('error')
    : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {getErrorMessage(error)}
          </p>
        </div>
        <div className="mt-5 text-center">
          <a
            href="/api/auth"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage; 