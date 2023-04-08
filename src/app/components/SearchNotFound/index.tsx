import Headline from "@/app/DesignSystem/Headline";

export default function SearchNotFound({search}: {search: string}) {
    return (
        <div style={{padding: '30px 0'}}>
            <Headline as="h3" align="center">Não foi possível encontrar uma busca com o termo "{search}"</Headline>
        </div>
    )
}