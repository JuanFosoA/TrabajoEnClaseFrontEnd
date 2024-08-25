import '../styles/Principal.css'
import CSS from "../assets/css.png"
import elhtml from "../assets/html.jpg"
import fine from "../assets/thisisfine.jpg"

export default function Principal() {
    return(
        <main className='main'>
            <aside className='aside'>
                This is the aside
            </aside>
            <section className='principal'>
                <div className='slider-wrapper'>
                    <div className='slider'>
                        <img id='slide-1' src={CSS} alt="Gojo" />
                        <img id='slide-2' src={elhtml} alt="Sukuna" />
                        <img id='slide-3' src={fine} alt="Gojo Vs Sukuna" />
                    </div>
                    <div className='slider-nav'>
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                    </div>
                </div>
            </section>
        </main>
    )
}