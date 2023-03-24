import React from "react";
import { router } from "@inertiajs/react";
import { FaEye, FaHeart } from "react-icons/fa";
export default function Artist({ artist, user }) {
    return (
        <article className="flex items-start space-x-6 p-6">
            <img
                src={
                    artist.image.filter((img) => img.size == "small")[0][
                        "#text"
                    ]
                }
                alt=""
                width="60"
                height="88"
                className="flex-none rounded-md bg-slate-100"
            />
            <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-900 truncate pr-20">
                    {artist.name}
                </h2>
                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                    <div className="absolute top-0 right-0 flex items-center space-x-1">
                        <dt className="text-sky-500">
                            <span className="sr-only"></span>
                        </dt>
                        <dd>
                            {user && (
                                <button
                                    className="p-2 hover:bg-slate-300 rounded-full"
                                    title="favourite the artist"
                                    onClick={() => {
                                        router.post(
                                            "/favourite/artist",
                                            artist,
                                        );
                                    }}
                                >
                                    <FaHeart className=" hover:text-red-600 text-gray-400" />{" "}
                                </button>
                            )}
                        </dd>
                        <dd>
                            <button
                                className="p-2 hover:bg-slate-300 rounded-full"
                                title="view the artist"
                                onClick={() => {
                                    router.get(`/artists/${artist.name}`);
                                }}
                            >
                                <FaEye className=" hover:text-green-600 text-gray-400" />
                            </button>
                        </dd>
                    </div>
                </dl>
                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                    <div>
                        <dt className="sr-only">Listeners</dt>
                        <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                            listeners - {artist.listeners}
                        </dd>
                    </div>

                    <div className="flex-none w-full mt-2 font-normal">
                        <dt className="sr-only">Get more</dt>
                        <dd className="text-slate-400">
                            <a href={artist.url}>check it out on last fm</a>
                        </dd>
                    </div>
                </dl>
            </div>
        </article>
    );
}

// [▼
//     "name" => "Jidenna"
//     "listeners" => "219695"
//     "mbid" => ""
//     "url" => "https://www.last.fm/music/Jidenna"
//     "streamable" => "0"
//     "image" => array:5 [▼
//       0 => array:2 [▶]
//       1 => array:2 [▶]
//       2 => array:2 [▶]
//       3 => array:2 [▶]
//       4 => array:2 [▶]
//     ]
//   ]
