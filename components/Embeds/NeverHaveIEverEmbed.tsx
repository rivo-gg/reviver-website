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

const NeverHaveIEverEmbed = () => {
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
          profile="paulos"
          author={profiles.paulos.author}
          avatar={profiles.paulos.avatar}
          roleColor={profiles.paulos.roleColor}
          command="/fact"
          lightTheme={theme === 'light'}
        />
        <DiscordEmbed
          slot="embeds"
          color="#1e88e5"
        >
          <DiscordEmbedDescription slot="description">
            Of the 70% of water covering the Earth only 3% of it is fresh, the
            other 97% of it is salted.
          </DiscordEmbedDescription>
          <DiscordEmbedFooter
            slot="footer"
            footerImage="./staff/paulos.webp"
          >
            Requested by paulos | TOPIC ID: 660
          </DiscordEmbedFooter>
        </DiscordEmbed>
      </DiscordMessage>
      <DiscordMessage
        profile="paulos"
        author={profiles.paulos.author}
        avatar={profiles.paulos.avatar}
        roleColor={profiles.paulos.roleColor}
        bot={profiles.paulos.bot}
        verified={profiles.paulos.verified}
        clanIcon={profiles.paulos.clanIcon}
        clanTag={profiles.paulos.clanTag}
      >
        Wow, thats a lot of water!
      </DiscordMessage>
    </DiscordMessages>
  )
}
export default NeverHaveIEverEmbed
