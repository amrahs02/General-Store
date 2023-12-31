import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  const currentRoute = window.location.pathname;
  const segments = currentRoute.split('/').filter(Boolean);

  return (
    <div id="breadcrumb-container" className="bg-gray-800 p-4 sm:px-8 shadow-md">
      <Link to="/" className="text-blue-100 font-semibold hover:underline">
        Home
      </Link>
      {segments.map((segment, index) => (
        <span key={segment} className="mx-2 text-gray-400">
          <span className="mx-1">&gt;</span>
          <Link
            to={`/${segments.slice(0, index + 1).join('/')}`}
            className="text-blue-200 font-semibold hover:underline"
          >
            {segment}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
