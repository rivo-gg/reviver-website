'use client'
import {
  DiscordActionRow,
  DiscordAttachments,
  DiscordButton,
  DiscordCommand,
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordEmbedFooter,
  DiscordMessage,
  DiscordMessages,
  DiscordReply
} from '@skyra/discord-components-react'
import profiles from '@/data/profiles.json'
import { useTheme } from 'next-themes'

const HigherLowerEmbed = () => {
  const { theme } = useTheme()
  return (
    <DiscordMessages
      lightTheme={theme === 'light'}
      className="overflow-x-hidden rounded-lg shadow"
    >
      <DiscordMessage
        profile="wouldyou"
        author={profiles.reviver.author}
        avatar={profiles.reviver.avatar}
        roleColor={profiles.reviver.roleColor}
        bot={profiles.reviver.bot}
        verified={profiles.reviver.verified}
      >
        <DiscordCommand
          slot="reply"
          profile="decieboi"
          author={profiles.decieboi.author}
          avatar={profiles.decieboi.avatar}
          roleColor={profiles.decieboi.roleColor}
          command="/fact"
          lightTheme={theme === 'light'}
        />
        <DiscordEmbed
          slot="embeds"
          color="#1e88e5"
        >
          <DiscordEmbedDescription slot="description">
            Berries are simple fruits stemming from one flower. This means that
            pineapples, bananas, watermelon, pumpkins, and avocados are berries.
          </DiscordEmbedDescription>
          <DiscordEmbedFooter
            slot="footer"
            footerImage="./staff/DecieBoi.webp"
          >
            Requested by decieboi | TOPIC ID: 420
          </DiscordEmbedFooter>
        </DiscordEmbed>
      </DiscordMessage>

      <DiscordMessage
        profile="dominik"
        author={profiles.dominik.author}
        avatar={profiles.dominik.avatar}
        roleColor={profiles.dominik.roleColor}
        // @ts-ignore
        clanIcon={profiles.dominik.clanIcon}
        clanTag={profiles.dominik.clanTag}
        lightTheme={theme === 'light'}
      >
        <DiscordReply
          slot="reply"
          profile="wouldyou"
          author={profiles.reviver.author}
          avatar={profiles.reviver.avatar}
          roleColor={profiles.reviver.roleColor}
          bot={profiles.reviver.bot}
          verified={profiles.reviver.verified}
          lightTheme={theme === 'light'}
        >
          <p style={{ whiteSpace: 'initial' }}>Click to see command</p>
        </DiscordReply>
        My whole life has been a lie
      </DiscordMessage>

      <DiscordMessage
        profile="decieboi"
        author={profiles.decieboi.author}
        avatar={profiles.decieboi.avatar}
        roleColor={profiles.decieboi.roleColor}
        lightTheme={theme === 'light'}
      >
        Wow, this changes everything
      </DiscordMessage>

      <DiscordMessage
        profile="vcokltfre"
        author={profiles.vcokltfre.author}
        avatar={profiles.vcokltfre.avatar}
        roleColor={profiles.vcokltfre.roleColor}
        lightTheme={theme === 'light'}
      >
        <DiscordReply
          slot="reply"
          profile="decieboi"
          author={profiles.decieboi.author}
          avatar={profiles.decieboi.avatar}
          roleColor={profiles.decieboi.roleColor}
          lightTheme={theme === 'light'}
        >
          <p style={{ whiteSpace: 'initial' }}>Wow, this changes everything</p>
        </DiscordReply>
        Yea, not sure how to feel about this
      </DiscordMessage>

      <DiscordMessage
        profile="seek"
        author={profiles.seek.author}
        avatar={profiles.seek.avatar}
        roleColor={profiles.seek.roleColor}
        bot={profiles.seek.bot}
        verified={profiles.seek.verified}
        clanIcon={profiles.seek.clanIcon}
        clanTag={profiles.seek.clanTag}
        lightTheme={theme === 'light'}
      >
        I dont think I will be able to sleep tonight 😭
      </DiscordMessage>
    </DiscordMessages>
  )
}
export default HigherLowerEmbed
