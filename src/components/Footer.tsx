import '../styles/Footer.css'

export default function Footer() {
    return(
        <footer className='footer'>
            <ul className='menu'>
                <li className='menu-elem'>
                    <a href="#" className='menu-icon'>Inicio</a>
                </li>
                <li className='menu-elem'>
                    <a href="#" className='menu-icon'>Curso</a>
                </li>
                <li className='menu-elem'>
                    <a href="#" className='menu-icon'>Contacto</a>
                </li>
            </ul>
            <p className='text'>2024 | Juan Francisco Osorio Aguirre</p>
        </footer>
    )
}