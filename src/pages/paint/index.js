import Paint from "@/components/Paint/Paint";
import {fetcher} from "../../../lib/api";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Header from "@/components/Header/Header";

const Index = ({ paints }) => {
    return (
        <div>
            <Header />
            <Paint paints={paints} />
        </div>
    )
}


export default Index;

export async function getStaticProps() {
    const dataResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/paints?populate=*`);
    return {
        props: {
            paints: dataResponse
        }
    }
}