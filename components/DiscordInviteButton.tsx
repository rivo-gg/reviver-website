interface DiscordInviteButtonProps {
  className?: string
}

// TODO: Make params be respected into this bitch

export default function DiscordInviteButton({
  className,
}: DiscordInviteButtonProps) {
  return (
    <>
      <a
        href="/invite" 
        target="_blank"
        className={`flex min-w-fit items-center justify-center gap-2 bg-indigo-500 px-4 py-2 leading-loose text-white transition-all duration-300 hover:bg-indigo-500/90 ${className}`}
      >
        <span className="hidden lg:flex">Invite Reviver</span>
        <span className="flex lg:hidden">Invite</span>
      </a>
    </>
  )
}
