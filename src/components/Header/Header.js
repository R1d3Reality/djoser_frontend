import Link from "next/link";

const Header = () => {
    return (
            <header className='header'>
                <Link href='/'>
                    <img src='/logo.png' className='header-logo'/>
                </Link>
                <nav className='header-nav'>
                    <div className='header-nav-element'>
                        <p>
                            A votre service au:
                        </p>
                        <a href='tel:+32(0)2 346 80 81'>
                            +32(0)2 346 80 81
                        </a>
                        <a href='mailto: info@djoser-mat.be'>
                            info@djoser-mat.com
                        </a>
                    </div>
                    <div className='header-nav-element'>
                        <p>
                            Nos horaires
                            du lundi au vendredi:
                        </p>
                        <a>
                            06:00 - 18:00
                        </a>
                        <p>
                            Le samedi:
                        </p>
                        <a>
                            06:00 - 16:00
                        </a>
                    </div>
                </nav>
            </header>
    )
}



export default Header;
