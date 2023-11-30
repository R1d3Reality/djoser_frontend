import {fetcher} from "../../../lib/api";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Header from "@/components/Header/Header";
import Link from "next/link";
import Image from "next/image";


const Paint = ({ paint }) => {
    const url = 'http://127.0.0.1:1337';
    const IMAGE_URL = url + `${paint.attributes.photo.data[0].attributes.url}`
    const PDF_URL = url + `${paint.attributes.dataSheet.data.attributes.url}`;
    return (
        <>
            <Header />
            <article className='item'>
                <div className='item-img'>
                    <Image
                        src={IMAGE_URL}
                        alt='product-image'
                        width={195}
                        height={100}
                    />
                </div>
                <div className='description'>
                    <p className='description-title'>
                        {paint.attributes.name}
                    </p>
                    <span>Article: {paint.attributes.article}</span>
                    <p className='description-text'>
                        {paint.attributes.description}
                    </p>
                    <Link href={PDF_URL} >
                        Fiche technique
                    </Link>
                </div>
            </article>
        </>
    )
}


export async function getServerSideProps({ params }) {
    const { slug } = params;
    const paintResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/paint/${slug}?populate=*`
    );
    return {
        props: {
            paint: paintResponse.data,
        }
    }
}

export default Paint;