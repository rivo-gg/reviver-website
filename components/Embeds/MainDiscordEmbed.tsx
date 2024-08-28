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
  DiscordMessages
} from '@skyra/discord-components-react'
import { getRandomQuestion } from '@/helpers/getRandomQuestion'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import profiles from '@/data/profiles.json'
import { useTheme } from 'next-themes'
import { FC, useState } from 'react'

interface MainProps {
  initialQuestion: string
}

const MainDiscordEmbed: FC<MainProps> = ({ initialQuestion }) => {
  const { theme } = useTheme()
  const [replayedRounds, setReplayedRounds] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion)

  const replay = () => {
    if (replayedRounds < 3) {
      setCurrentQuestion(getRandomQuestion('topic'))
      setReplayedRounds(replayedRounds + 1)
    }
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, transform: 'translateY(20px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        viewport={{ once: true }}
        style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
      >
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
            edited={replayedRounds > 0}
          >
            <DiscordCommand
              slot="reply"
              profile="dominik"
              author={profiles.dominik.author}
              avatar={profiles.dominik.avatar}
              roleColor={profiles.dominik.roleColor}
              // @ts-ignore
              clanIcon={profiles.dominik.clanIcon}
              clanTag={profiles.dominik.clanTag}
              command="/topic"
              lightTheme={theme === 'light'}
            />
            <DiscordEmbed
              slot="embeds"
              color="#1e88e5"
            >
              <DiscordEmbedDescription slot="description">
                {currentQuestion}
              </DiscordEmbedDescription>
              <DiscordEmbedFooter
                slot="footer"
                footerImage="./staff/Dominik.webp"
              >
                Requested by dominikdev | TOPIC ID: 64
              </DiscordEmbedFooter>
            </DiscordEmbed>
            <DiscordAttachments slot="components">
              <DiscordActionRow>
                {replayedRounds < 3 ?
                  <DiscordButton
                    type="primary"
                    onClick={() => replay()}
                    emoji="/emojis/refresh.svg"
                    emojiName="refresh"
                  >
                    New Topic
                  </DiscordButton>
                : <DiscordButton
                    type="secondary"
                    onClick={() =>
                      window.open('https://reviverbot.com/invite', '_blank')
                    }
                    emoji="/emojis/external.svg"
                    emojiName="external"
                  >
                    Invite Reviver
                  </DiscordButton>
                }
              </DiscordActionRow>
            </DiscordAttachments>
          </DiscordMessage>
        </DiscordMessages>
      </m.div>
    </LazyMotion>
  )
}
export default MainDiscordEmbed
