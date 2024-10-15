// // import productsData from "../../assets/Data/cold-drinks.json";
// import productsDataNew from "../../assets/Data/productsDataNew";
// import Header from "../Others/Header";
// import Breadcrumb from "../Others/BreadCrumb";
// import ProductsCard from "./ProductsCard";


// const drinkComponent = () => {
//   const openWhatsApp = () => {
//     window.open("https://wa.me/**********", "_blank");
//   };

//   return (
//     <div className="cold-drink-container sm:m-10 text-white">
//       <Breadcrumb />
//       <Header />
//       <div className="cold-drink-content bg-slate-700  rounded-2xl shadow-md text-center">
//         <h1 className="text-4xl font-bold mb-6 bg-slate-800 text-blue-500 p-4 rounded-2xl">
//           Explore Our Refreshing Collection at{" "}
//           <span className="block">General Store</span>
//         </h1>

//         <p className="text-gray-300 bg-slate-800 text-lg mb-6 p-4 rounded-2xl">
//           Discover a variety of drinks, chocolates, and more. Special
//           offers available from 7 AM to 9 PM daily at{" "}
//           <span className="font-bold text-blue-500">General Store</span>.
//         </p>

//         {/* Display Filtered Products */}
//         <h2 className="text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-2xl p-4 font-bold">
//           Our Collection
//         </h2>
//         <section id="home">
//           <div className="home_content w-fit grid grid-rows-4 grid-cols-5 ">
//             {productsDataNew.map((item) => (
//               <ProductsCard key={item.id} {...item} />
//             ))}
//           </div>
//         </section>

//         {/* Special Event Orders Section */}
//         <h2 className="text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-2xl p-4 font-bold">
//           Special Event Orders
//         </h2>
//         <div className="flex gap-2">
//           <div className="document-submission w-full bg-slate-800 text-gray-300 p-8 rounded-2xl">
//             <h2 className="text-xl font-bold mb-4">Bulk Orders for Events</h2>
//             <p className="text-gray-300 mb-4">
//               Planning a wedding, birthday, or another event? Avail special
//               discounts on bulk orders for drinks. Contact us to customize
//               your order and get the best deals for your special occasion!
//             </p>
//             <button
//               className="btn bg-blue-500 hover:bg-blue-700 py-3 px-4 m-2 rounded-2xl text-white"
//               onClick={openWhatsApp}
//             >
//               Order Now for Your Event
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default drinkComponent;
