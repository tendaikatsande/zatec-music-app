import React from "react";
import Layout from "../shared/layout";
import { Link, router } from "@inertiajs/react";
import { FaEye, FaTrash } from "react-icons/fa";
export default function FavouriteAlbums({ favourites, user, flash }) {
    const { success, error } = flash;
    return (
        <Layout
            user={user}
            page={"favourite-albums"}
            error={error}
            success={success}
        >
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            Album
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Artist
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {favourites.data.map((favourite) => (
                                        <tr className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {favourite.name}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {favourite.artist}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 flex">
                                                <Link
                                                    className="p-2 hover:bg-slate-300 rounded-full"
                                                    href={route(
                                                        "album.destroy",
                                                        favourite.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                >
                                                    {" "}
                                                    <FaTrash className=" text-red-600" />
                                                </Link>
                                                <button
                                                    className="p-2 hover:bg-slate-300 rounded-full"
                                                    title="view the album"
                                                    onClick={() => {
                                                        router.get(
                                                            `/albums/${favourite.name}/${favourite.artist}`
                                                        );
                                                    }}
                                                >
                                                    <FaEye className=" hover:text-green-600 text-gray-400" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex items-start justify-center">
                                <div className="p-4">
                                    {favourites.links.map((link) => (
                                        <a
                                            className=" p-2"
                                            href={link.url}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
