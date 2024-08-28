'use client'
import {
  DiscordCommand,
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordEmbedFooter,
  DiscordMessage,
  DiscordMessages
} from '@skyra/discord-components-react'
import profiles from '@/data/profiles.json'
import { useTheme } from 'next-themes'
import { FC } from 'react'

interface MainProps {
  threadName: string
}

const DailyMessageEmbed: FC<MainProps> = ({ threadName }) => {
  const { theme } = useTheme()
  return (
    <DiscordMessages
      lightTheme={theme === 'light' ? true : false}
      className="mx-auto w-auto overflow-x-hidden rounded-lg text-left shadow sm:w-2/3 lg:w-auto"
    >
      <DiscordMessage
        profile="reviver"
        author={profiles.reviver.author}
        avatar={profiles.reviver.avatar}
        roleColor={profiles.reviver.roleColor}
        bot={profiles.reviver.bot}
        verified={profiles.reviver.verified}
      >
        <DiscordCommand
          slot="reply"
          profile="vcokltfre"
          author={profiles.vcokltfre.author}
          avatar={profiles.vcokltfre.avatar}
          roleColor={profiles.vcokltfre.roleColor}
          command="/fact"
          lightTheme={theme === 'light'}
        />
        <DiscordEmbed
          slot="embeds"
          color="#1e88e5"
        >
          <DiscordEmbedDescription slot="description">
            On December 23, 1947, Bell Telephone Laboratories in Murray Hill,
            N.J., held a secret demonstration of the transistor which marked the
            foundation of modern electronics.
          </DiscordEmbedDescription>
          <DiscordEmbedFooter
            slot="footer"
            footerImage="./staff/vcokltfre.webp"
          >
            Requested by vcokltfre | TOPIC ID: 660
          </DiscordEmbedFooter>
        </DiscordEmbed>
      </DiscordMessage>
    </DiscordMessages>
  )
}
export default DailyMessageEmbed
