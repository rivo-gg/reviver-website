/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    serverActions: {
      allowedForwardedHosts: ['reviverbot.com'],
      allowedOrigins: ['reviverbot.com']
    }
  },
  async redirects() {
    return [
      {
        source: '/vote',
        destination: 'https://top.gg/bot/385824713819029504/vote',
        permanent: true
      },
      {
        source: '/support',
        destination: 'https://discord.gg/7dhnR9uUvW',
        permanent: true
      },
      {
        source: '/rivo',
        destination: 'https://rivo.gg',
        permanent: true
      },
      {
        source: '/invite',
        destination:
          'https://discord.com/oauth2/authorize?client_id=385824713819029504&permissions=335932480&scope=bot%20applications.commands',
        permanent: true
      },
      {
        source: '/discord',
        destination: '/support',
        permanent: true
      },
      {
        source: '/imprint',
        destination: '/legal',
        permanent: true
      },
      {
        source: '/impressum',
        destination: '/legal-de',
        permanent: true
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.wouldyoubot.gg',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
