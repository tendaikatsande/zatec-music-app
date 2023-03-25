import { router } from "@inertiajs/react";
import React from "react";
import { FaHeart } from "react-icons/fa";
import Layout from "../shared/layout";
export default function ViewAlbumDetails({ album, user, flash }) {
    const { success, error } = flash;
    console.log(album);
    return (
        <Layout page={"view-album"} user={user} error={error} success={success}>
            <div className="min-h-screen w-full mx-auto bg-gray-100 flex flex-col ">
                <div className="relative  w-full h-36 bg-white  shadow-lg overflow-hidde mb-12">
                    <div className=" absolute inset-0 overflow-hidden bg-red-200">
                        <img
                            className=" object-cover h-auto w-full"
                            src={
                                album.image.filter(
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
                                    album.image.filter(
                                        (img) => img.size == "large"
                                    )[0]["#text"]
                                }
                                alt=""
                            />
                        </div>
                        <div className="text-white pt-12">
                            <h3 className="font-bold">{album.name}</h3>
                            <div className="text-sm opacity-60">
                                {album.artist}
                            </div>
                            <div className="mt-8 text-gray-400">
                                <div className="flex items-center space-x-2 text-xs">
                                    <span>{album.artist}</span>{" "}
                                    <span className="border rounded px-2">
                                        Tracks ({album.tracks.track.length ?? 0}
                                        )
                                    </span>{" "}
                                    <span className="border rounded px-2">
                                        {" "}
                                        Published - {album.wiki?.published}
                                    </span>
                                    {user && (
                                        <button
                                            className="p-2 hover:bg-slate-300 rounded-full"
                                            title="favourite the album"
                                            onClick={() => {
                                                router.post(
                                                    "/favourite/album",
                                                    album
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
                            __html: album.wiki?.summary,
                        }}
                    />
                </div>
                <div className=" bg-slate-200 m-6 p-2 rounded ">
                    <h1 className=" font-bold">
                        Tracks{" "}
                        <span className=" border border-gray-800 rounded  px-1 font-thin">
                            {album.tracks.track.length}
                        </span>
                    </h1>
                    <ul>
                        {album.tracks.track.map((track, i) => {
                            return (
                                <li
                                    className=" my-2 p-2 hover:bg-slate-50 "
                                    key={i}
                                >
                                    <div className="flex">
                                        <a href={track.url} target="_blank" className="flex-grow">
                                            {track.name}{" "}
                                            {track.duration && (
                                                <span className=" mr-2 px-1 border border-gray-300 rounded font-thin text-sm">
                                                    {Number(
                                                        track.duration / 60
                                                    ).toFixed(2)} 
                                                    min
                                                </span>
                                            )}
                                        </a>

                                        <span>{track.artist.name}</span>
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
