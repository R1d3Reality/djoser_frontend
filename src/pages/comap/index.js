import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Comap from "@/components/Comap/Comap";
import {fetcher} from "../../../lib/api";


const Index = ({ comaps }) => {

    return (
        <>
            <Comap comaps={comaps}/>
        </>
    )
}


export default Index;

export async function getStaticProps() {
    const dataResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/comaps?populate=*`);
    return {
        props: {
            comaps: dataResponse
        }
    }
}