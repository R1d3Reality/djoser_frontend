import {fetcher} from "../../../lib/api";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Header from "@/components/Header/Header";


const Comap = ( {comap} ) => {
    const url = 'http://127.0.0.1:1337';
    console.log(comap.attributes)
    const IMAGE_URL = url + `${comap.attributes.photo.data[0].attributes.formats.thumbnail.url}`;
    return (
        <>
            <Header />
            <article className='item'>
                <img src={IMAGE_URL} alt='product-image' className='item-img' />
                <p className='item-title'>
                    {comap.attributes.name}
                </p>
                <p className='item-text'>
                    {comap.attributes.description}
                </p>
            </article>
        </>

    )
}

export async function getServerSideProps({ params }) {
    const { slug } = params;
    const blogResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/comap/${slug}?populate=*`
    );
    return {
        props: {
            comap: blogResponse.data,
        }
    }
}

export default Comap;