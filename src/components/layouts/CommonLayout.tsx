import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const CommonLayout = () => {
    return (
        <div data-theme="black" className='bg-base-100'>
            <Header />
            <div className="max-w-7xl mx-auto bg-base-100">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;
