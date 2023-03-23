import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Album from "../shared/album";


export default function SearchAlbum({ albums, term, page, user }) {
    const [searchTerm, setSearchTerm] = useState(term);
    useEffect(() => {
        setSearchTerm(term);
    });

    let pageData = {
        page: "search",
        user,
    };
    return (
        <div className="container mx-auto py-4">
            <form className=" h-14 my-4">
                <div className="rounded border flex">
                    <input
                        className="rounded flex-auto outline-none indent-1 py-1"
                        type="text"
                        name="q"
                        placeholder="search for an album"
                        defaultValue={searchTerm}
                        onKeyUpCapture={(el) => {
                            setSearchTerm(el.target.value);
                        }}
                    />
                    <button
                        className=" rounded-r bg-blue-700 px-3 text-white"
                        type="submit"
                    >
                        <FaSearch/>
                    </button>
                </div>
            </form>
            <ul className="divide-y divide-slate-100">
                {albums.map((album, id) => {
                    return <Album album={album} user={user} key={id} />;
                })}
            </ul>

            <div className="flex flex-col items-center">
                <div className="inline-flex mt-2 xs:mt-0">
                    {page > 1 && (
                        <a
                            href={`?q=${searchTerm}&page=${Number(page) - 1}`}
                            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Prev
                        </a>
                    )}
                    {searchTerm && (
                        <a
                            href={`?q=${searchTerm}&page=${Number(page) + 1}`}
                            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Next
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
