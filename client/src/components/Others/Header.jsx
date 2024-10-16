import { useLocation } from 'react-router-dom';
import coldrink from '../../assets/images/sprite-4.jpg';
// import dairy from '../../assets/images/healthy.png';
import xerox from '../../assets/images/hp-printer.png';

const Header = () => {

    const location = useLocation();
    const isXeroxRoute = location.pathname === '/xerox';
    // const isDairyRoute = location.pathname === '/dairy';
    const isDrinksRoute = location.pathname === '/drinks';
    // console.log(location); 


    return (
        <>
            <div className='bg-slate-700 my-4 flex justify-center items-center rounded-2xl' >
                <div className="heading rounded-2xl ">
                    <div className="h-32">
                        {isDrinksRoute && (
                            <img
                                className='w-screen blur-sm rounded-2xl h-full  object-cover '
                                src={coldrink}
                                alt="Slide 1"
                            />
                        )}
                        {isXeroxRoute && (
                            <img
                                className='w-screen blur-sm rounded-2xl h-full  object-cover '
                                src={xerox}
                                alt="Slide 1"
                            />
                        )}
                    </div>
                    {isDrinksRoute && (
                        <div className='relative bottom-10 left-1/2 font-bold w-5/6 transform -translate-x-1/2  -translate-y-1/2 text-center text-white'>
                            Welcome to our Drinks Section
                        </div>

                    )}
                    

                    {isXeroxRoute && (
                        <div className='relative bottom-10 left-1/2 font-bold w-5/6 transform -translate-x-1/2  -translate-y-1/2 text-center text-white'>
                            Welcome to our xerox Section
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};




export default Header;