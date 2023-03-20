import React, { useEffect, useState } from "react";
import Album from "../shared/album";
import Footer from "../shared/footer";
import Header from "../shared/header";

export default function Search({ albums, term, page, user }) {
    const [searchTerm, setSearchTerm] = useState(term);
    useEffect(() => {
        setSearchTerm(term);
    });

    let pageData = {
        page: "search",
        user,
    };
    return (
        <div className="container mx-auto">
            <Header data={pageData} />
            <form className=" h-14 my-4">
                <div className="rounded border flex">
                    <input
                        className="rounded flex-auto outline-none indent-1"
                        type="text"
                        name="q"
                        defaultValue={searchTerm}
                        onKeyUpCapture={(el) => {
                            setSearchTerm(el.target.value);
                        }}
                    />
                    <button
                        className=" rounded-r bg-blue-700 px-3 text-white"
                        type="submit"
                    >
                        search
                    </button>
                </div>
            </form>
            <ul className="divide-y divide-slate-100">
                {albums.map((album, id) => {
                    return <Album album={album} key={id} />;
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

            <Footer />
        </div>
    );
}
