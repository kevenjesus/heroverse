import Headline from "@/app/DesignSystem/Headline";

export default function EmptyState() {
    return (
        <div style={{padding: '30px 0'}}>
            <Headline as="h3" align="center">Nenhum resultado listado.</Headline>
        </div>
    )
}