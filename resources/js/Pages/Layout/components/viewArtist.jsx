import { router } from "@inertiajs/react";
import React from "react";
import { FaHeart } from "react-icons/fa";
import Layout from "../shared/layout";
export default function ViewArtist({ artist, user, flash }) {
    const { success, error } = flash;

    console.log(artist);
    return (
        <Layout
            page={"view-artist"}
            user={user}
            error={error}
            success={success}
        >
            <div className="min-h-screen w-full mx-auto bg-gray-100 flex flex-col ">
                <div className="relative  w-full h-36 bg-white  shadow-lg overflow-hidde mb-14">
                    <div className=" absolute inset-0 overflow-hidden bg-red-200">
                        <img
                            className=" object-cover h-auto w-full"
                            src={
                                artist.image.filter(
                                    (img) => img.size == "large"
                                )[0]["#text"]
                            }
                            alt=""
                        />
                        <div className="absolute inset-0 backdrop backdrop-blur-10 bg-gradient-to-b from-transparent to-black"></div>
                    </div>
                    <div className="absolute flex space-x-6 transform translate-x-6 translate-y-8">
                        <div className=" w-36 h-36 rounded-lg shadow-lg overflow-hidden">
                            <img
                                className="object-cover w-36 h-36"
                                src={
                                    artist.image.filter(
                                        (img) => img.size == "large"
                                    )[0]["#text"]
                                }
                                alt=""
                            />
                        </div>
                        <div className="text-white pt-12">
                            <h3 className="font-bold">{artist.name}</h3>
                            <div className="text-sm opacity-60">
                                {artist.name}
                            </div>

                            <div className="mt-8 text-gray-400">
                                <div className="flex items-center space-x-2 text-xs">
                                    <span>{artist.artist}</span>{" "}
                                    <span className="border rounded px-2">
                                        Played ({artist.stats.playcount})
                                    </span>{" "}
                                    <span className="border rounded px-2">
                                        {" "}
                                        Published - {artist.bio?.published}
                                    </span>
                                    {user && (
                                        <button
                                            className="p-2 hover:bg-slate-300 rounded-full"
                                            title="favourite the artist"
                                            onClick={() => {
                                                router.post(
                                                    "/favourite/artist",
                                                    artist
                                                );
                                            }}
                                        >
                                            <FaHeart className=" hover:text-red-600 text-gray-400" />{" "}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-slate-200 m-6 p-2 rounded ">
                    <h1 className=" font-bold">Summary</h1>
                    <div
                        className=" text-justify"
                        dangerouslySetInnerHTML={{
                            __html: artist.bio?.summary,
                        }}
                    />
                </div>
                <div className=" bg-slate-200 m-6 p-2 rounded ">
                    <h1 className=" font-bold">Similar Artists </h1>
                    <ul>
                        {artist.similar.artist.map((_artist, i) => {
                            return (
                                <li className="my-2 p-2 hover:bg-slate-50" key={i}>
                                    <div className="flex">
                                        <a
                                            href={_artist.url}
                                            target="_blank"
                                            className="flex-grow"
                                        >
                                            {_artist.name}
                                        </a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

// "artist" => "Erik Wøllo"
//   "mbid" => "a6c38161-25e7-453a-a852-1961a27e386f"
//   "tags" => array:1 [▶]
//   "name" => "Timelines"
//   "image" => array:6 [▼
//     0 => array:2 [▼
//       "size" => "small"
//       "#text" => "https://lastfm.freetls.fastly.net/i/u/34s/10e52d6f33296b1cbdfbfd2e85ac4c77.png"
//     ]
//     1 => array:2 [▼
//       "size" => "medium"
//       "#text" => "https://lastfm.freetls.fastly.net/i/u/64s/10e52d6f33296b1cbdfbfd2e85ac4c77.png"
//     ]
//     2 => array:2 [▼
//       "size" => "large"
//       "#text" => "https://lastfm.freetls.fastly.net/i/u/174s/10e52d6f33296b1cbdfbfd2e85ac4c77.png"
//     ]
//     3 => array:2 [▼
//       "size" => "extralarge"
//       "#text" => "https://lastfm.freetls.fastly.net/i/u/300x300/10e52d6f33296b1cbdfbfd2e85ac4c77.png"
//     ]
//     4 => array:2 [▼
//       "size" => "mega"
//       "#text" => "https://lastfm.freetls.fastly.net/i/u/300x300/10e52d6f33296b1cbdfbfd2e85ac4c77.png"
//     ]
//     5 => array:2 [▼
//       "size" => ""
//       "#text" => "https://lastfm.freetls.fastly.net/i/u/300x300/10e52d6f33296b1cbdfbfd2e85ac4c77.png"
//     ]
//   ]
//   "tracks" => array:1 [▼
//     "track" => array:9 [▼
//       0 => array:6 [▶]
//       1 => array:6 [▶]
//       2 => array:6 [▶]
//       3 => array:6 [▶]
//       4 => array:6 [▶]
//       5 => array:6 [▶]
//       6 => array:6 [▶]
//       7 => array:6 [▶]
//       8 => array:6 [▶]
//     ]
//   ]
//   "listeners" => "808"
//   "playcount" => "15728"
//   "url" => "https://www.last.fm/music/Erik+W%C3%B8llo/Timelines
