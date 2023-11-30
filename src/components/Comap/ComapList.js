import Link from "next/link";
import Image from "next/image";

const ComapList = ( {comap} ) => {
    const url = 'http://127.0.0.1:1337';
    const imgURL = url + `${comap.attributes.photo.data[0].attributes.url}`;
    return (
        <article key={comap.id}>
            <Image
                className=''
                src={imgURL}
                alt='product-image'
                width={200}
                height={100}
            />
            <Link href={`comap/` + comap.attributes.slug}>
                <p>
                    {comap.attributes.name}
                </p>
            </Link>
        </article>
    )
}

export default ComapList;