import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
    return (
        <div className='nav'>
            <h4 className='nav-title'>
                Categories
            </h4>
            <ul className='nav-list'>
                <Link href='/comap' className='nav-list-item'>
                    <Image
                        className='nav-list-item-img'
                        src='/comap-logo.png'
                        alt='comap logo'
                        width={30}
                        height={34}/>
                    <p className='nav-list-item-text'>
                        Plomberie
                    </p>
                </Link>
                <Link href='/paint' className='nav-list-item'>
                    <Image
                        className='nav-list-item-img'
                        src='/paint-logo.png'
                        alt='paint logo'
                        width={30}
                        height={34}
                    />
                    <p className='nav-list-item-text'>
                        Peinture
                    </p>
                </Link>
            </ul>
        </div>
    )
}

export default ProductList;