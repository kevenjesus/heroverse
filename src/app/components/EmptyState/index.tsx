import Headline from "@/app/DesignSystem/Headline";

export default function EmptyState({text}: {text: string}) {
    return (
        <div style={{padding: '30px 0'}}>
            <Headline as="h4" weight="400" align="center">{text}</Headline>
        </div>
    )
}