import Discord from "@/icons/Discord";

interface DiscordLoginButtonProps {
  className?: string;
  redirect?: string;
}

// TODO: Make params be respected into this bitch

export default function DiscordLoginButton({
  className,
  redirect
}: DiscordLoginButtonProps) {
  return (
    <>
      <a
        href={`/login?redirect=${encodeURIComponent(redirect ? redirect : "/")}`}
        className={`text-white flex min-w-fit justify-center items-center gap-2 py-2 px-4 leading-loose bg-indigo-500 hover:bg-indigo-500/90 transition ${className}`}
      >
        Login with Discord
        <Discord className="w-6 h-6" />
      </a>
    </>
  );
}
