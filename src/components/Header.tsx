import '../styles/Header.css'

export default function Header() {
    return(
        <header className='header'>
        <nav className='nav'>
            <div className='logo'><a href='#'>BLOG</a></div>
            <ul className='links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <a href="#" className='action-btn'>Get Started</a>
            <div className='toggle_btn'>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className='dropdown_menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#" className='action-btn'>Get Started</a></li>
            </div>
        </nav>
        </header>
    )
}