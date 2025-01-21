import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true, // Ignores TypeScript errors during build
      },
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'apipics.s3.amazonaws.com'
            },
            {
                protocol : 'https',
                hostname : 'cdn.sanity.io'
            }
        ]
    }
};

export default nextConfig;
