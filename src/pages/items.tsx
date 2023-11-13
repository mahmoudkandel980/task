import ItemsHeader from "../components/items/itemsHeader";
import TabelHeader from "../components/items/tabel/tabelHeader";
import TabelBody from "../components/items/tabel/tabelBody";
import Pagination from "../components/shared/pagination";

const Items = () => {
    return (
        <div className='sm:px-10 px-1 sm:pl-20 mt-20 w-screen overflow-x-scroll'>
            <ItemsHeader />
            <table className='w-full mt-10'>
                <TabelHeader />
                <TabelBody />
            </table>
            <Pagination />
        </div>
    );
};

export default Items;
