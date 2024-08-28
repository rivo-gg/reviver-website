'use server'

import Image from 'next/image'
import Link from 'next/link'

const Footer = async () => {
  const recommendedLinks = [
    {
      name: 'Home',
      link: '/',
      EventTarget: '_self'
    },
    {
      name: 'Commands',
      link: '/commands',
      EventTarget: '_self'
    }
  ]

  const Links = [
    {
      name: 'Support Server',
      link: '/discord',
      EventTarget: '_blank'
    },
    {
      name: 'Invite',
      link: '/invite',
      EventTarget: '_blank'
    },
    {
      name: 'Vote',
      link: '/vote',
      EventTarget: '_blank'
    }
  ]

  const LegalLinks = [
    {
      name: 'Legal Notice',
      link: '/legal',
      EventTarget: '_self'
    },
    {
      name: 'Privacy Policy',
      link: '/privacy',
      EventTarget: '_self'
    },
    {
      name: 'Terms of Service',
      link: '/terms',
      EventTarget: '_self'
    }
  ]

  return (
    <footer className="mt-20 mx-auto w-full max-w-8xl px-8 py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 text-foreground/70 md:flex-row">
        <div className="flex w-full flex-col items-center md:mr-4 md:items-start">
          <div className="flex items-center text-xl font-bold text-foreground">
            <Image
              src="/Logo.svg"
              alt="Logo"
              className="rounded-full"
              width="40"
              height="40"
              priority
            />
            <p className="ml-3">Reviver</p>
          </div>
          <p className="mt-4 text-center text-sm md:text-left">
            &copy; {new Date().getFullYear()}{' '}
            <Link
              href="https://rivo.gg/"
              target="_blank"
              className="transition-all hover:text-foreground"
            >
              <b>Rivo</b>
            </Link>
            . All rights reserved.
          </p>
        </div>
        <div className="flex w-full flex-col items-center md:items-start">
          <h4 className="mb-2 text-lg font-bold text-foreground">
            Recommended
          </h4>
          <div className="flex flex-col items-center gap-2 md:items-start">
            {recommendedLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                target={link.EventTarget}
                className="transition-all hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center md:items-start">
          <h4 className="mb-2 text-lg font-bold text-foreground">Links</h4>
          <div className="flex flex-col items-center gap-2 md:items-start">
            {Links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                target={link.EventTarget}
                className="transition-all hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center md:items-start">
          <h4 className="mb-2 text-lg font-bold text-foreground">Legal</h4>
          <div className="flex flex-col items-center gap-2 md:items-start">
            {LegalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                target={link.EventTarget}
                className="transition-all hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <hr className="border border-foreground/10" />
        <p className="mt-8 text-center text-sm text-foreground/70">
          Made with <span className="text-brand-red-100">♥</span> by{' '}
          <Link
            href="https://wouldyoubot.gg/team/"
            className="text-foreground underline"
          >
            Reviver Team
          </Link>{' '}
          &{' '}
          <Link
            href="https://github.com/Would-You-Bot/website-app/graphs/contributors"
            target="_blank"
            className="text-foreground underline"
          >
            Contributors
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
