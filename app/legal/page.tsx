import Link from 'next/link'

export default function legalnotice() {
  return (
    <main className="flex mx-auto w-full max-w-8xl flex-col gap-8 px-8 text-foreground/70">
      <h1 className="text-4xl font-bold text-white">Legal Notice</h1>
      <p>
        <span
          className="mr-1.5 text-lg"
          aria-label="German flag"
        >
          🇩🇪
        </span>
        For the German version please visit{' '}
        <Link
          href="/legal-de"
          className="text-foreground underline"
        >
          this page
        </Link>
        .
      </p>
      <p>Information according to § 5 TMG.</p>
      <div>
        <h3 className="text-lg font-bold text-foreground">Contact</h3>
        <p className="select-none">
          Dominik Koch
          <br />
          c/o IP-Management #38305
          <br />
          Ludwig-Erhard-Str. 18
          <br />
          20459 Hamburg
          <br />
          Germany
        </p>
      </div>
      <p>No acceptance of parcels or packages.</p>
      <p className="select-none">Email: dominik@rivo.gg</p>
      <p className="select-none">Phone: +49 151 23793107</p>
      <div>
        <h3 className="text-lg font-bold text-foreground">
          Online dispute resolution
        </h3>
        <p>
          The European Comission provides a platform for online dispute
          resolution, available at{' '}
          <Link
            href="https://ec.europa.eu/consumers/odr/"
            className="text-foreground underline"
          >
            https://ec.europa.eu/consumers/odr/
          </Link>
          . <br />I am neither willing nor obliged to participate in dispute
          resolution proceedings in front of a consumer arbitration board.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-foreground">Privacy Policy</h3>
        <Link
          href="https://reviverbot.com/privacy/"
          className="text-foreground underline"
        >
          https://reviverbot.com/privacy/
        </Link>
      </div>
      <div>
        <h3 className="text-lg font-bold text-foreground">
          Validity of this Legal Notice
        </h3>
        <p>
          This legal notice is valid for the following websites, social media
          accounts and other services, as long as they are listed below.
        </p>
      </div>
      <div className="text-foreground">
        <Link
          href="https://reviverbot.com/"
          className="underline"
        >
          https://reviverbot.com/
        </Link>
        <br />

        <Link
          href="https://rivo.gg/"
          className="underline"
        >
          https://rivo.gg/
        </Link>
        <br />
      </div>
      <p>
        The Discord bot with the id{' '}
        <span className="font-mono text-foreground">385824713819029504</span>
        <br />
        The Discord server with the id{' '}
        <span className="font-mono text-foreground">721297781880258592</span>
      </p>
    </main>
  )
}
