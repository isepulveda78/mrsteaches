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
            {
                protocol: 'https',
                hostname: 'israels14.sg-host.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**'
            },
        ],
    },
};

export default nextConfig;
