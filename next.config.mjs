/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/academics/senior-secondary',
                destination: '/academics/secondary',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
