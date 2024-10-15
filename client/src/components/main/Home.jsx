
import { Suspense, lazy } from 'react';
const MainPage = lazy(() => import('./MainPage'));
import { SyncLoader } from 'react-spinners'; // Import the SyncLoader from react-spinners
import ProductsPage from './ProductPage';
import CategoryCard from  '../categories/CategoryCard';
// import UnderConstruction from '../Others/UnderConstruction';
// import Gallery from './Gallery';



const Home = () => {


  return (
    <div className="home-container">
      <Suspense fallback={<LoadingFallback />}>
        <MainPage />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        {/* <Products /> */}
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CategoryCard />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ProductsPage />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        {/* <Gallery /> */}
      </Suspense>
      {/* <UnderConstruction /> */}
      {/* <h1>Hello {user.name}</h1> */}
      {/* <h1>Hello {user.name}</h1> */}

    </div>
  )
};

export default Home;



// Loading fallback component using react-spinners SyncLoader
const LoadingFallback = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <p>Loading...</p>
      <SyncLoader color="#36D7B7" size={10} margin={5} />
    </div>
  </div>
);
