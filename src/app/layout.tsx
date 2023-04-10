import Head from "next/head"
import StyledComponentsRegistry from './lib/registry';
import Proveider from "./components/Provider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt">
      <Head>
        <title>Hero Verse</title>
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
