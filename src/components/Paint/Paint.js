// import PaintList from "@/components/Paint/PaintList";
//
// const Paint = ({paints}) => {
//     return (
//         <div className='list'>
//             {paints.data.map(paint => {
//                 return <PaintList paint={paint} key={paint.id} />
//             })}
//         </div>
//     )
// }
//
// export default Paint;
import React, { useState } from 'react';
import PaintList from "@/components/Paint/PaintList";
import SearchBox from "@/components/SearchBox/SearchBox";

const Paint = ({ paints }) => {
    const [filteredPaints, setFilteredPaints] = useState(paints.data);

    const handleSearch = (query) => {
        // Отримати відфільтрований масив paints на основі запиту користувача (query)
        const filtered = paints.data.filter((paint) =>
            paint.attributes.name.toLowerCase().includes(query.toLowerCase()) ||
            paint.attributes.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPaints(filtered);
    };

    return (
        <div>
            <SearchBox onSearch={handleSearch} />
            <div className='list'>
                {filteredPaints.map((paint) => (
                    <PaintList paint={paint} key={paint.id} />
                ))}
            </div>
        </div>
    );
};

export default Paint;
