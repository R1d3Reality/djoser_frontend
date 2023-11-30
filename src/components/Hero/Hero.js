import Header from "../Header/Header";
import ProductList from "@/components/ProductList/ProductList";
import Image from "next/image";

const Hero = () => {
    return (
        <div>
            <Header />
            <div className='hero'>
                <h3 className='hero-text'>
                    Trouvez les meilleurs outils et équipements <br />
                    pour vos besoins de construction
                </h3>
                <Image
                    src='/hero.png'
                    alt='hero'
                    width={216}
                    height={216}
                    className='hero-img'
                />
            </div>
            <ProductList />
        </div>
    )
}

export default Hero;