import logo from './logo.png'
import search from './search.png'
import './Cabecalho.css'

export default function Cabecalho () {
    return (
        <header className='cabecalho'>
            <img src={logo} alt="logo alura space" />
            <div className='cabecalho__container'>
                <input 
                    type="text"
                    placeholder="O que você procura?" 
                    className='cabecalho__input'
                />
                <img src={search} alt="icone de lupa" />
            </div>
        </header>
    )
}