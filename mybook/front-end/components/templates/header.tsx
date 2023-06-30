import { findByGenre } from "@/pages/api/hello";

export default function NavBar () {
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">MyBook</a>
  </div>
  <div className="flex-none gap-2">
  <form className="py-3">   
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative indicator">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Title" required></input>
                        <span className="indicator-item badge badge-secondary">new</span>
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Search</button>
                    </div>
                </form>
    <select className="select select-bordered join-item">
    <option disabled selected>Category</option>
    <option>Sci-fi</option>
    <option onClick={(e:any) => findByGenre("Drama")}>Drama</option>
    <option onClick={(e:any) => findByGenre("Horror")}>Horror</option>
    <option onClick={(e:any) => findByGenre("Historical")}>Historical</option>
    <option onClick={(e:any) => findByGenre("Fantasy")}>Fantasy</option>
    <option onClick={(e:any) => findByGenre("Thriller")}>Thriller</option>
    <option onClick={(e:any) => findByGenre("Mystery")}>Mystery</option>
    <option onClick={(e:any) => findByGenre("Adventure")}>Adventure</option>
  </select>
  </div>
</div>
</>
    )
}
// import { findByGenre } from "@/pages/api/hello";
// import { booksType } from "../models/Books.model";

// export default function NavBar({ books }) {
//   return (
//     <>
//       <div className="navbar bg-base-100">
//         <div className="flex-1">
//           <a className="btn btn-ghost normal-case text-xl">MyBook</a>
//         </div>
//         <div className="flex-none gap-2">
//           <form className="py-3">
//             <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
//               Search
//             </label>
//             <div className="relative indicator">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg
//                   aria-hidden="true"
//                   className="w-5 h-5 text-gray-500 dark:text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   ></path>
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 id="default-search"
//                 className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="Book Title"
//                 required
//               ></input>
//               <span className="indicator-item badge badge-secondary">new</span>
//               <button
//                 type="submit"
//                 className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//           <select className="select select-bordered join-item border-2">
//             <option disabled selected>
//               Category
//             </option>
//             <option>Sci-fi</option>
//             <option onClick={(e) => findByGenre("Drama")}>Drama</option>
//             <option onClick={(e) => findByGenre("Horror")}>Horror</option>
//             <option onClick={(e) => findByGenre("Historical")}>
//               Historical
//             </option>
//             <option onClick={(e) => findByGenre("Fantasy")}>Fantasy</option>
//             <option onClick={(e) => findByGenre("Thriller")}>Thriller</option>
//             <option onClick={(e) => findByGenre("Mystery")}>Mystery</option>
//             <option onClick={(e) => findByGenre("Adventure")}>
//               Adventure
//             </option>
//           </select>
//         </div>
//       </div>

//       {/* Displays the books */}
//       <div className="grid grid-cols-4">
//         <>
//           {books &&
//             books.map((book) => (
//               <div key={book.id} className="card w-96 bg-base-100">
//                 <figure>
//                   <img
//                     src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
//                     alt="Book Cover"
//                   />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title">{book.title}</h2>
//                   <p>by: {book.author}</p>
//                 </div>
//               </div>
//             ))}
//         </>
//       </div>

//       <div className="flex justify-center">
//         <div className="w-2/3">
//           <div className="card w-auto bg-[#4b0c89] text-neutral-content">
//             <div className="flex items-center justify-evenly p-6">
//               <div className="text-xl font-bold">
//                 Subscribe to Newsletter
//               </div>
//               <input
//                 type="text"
//                 placeholder="Email Address"
//                 className="p-5 input input-bordered input-primary w-full max-w-xs rounded-full"
//               />
//               <button
//                 type="button"
//                 className="text-white bg-[#43015e] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center pt-5">
//         <nav aria-label="Page navigation">
//           <ul className="inline-flex items-center -space-x-px">
//             <li>
//               <a
//                 href="#"
//                 className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 <span className="sr-only">Previous</span>
//                 <svg
//                   aria-hidden="true"
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </a>
//             </li>
//             <li className="p-2">
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 1
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 2
//               </a>
//             </li>
//             <li className="p-2">
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 3
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 4
//               </a>
//             </li>
//             <li className="p-2">
//               <a
//                 href="#"
//                 className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 5
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               >
//                 <span className="sr-only">Next</span>
//                 <svg
//                   aria-hidden="true"
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

