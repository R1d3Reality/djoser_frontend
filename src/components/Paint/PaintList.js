import Link from "next/link";
import Image from "next/image";

const PaintList = ({paint}) => {
    const url = 'http://127.0.0.1:1337';
    const imgURL = url + `${paint.attributes.photo.data[0].attributes.url}`
    return (
        <article key={paint.id} className='list-item'>
            <Image
                className='list-item-img'
                src={imgURL}
                alt='product-image'
                width={195}
                height={100}
            />
            <Link
                className='list-item-txt'
                href={`paint/` + paint.attributes.slug}>
                    {paint.attributes.name}
            </Link>
        </article>
    )
}

export default PaintList;