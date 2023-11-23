import Link from "next/link";
import styles from '../../styles/page.module.css'

export default function CancelPage() {
    return (
        <div className={styles.page}>
            <p>Compra cancelada!</p>
            <Link href={'/'}><button>Voltar para a página inicial</button></Link>
        </div>
    )
}