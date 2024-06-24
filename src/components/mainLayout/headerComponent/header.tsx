
import './header.css'
export default function MainLayout () {

    return (
        <>
            <section className='header-container'>
                <div className='menu-switch'>
                    <h2><a href="">COMPANY LOGO</a></h2>
                    <input type="text"  placeholder='Buscar' />
                </div>
                
                <div className='navigation-style'>
                    <nav>
                        <ul>
                            <li><a href="">CompanyTest</a></li>
                            <li><a href="">Notificaciones</a></li>
                            <li><a href="">userLoggedIn</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            
        </>
    )
}


