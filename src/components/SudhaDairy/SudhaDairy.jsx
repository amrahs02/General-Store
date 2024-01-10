import { Link } from 'react-router-dom';
import sudhaProducts from '../../assets/Data/Sudha-dairy.json';
import BreadCrumb from '../Others/BreadCrumb';
import Header from '../Others/Header';
import namesData from '../../assets/Data/Names.json';

const SudhaDairySection = () => {
  return (
    <>
      <div className="sudha-dairy-container sm:m-10 m-4 p-0 bg-slate-800 text-white">
        <BreadCrumb />
        <Header />

        <div className="xerox-content bg-slate-700 p-4 rounded-xl shadow-md text-center">
          <h1 className="text-4xl font-bold mb-6 bg-slate-800 text-blue-500  p-4 rounded-xl">
            Welcome to <span className="block">{namesData.shopName}</span>
          </h1>

          <div className='w-fit '>
            {sudhaProducts.categories.map((category) => (
              <div key={category.name} className="sudha-category relative rounded-xl bg-slate-600 text-gray-300 p-6 hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <ul>
                  {category.products.map((product) => (
                    <li key={product.name} className="mb-4">
                      <Link to={`/sudhadairy/${category.name.toLowerCase()}/${product.name.toLowerCase()}`}>
                        <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded-md" />
                        <p className="text-gray-300">{product.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SudhaDairySection;
