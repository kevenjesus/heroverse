import Head from "next/head"
import StyledComponentsRegistry from './lib/registry';
import Proveider from "./components/Provider";

export const metadata = {
  title: 'Hero Verse',
  description: '"Hero Verse" é um projeto que visa criar um universo de super-heróis com histórias emocionantes e personagens cativantes. Através de HQs, animações e outras mídias, o projeto busca proporcionar uma experiência única e envolvente para os fãs de quadrinhos e super-heróis. Com uma narrativa rica em detalhes e tramas que exploram os limites do bem e do mal, "Hero Verse" é uma verdadeira ode à imaginação e ao poder da ficção. Seja bem-vindo(a) a esse universo de heróis e vilões!',
  icons: {
    shortcut: { url: '/HV.png', type: 'image/png' }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <StyledComponentsRegistry>
            <Proveider>
                {children}
            </Proveider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
