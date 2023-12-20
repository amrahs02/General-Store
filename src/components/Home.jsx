
import { Suspense, lazy } from 'react';
import Products from './Products';
// import Footer from './Others/Footer';
const MainHeading = lazy(() => import('./MainHeading'));
import { SyncLoader } from 'react-spinners'; // Import the SyncLoader from react-spinners


const Home = () => (
  <div className="home-container">
    <header className="hero-section">
      <Suspense fallback={<LoadingFallback />}>
        <MainHeading />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
      </Suspense>
    </header>
    <Suspense fallback={<LoadingFallback />}>
    </Suspense>
    <Suspense fallback={<LoadingFallback />}>
      <Products />
      {/* <Footer /> */}
    </Suspense>

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
