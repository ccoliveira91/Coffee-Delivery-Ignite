import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout';
import { CompleteOrder } from './pages/CompleteOrder';
import { FinishedOrder } from './pages/FinishedOrder';
import { Home } from './pages/Home';

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/completeOrder' element={<CompleteOrder />} />
            <Route path='/finishedOrder' element={<FinishedOrder />} />
            </Route>
        </Routes>
    );
}