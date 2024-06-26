/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: '71f.036.myftpupload.com',
                pathname: '**'
            },
        ],
    },
};

export default nextConfig;
