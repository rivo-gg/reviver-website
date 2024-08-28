import Link from 'next/link'

export default function legalnoticede() {
  return (
    <main className="flex mx-auto w-full max-w-8xl flex-col gap-8 px-8 text-foreground/70">
      <h1 className="text-4xl font-bold text-white">
        Impressum
      </h1>
      <p>Informationen gemäß § 5 TMG.</p>
      <div>
        <h3 className="text-lg font-bold text-foreground">Kontakt</h3>
        <p className="select-none">
          Dominik Koch
          <br />
          c/o IP-Management #38305
          <br />
          Ludwig-Erhard-Str. 18
          <br />
          20459 Hamburg
          <br />
          Deutschland
        </p>
      </div>
      <p>Keine Annahme von Paketen oder Päckchen.</p>
      <p className="select-none">Email: dominik@rivo.gg</p>
      <p className="select-none">Telefon: +49 151 23793107</p>
      <div>
        <h3 className="text-lg font-bold text-foreground">
          Online dispute resolution
        </h3>
        <p>
          Die Europäische Kommission bietet eine Plattform für die
          Online-Streitbeilegung Streitbeilegung, die hier zu finden ist:{' '}
          <Link
            href="https://ec.europa.eu/consumers/odr/"
            className="text-foreground underline"
          >
            https://ec.europa.eu/consumers/odr/
          </Link>
          . <br />
          Ich bin weder bereit noch verpflichtet, an einem
          Streitbeilegungsverfahren an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
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
          Gültigkeit dieses Impressums
        </h3>
        <p>
          Dieser rechtliche Hinweis gilt für die folgenden Websites, Social
          Media Konten und andere Dienste, sofern sie hier aufgeführt sind.
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
        Der Discord Bot mit der id{' '}
        <span className="font-mono text-foreground">385824713819029504</span>
        <br />
        Der Discord server mit der id{' '}
        <span className="font-mono text-foreground">721297781880258592</span>
      </p>
    </main>
  )
}
