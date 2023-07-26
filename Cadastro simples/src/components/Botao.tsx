interface BotaoProps {
    cor?: 'cyan' | 'sky' | 'blue'
    className?: string
    children: any  
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'cyan'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-radial from-${cor}-300 to-${cor}-600
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}> 
            {props.children}
        </button>
    )
}