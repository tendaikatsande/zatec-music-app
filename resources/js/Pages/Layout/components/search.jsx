import React, { useEffect, useState } from "react";
import { FaRecordVinyl, FaUser } from "react-icons/fa";
import Layout from "../shared/layout";
import SearchAlbum from "./searchAlbum";
import SearchArtist from "./searchArtist";

export default function Search({ albums, artists, term, page, user, tab }) {
    const [searchTerm, setSearchTerm] = useState(term);
    const [selectedTab, setSelectedTab] = useState(tab);

    useEffect(() => {
        setSearchTerm(term);
    });


    const handleSelectedTab = (value) => {
        setSelectedTab(value);
    };
    return (
        <Layout page={"search"} user={user}>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="mr-2">
                        <a
                            href="/search/albums"
                            {...(selectedTab === 1
                                ? {
                                      className:
                                          "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group",
                                  }
                                : {
                                      className:
                                          "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group",
                                  })}
                            onClick={() => handleSelectedTab(1)}
                        >
                            <FaRecordVinyl className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" />
                            Album Search
                        </a>
                    </li>
                    <li className="mr-2">
                        <a
                            href="/search/artists"
                            {...(selectedTab === 2
                                ? {
                                      className:
                                          "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group",
                                  }
                                : {
                                      className:
                                          "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group",
                                  })}
                            onClick={() => handleSelectedTab(2)}
                        >
                            <FaUser className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" />
                            Artist Search
                        </a>
                    </li>
                </ul>
            </div>
            {selectedTab == 1 && (
                <SearchAlbum
                    albums={albums}
                    term={term}
                    page={page}
                    user={user}
                />
            )}
            {selectedTab == 2 && (
                <SearchArtist
                    artists={artists ?? []}
                    term={term}
                    page={page}
                    user={user}
                />
            )}
        </Layout>
    );
}
