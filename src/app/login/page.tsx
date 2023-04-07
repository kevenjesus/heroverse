import LoginPage from "../components/pages/Login";

export const metadata = {
    title: 'Hero Verse - Login',
    description: '"Hero Verse" é um projeto que visa criar um universo de super-heróis com histórias emocionantes e personagens cativantes. Através de HQs, animações e outras mídias, o projeto busca proporcionar uma experiência única e envolvente para os fãs de quadrinhos e super-heróis. Com uma narrativa rica em detalhes e tramas que exploram os limites do bem e do mal, "Hero Verse" é uma verdadeira ode à imaginação e ao poder da ficção. Seja bem-vindo(a) a esse universo de heróis e vilões!',
    icons: {
      shortcut: { url: '/HV.png', type: 'image/png' }
    }
  }

export default function Login() {
    return <LoginPage />
}