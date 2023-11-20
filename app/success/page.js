import Link from "next/link";

export default function SuccessPage() {
    return (
        <div>
            Compra concluída!
            <Link href={'/'}>Voltar para a página principal</Link>
        </div>
    )
}