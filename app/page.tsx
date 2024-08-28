import { getRandomQuestion } from '@/helpers/getRandomQuestion'
import { HomeContent } from '@/components/Homepage/Content'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Reviver - Dead Chat Bot',
  description:
    'Reviver provides your server with tons of interesting topics, fun facts, and memes to kill boredom.',
  robots: 'index, follow',
  publisher: 'Rivo',
  metadataBase: new URL('https://reviverbot.com'),
  openGraph: {
    title: 'Reviver - Dead Chat Bot',
    description:
      'Reviver provides your server with tons of interesting topics, fun facts, and memes to kill boredom.',
    type: 'website',
    url: 'https://reviverbot.com',
    images: 'https://cdn.wouldyoubot.gg/bots/reviver/Reviver-Front.png'
  },
  twitter: {
    card: 'summary_large_image',
    images: 'https://cdn.wouldyoubot.gg/bots/reviver/Reviver-Front.png',
    title: 'Reviver - Dead Chat Bot',
    description:
      'Reviver provides your server with tons of interesting topics, fun facts, and memes to kill boredom.'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon-16x16.png'
  }
}

export const viewport: Viewport = {
  themeColor: '#87cbe9'
}

const Home = async () => {
  const response = await fetch(
    'https://japi.rest/discord/v1/application/385824713819029504/'
  )

  const data = await response.json()
  const serverCount = data.data.bot.approximate_guild_count ?? 0

  const serverResponse = await fetch(
    'https://liberal-snail-47202.upstash.io/get/server_count_reviver',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + process.env.UPSTASH_API_KEY
      }
    }
  )

  const serverData = await serverResponse.json()
  const servers = JSON.parse(serverData.result ?? null) ?? []
  const filteredServers = servers.filter((g: any) => g.name !== 'Pornhub')

  return (
    <>
      <main className="flex w-full flex-col items-center overflow-x-hidden">
        <HomeContent
          initialRatherQuestion={getRandomQuestion('topic')}
          serverCount={serverCount}
          servers={filteredServers}
        />
      </main>
    </>
  )
}

export default Home
