import sprite4 from '../../assets/images/sprite-4.jpg';

const Header = () => {
    return (
        <>
            <div className="heading   bg-black">
                <div className=" w-screen  h-56">
                    <img
                        className='w-screen h-full opacity-70 object-cover '
                        src={sprite4}
                        alt="Slide 1"
                    />
                </div>
                <div className='absolute top-1/3 left-1/2 font-bold w-5/6 transform -translate-x-1/2  -translate-y-1/2 text-center text-white'>
                    Welcome to our Cold Drinks Section
                </div>
            </div>
        </>
    );
};




export default Header;