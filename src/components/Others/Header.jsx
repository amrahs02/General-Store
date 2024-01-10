import sprite4 from '../../assets/images/sprite-4.jpg';

const Header = () => {
    return (
        <>
            <div className='bg-slate-700 my-4 flex justify-center items-center rounded-xl' >
                <div className="heading m-4 rounded-xl ">
                    <div className="h-56">
                        <img
                            className='w-screen rounded-xl h-full  object-cover '
                            src={sprite4}
                            alt="Slide 1"
                        />
                    </div>
                    <div className='relative bottom-10 left-1/2 font-bold w-5/6 transform -translate-x-1/2  -translate-y-1/2 text-center text-white'>
                        Welcome to our Cold Drinks Section
                    </div>
                </div>
            </div>
        </>
    );
};




export default Header;