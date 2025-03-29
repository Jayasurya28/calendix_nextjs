import { FC } from 'react';

const AuthSuccessPage: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Successful
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your calendar has been successfully connected.
          </p>
        </div>
        <div className="mt-5 text-center">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccessPage; 