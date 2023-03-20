import { router } from "@inertiajs/react";
import React from "react";
export default function ({ album }) {
    // "name" => "Harmacy"
    // "artist" => "Sebadoh"
    // "url" => "https://www.last.fm/music/Sebadoh/Harmacy"
    // "image" => array:4 [▶]
    // "streamable" => "0"
    // "mbid" => "390903f1-675f-4ac9-aff4-cdf38f31b0a6"
    return (
        <article className="flex items-start space-x-6 p-6">
            <img
                src={
                    album.image.filter((img) => img.size == "small")[0]["#text"]
                }
                alt=""
                width="60"
                height="88"
                className="flex-none rounded-md bg-slate-100"
            />
            <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-900 truncate pr-20">
                    {album.name}
                </h2>
                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                    <div className="absolute top-0 right-0 flex items-center space-x-1">
                        <dt className="text-sky-500">
                            <span className="sr-only">Star rating</span>
                        </dt>
                        <dd>
                            <button
                                onClick={() => {
                                    router.post("/favourite/albums/", album);
                                }}
                            >
                                favourite album{" "}
                            </button>
                        </dd>
                        <dd>
                            <a href={`/albums/${album.name}/${album.artist}`}>
                                view album
                            </a>
                        </dd>
                    </div>
                </dl>
                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                    <div>
                        <dt className="sr-only">Artist</dt>
                        <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                            {album.artist}
                        </dd>
                    </div>

                    <div className="flex-none w-full mt-2 font-normal">
                        <dt className="sr-only">Get more</dt>
                        <dd className="text-slate-400">
                            <a href={album.url}>check it out</a>
                        </dd>
                    </div>
                </dl>
            </div>
        </article>
    );
}
