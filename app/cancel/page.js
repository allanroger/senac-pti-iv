import Link from "next/link";

export default function CancelPage() {
    return (
        <div>
            Compra cancelada.
            <Link href={'/'}>Voltar para a página inicial</Link>
        </div>
    )
}