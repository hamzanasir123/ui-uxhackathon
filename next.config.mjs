/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true, // Ignores TypeScript errors during build
      },
    images : {
        domains : ["apipics.s3.amazonaws.com", "cdn.sanity.io"]
    }
};

export default nextConfig;
