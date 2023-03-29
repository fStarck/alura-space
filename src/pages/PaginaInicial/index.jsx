import Cabecalho from "../../Componentes/Cabecalho";
import Menu from "../../Componentes/Menu";
import banner from './banner.png'
import './PaginaInicial.css'

export default function PaginaInicial () {
    return (
        <>
            <Cabecalho />
            <main>
                <section className="principal" >
                    <Menu />
                    <div className="principal__imagem">
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="a imagem da terra vista do espaço" />
                    </div>
                </section>
            </main>
        </>
    )
}