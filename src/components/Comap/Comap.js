import ComapList from "./ComapList";
import Header from "@/components/Header/Header";


const Comap = ({comaps}) => {
    return (
        <>
            <Header />
            <div className='item-list'>
                {comaps.data.map(comap => {
                    return <ComapList comap={comap} key={comap.id}/>
                })}
            </div>
        </>
    )
}

export default Comap;