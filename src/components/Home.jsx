
import { Suspense, lazy } from 'react';
import Products from './Products';
const MainHeading = lazy(() => import('./MainHeading'));
import { SyncLoader } from 'react-spinners'; // Import the SyncLoader from react-spinners
import CategoryCard from './CategoryCard';
import UnderConstruction from './Others/UnderConstruction';


const Home = () => (
  <div className="home-container">
    <Suspense fallback={<LoadingFallback />}>
      <MainHeading />
    </Suspense>
    <Suspense fallback={<LoadingFallback />}>
      {/* <Products /> */}
    </Suspense>
    <Suspense fallback={<LoadingFallback />}>
      <CategoryCard />
    </Suspense>
    <UnderConstruction />

  </div>
);

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
