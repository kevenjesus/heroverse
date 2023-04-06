import Head from "next/head"
import StyledComponentsRegistry from './lib/registry';
import Proveider from "./components/Provider";

export const metadata = {
  title: 'HeroVerse',
  description: 'Teste prático para Global Things utilizando React + Nextjs',
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
