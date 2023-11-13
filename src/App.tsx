import { Route, Routes, Navigate } from "react-router-dom";

import Items from "./pages/items";
import CreateItem from "./pages/createItem";
import NotFound from "./pages/404";
import Header from "./components/header/header";

const App = () => {
    return (
        <main className='w-full flex flex-col min-h-screen'>
            <Header />
            <div className='h-full flex-1 pb-10'>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate replace to='/items' />}
                    />
                    <Route path='/items' element={<Items />} />
                    <Route path='/items/create' element={<CreateItem />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
        </main>
    );
};

export default App;
