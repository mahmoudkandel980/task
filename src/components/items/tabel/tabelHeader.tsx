import { TABEL_HEADER_ITEMS } from "../../../data/items";

const TabelHeader = () => {
    return (
        <thead>
            <tr className='h-16'>
                {TABEL_HEADER_ITEMS.map((tabelHeader, i) => (
                    <td key={i} className='font-[600] min-w-[96px] text-[13px]'>
                        {tabelHeader}
                    </td>
                ))}
            </tr>
        </thead>
    );
};

export default TabelHeader;
